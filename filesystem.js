/* ===========================================================================
   LedgerFS — save files into a user-granted folder via the File System Access
   API (Chromium only). The user picks a location once (defaults to Desktop);
   we create/reuse a "ledger" folder inside it and persist the handle in
   IndexedDB so it's remembered across sessions. Not supported in Safari/Firefox
   (the app falls back to a normal download there).
   =========================================================================== */
window.LedgerFS = (function () {
  "use strict";
  const supported = typeof window !== "undefined" && "showDirectoryPicker" in window;
  const DB = "ledger-fs", STORE = "handles", KEY = "ledgerDir";
  let ledgerDir = null;

  function openDB() {
    return new Promise((res, rej) => {
      const r = indexedDB.open(DB, 1);
      r.onupgradeneeded = () => r.result.createObjectStore(STORE);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  }
  async function idbGet(k) {
    const db = await openDB();
    return new Promise((res, rej) => {
      const t = db.transaction(STORE, "readonly").objectStore(STORE).get(k);
      t.onsuccess = () => res(t.result);
      t.onerror = () => rej(t.error);
    });
  }
  async function idbSet(k, v) {
    const db = await openDB();
    return new Promise((res, rej) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).put(v, k);
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error);
    });
  }

  async function ensurePermission(handle) {
    const opts = { mode: "readwrite" };
    if ((await handle.queryPermission(opts)) === "granted") return true;
    return (await handle.requestPermission(opts)) === "granted";
  }

  return {
    supported,

    async hasFolder() {
      if (!supported) return false;
      if (ledgerDir) return true;
      try {
        const h = await idbGet(KEY);
        if (h) { ledgerDir = h; return true; }
      } catch (e) {}
      return false;
    },

    // Prompt for a parent location and create/reuse a "ledger" folder inside it.
    async chooseFolder() {
      if (!supported) throw new Error("unsupported");
      const parent = await window.showDirectoryPicker({ mode: "readwrite", startIn: "desktop" });
      const ledger = await parent.getDirectoryHandle("ledger", { create: true });
      ledgerDir = ledger;
      try { await idbSet(KEY, ledger); } catch (e) {}
      return true;
    },

    // Write a blob to ledger/<course>/<module>/<fileName>. Returns the path.
    async writeDocx(courseName, moduleFolder, fileName, blob) {
      if (!supported) throw new Error("unsupported");
      if (!ledgerDir && !(await this.hasFolder())) throw new Error("no-folder");
      if (!(await ensurePermission(ledgerDir))) throw new Error("denied");
      const courseDir = await ledgerDir.getDirectoryHandle(courseName, { create: true });
      const modDir = await courseDir.getDirectoryHandle(moduleFolder, { create: true });
      const fh = await modDir.getFileHandle(fileName, { create: true });
      const w = await fh.createWritable();
      await w.write(blob);
      await w.close();
      return `ledger/${courseName}/${moduleFolder}/${fileName}`;
    },
  };
})();
