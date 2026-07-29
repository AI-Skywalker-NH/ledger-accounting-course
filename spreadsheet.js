/* ===========================================================================
   SheetGrid — a tiny keyboard-first spreadsheet for the Excel-build drills.

   Features: A1-style cells, real formulas (= with + - * /, parentheses, cell
   refs, ranges, and SUM/AVERAGE/MIN/MAX/ABS/ROUND), full keyboard navigation,
   and a mouse-audit hook. Mouse clicks inside the grid are intentionally
   ignored (you must navigate with the keyboard) but are counted.

   window.SheetGrid(hostEl, { rows, cols, onMouse }) -> { snapshot, reset, focus }
   =========================================================================== */
(function () {
  "use strict";

  const colName = (i) => {
    let s = "";
    i++;
    while (i > 0) { const m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - 1) / 26); }
    return s;
  };
  const parseRef = (ref) => {
    const m = /^([A-Z]+)(\d+)$/.exec(ref);
    if (!m) return null;
    let c = 0;
    for (let k = 0; k < m[1].length; k++) c = c * 26 + (m[1].charCodeAt(k) - 64);
    return { c: c - 1, r: parseInt(m[2], 10) - 1 };
  };
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
  const fmt = (v) => {
    if (typeof v !== "number" || !isFinite(v)) return "#NUM";
    const r = Math.round(v * 1e6) / 1e6;
    return r.toLocaleString("en-US", { maximumFractionDigits: 2 });
  };

  window.SheetGrid = function (host, opts) {
    opts = opts || {};
    const ROWS = opts.rows || 18;
    const COLS = opts.cols || 6;
    const onMouse = opts.onMouse || function () {};
    const data = {}; // ref -> raw string
    let active = { r: 0, c: 0 };
    let editing = false;
    let editSeed = null;
    let firstRender = true; // don't steal focus/scroll when the grid first mounts

    const refAt = (r, c) => colName(c) + (r + 1);
    const activeRef = () => refAt(active.r, active.c);
    const getRaw = (ref) => data[ref] || "";

    /* ---- formula evaluation ---- */
    function cellVal(ref, seen) {
      const raw = getRaw(ref).trim();
      if (raw === "") return 0;
      if (raw[0] === "=") {
        if (seen.has(ref)) throw new Error("CIRC");
        seen.add(ref);
        const v = evalExpr(raw.slice(1), seen);
        seen.delete(ref);
        return v;
      }
      const n = Number(raw.replace(/,/g, ""));
      return isNaN(n) ? 0 : n; // text cells count as 0 in formulas
    }

    function evalExpr(body, seen) {
      const T = tokenize(body);
      let p = 0;
      const peek = () => T[p];
      const next = () => T[p++];
      const expect = (t) => { if (T[p].type !== t) throw new Error("ERR"); p++; };

      const expandRange = (a, b) => {
        const A = parseRef(a), B = parseRef(b);
        if (!A || !B) throw new Error("REF");
        const out = [];
        for (let r = Math.min(A.r, B.r); r <= Math.max(A.r, B.r); r++)
          for (let c = Math.min(A.c, B.c); c <= Math.max(A.c, B.c); c++)
            out.push(cellVal(refAt(r, c), seen));
        return out;
      };
      const applyFn = (name, args) => {
        const nums = [];
        args.forEach((a) => { if (a.range) nums.push(...a.range); else nums.push(a.num); });
        switch (name) {
          case "SUM": return nums.reduce((s, n) => s + n, 0);
          case "AVERAGE": return nums.length ? nums.reduce((s, n) => s + n, 0) / nums.length : 0;
          case "MIN": return Math.min.apply(null, nums);
          case "MAX": return Math.max.apply(null, nums);
          case "ABS": return Math.abs(nums[0]);
          case "ROUND": return Number(nums[0].toFixed(nums[1] || 0));
          default: throw new Error("FN");
        }
      };

      function parseArgs() {
        const args = [];
        if (peek().type === ")") return args;
        args.push(parseArg());
        while (peek().type === ",") { next(); args.push(parseArg()); }
        return args;
      }
      function parseArg() {
        if (peek().type === "id" && T[p + 1] && T[p + 1].type === ":" && T[p + 2] && T[p + 2].type === "id") {
          const a = next().v.toUpperCase(); next(); const b = next().v.toUpperCase();
          return { range: expandRange(a, b) };
        }
        return { num: parseExpr() };
      }
      function parseFactor() {
        const tk = peek();
        if (tk.type === "-") { next(); return -parseFactor(); }
        if (tk.type === "+") { next(); return parseFactor(); }
        if (tk.type === "(") { next(); const v = parseExpr(); expect(")"); return v; }
        if (tk.type === "num") { next(); return tk.v; }
        if (tk.type === "id") {
          next();
          if (peek().type === "(") { next(); const args = parseArgs(); expect(")"); return applyFn(tk.v.toUpperCase(), args); }
          const ref = tk.v.toUpperCase();
          if (!parseRef(ref)) throw new Error("REF");
          return cellVal(ref, seen);
        }
        throw new Error("ERR");
      }
      function parseTerm() {
        let v = parseFactor();
        while (peek().type === "*" || peek().type === "/") {
          const op = next().type; const r = parseFactor();
          v = op === "*" ? v * r : v / r;
        }
        return v;
      }
      function parseExpr() {
        let v = parseTerm();
        while (peek().type === "+" || peek().type === "-") {
          const op = next().type; const r = parseTerm();
          v = op === "+" ? v + r : v - r;
        }
        return v;
      }
      const v = parseExpr();
      if (peek().type !== "eof") throw new Error("ERR");
      return v;
    }

    function tokenize(str) {
      const t = [];
      let i = 0;
      while (i < str.length) {
        const ch = str[i];
        if (ch === " ") { i++; continue; }
        if ("()+-*/,:".includes(ch)) { t.push({ type: ch }); i++; continue; }
        if (/[0-9.]/.test(ch)) { let j = i; while (j < str.length && /[0-9.]/.test(str[j])) j++; t.push({ type: "num", v: parseFloat(str.slice(i, j)) }); i = j; continue; }
        if (/[A-Za-z]/.test(ch)) { let j = i; while (j < str.length && /[A-Za-z0-9]/.test(str[j])) j++; t.push({ type: "id", v: str.slice(i, j) }); i = j; continue; }
        throw new Error("ERR");
      }
      t.push({ type: "eof" });
      return t;
    }

    function displayOf(ref) {
      const raw = getRaw(ref);
      const t = raw.trim();
      if (t === "") return { text: "", num: false };
      if (t[0] === "=") {
        try { return { text: fmt(cellVal(ref, new Set())), num: true }; }
        catch (e) { return { text: "#" + (e.message || "ERR"), num: true, err: true }; }
      }
      const isNum = !isNaN(Number(t.replace(/,/g, "")));
      return { text: raw, num: isNum };
    }

    /* ---- rendering ---- */
    function render() {
      let head = "<tr><th></th>";
      for (let c = 0; c < COLS; c++) head += `<th>${colName(c)}</th>`;
      head += "</tr>";

      let body = "";
      for (let r = 0; r < ROWS; r++) {
        body += `<tr><td class="rowhead">${r + 1}</td>`;
        for (let c = 0; c < COLS; c++) {
          const ref = refAt(r, c);
          const isActive = active.r === r && active.c === c;
          if (isActive && editing) {
            body += `<td class="cell active"><input class="cell-input" spellcheck="false" /></td>`;
          } else {
            const d = displayOf(ref);
            const cls = "cell" + (isActive ? " active" : "") + (d.num ? " num" : "") + (d.err ? " err" : "");
            body += `<td class="${cls}" data-r="${r}" data-c="${c}">${escapeHtml(d.text)}</td>`;
          }
        }
        body += "</tr>";
      }

      const fbRaw = editing ? (editSeed != null ? editSeed : getRaw(activeRef())) : getRaw(activeRef());
      host.innerHTML =
        `<div class="sheet-fbar"><span class="fb-ref">${activeRef()}</span><span class="fb-val">${escapeHtml(fbRaw)}</span></div>` +
        `<div class="sheet" tabindex="0"><table><thead>${head}</thead><tbody>${body}</tbody></table></div>`;

      const sheet = host.querySelector(".sheet");
      sheet.addEventListener("keydown", onKey);
      sheet.addEventListener("mousedown", (e) => { e.preventDefault(); onMouse(); sheet.focus(); });

      if (editing) {
        const inp = host.querySelector(".cell-input");
        inp.value = editSeed != null ? editSeed : getRaw(activeRef());
        inp.focus();
        const val = inp.value; inp.value = ""; inp.value = val; // caret to end
        inp.addEventListener("keydown", onEditKey);
      } else if (!firstRender) {
        sheet.focus();
      }
      firstRender = false;
    }
    const escapeHtml = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

    /* ---- interaction ---- */
    function move(dr, dc) {
      active.r = clamp(active.r + dr, 0, ROWS - 1);
      active.c = clamp(active.c + dc, 0, COLS - 1);
      editing = false; editSeed = null;
      render();
    }
    function startEdit(seed) { editing = true; editSeed = seed; render(); }
    function commit(val, dr, dc) {
      data[activeRef()] = val;
      editing = false; editSeed = null;
      move(dr, dc);
    }

    function onKey(e) {
      if (editing) return;
      const k = e.key;
      if (k === "ArrowUp") { e.preventDefault(); move(-1, 0); }
      else if (k === "ArrowDown") { e.preventDefault(); move(1, 0); }
      else if (k === "ArrowLeft") { e.preventDefault(); move(0, -1); }
      else if (k === "ArrowRight") { e.preventDefault(); move(0, 1); }
      else if (k === "Enter") { e.preventDefault(); move(e.shiftKey ? -1 : 1, 0); }
      else if (k === "Tab") { e.preventDefault(); move(0, e.shiftKey ? -1 : 1); }
      else if (k === "F2") { e.preventDefault(); startEdit(null); }
      else if (k === "Backspace" || k === "Delete") { e.preventDefault(); data[activeRef()] = ""; render(); }
      else if (!e.ctrlKey && !e.metaKey && !e.altKey && k.length === 1) { e.preventDefault(); startEdit(k); }
    }
    function onEditKey(e) {
      e.stopPropagation();
      const inp = e.target;
      if (e.key === "Enter") { e.preventDefault(); commit(inp.value, e.shiftKey ? -1 : 1, 0); }
      else if (e.key === "Tab") { e.preventDefault(); commit(inp.value, 0, e.shiftKey ? -1 : 1); }
      else if (e.key === "Escape") { e.preventDefault(); editing = false; editSeed = null; render(); }
    }

    /* ---- public API ---- */
    const api = {
      snapshot() {
        const out = [];
        Object.keys(data).forEach((ref) => {
          const t = (data[ref] || "").trim();
          if (t === "") return;
          let value = null;
          if (t[0] === "=") { try { value = cellVal(ref, new Set()); if (!isFinite(value)) value = null; } catch (e) { value = null; } }
          else { const n = Number(t.replace(/,/g, "")); value = isNaN(n) ? null : n; }
          out.push({ ref, raw: t, value, isFormula: t[0] === "=" });
        });
        return out;
      },
      reset() { for (const k in data) delete data[k]; active = { r: 0, c: 0 }; editing = false; editSeed = null; render(); },
      focus() { const s = host.querySelector(".sheet"); if (s) s.focus(); },
    };

    render();
    return api;
  };
})();
