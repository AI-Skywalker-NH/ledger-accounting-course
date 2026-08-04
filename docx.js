/* ===========================================================================
   Docx — a tiny, zero-dependency .docx (OOXML) writer.
   Builds a valid Word document by hand-rolling the minimal package parts and
   a store-mode (uncompressed) ZIP with CRC-32. No libraries, no server.
   window.Docx.build({title, subtitle, sections}) -> Blob
     sections: [{ heading: string, paragraphs: string[] }]
   =========================================================================== */
(function () {
  "use strict";
  const root = typeof window !== "undefined" ? window : globalThis;

  /* ---- CRC-32 ---- */
  const CRC = (function () {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  })();
  function crc32(bytes) {
    let c = 0xffffffff;
    for (let i = 0; i < bytes.length; i++) c = CRC[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  }

  const u16 = (n) => [n & 0xff, (n >>> 8) & 0xff];
  const u32 = (n) => { n >>>= 0; return [n & 0xff, (n >>> 8) & 0xff, (n >>> 16) & 0xff, (n >>> 24) & 0xff]; };

  /* ---- store-mode ZIP ---- */
  function zip(files) {
    const enc = new TextEncoder();
    const chunks = [];
    const central = [];
    let offset = 0;
    const dosTime = 0, dosDate = 0x21; // 1980-01-01, fixed for determinism
    for (const f of files) {
      const name = enc.encode(f.name);
      const data = f.data;
      const crc = crc32(data);
      const local = [].concat(
        u32(0x04034b50), u16(20), u16(0), u16(0), u16(dosTime), u16(dosDate),
        u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0)
      );
      const lh = new Uint8Array(local);
      chunks.push(lh, name, data);
      const cd = [].concat(
        u32(0x02014b50), u16(20), u16(20), u16(0), u16(0), u16(dosTime), u16(dosDate),
        u32(crc), u32(data.length), u32(data.length), u16(name.length),
        u16(0), u16(0), u16(0), u16(0), u32(0), u32(offset)
      );
      central.push({ header: new Uint8Array(cd), name });
      offset += lh.length + name.length + data.length;
    }
    const cdStart = offset;
    let cdSize = 0;
    for (const c of central) { chunks.push(c.header, c.name); cdSize += c.header.length + c.name.length; }
    chunks.push(new Uint8Array([].concat(
      u32(0x06054b50), u16(0), u16(0), u16(central.length), u16(central.length), u32(cdSize), u32(cdStart), u16(0)
    )));
    let total = 0;
    for (const c of chunks) total += c.length;
    const out = new Uint8Array(total);
    let p = 0;
    for (const c of chunks) { out.set(c, p); p += c.length; }
    return out;
  }

  /* ---- OOXML ---- */
  // Strip XML-illegal control chars (keep tab/newline/cr), then escape entities.
  const CTRL = new RegExp("[\\u0000-\\u0008\\u000B\\u000C\\u000E-\\u001F]", "g");
  const esc = (s) => String(s == null ? "" : s)
    .replace(CTRL, "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  function para(text, o) {
    o = o || {};
    const rpr =
      (o.bold ? "<w:b/>" : "") +
      (o.italic ? "<w:i/>" : "") +
      (o.color ? `<w:color w:val="${o.color}"/>` : "") +
      (o.size ? `<w:sz w:val="${o.size}"/><w:szCs w:val="${o.size}"/>` : "");
    const ppr = o.spaceBefore ? `<w:pPr><w:spacing w:before="${o.spaceBefore}" w:after="60"/></w:pPr>` : "";
    return `<w:p>${ppr}<w:r>${rpr ? `<w:rPr>${rpr}</w:rPr>` : ""}<w:t xml:space="preserve">${esc(text)}</w:t></w:r></w:p>`;
  }

  function documentXml(doc) {
    let body = "";
    if (doc.title) body += para(doc.title, { bold: true, size: 40 });
    if (doc.subtitle) body += para(doc.subtitle, { italic: true, size: 24, color: "666666" });
    (doc.sections || []).forEach((sec) => {
      if (sec.heading) body += para(sec.heading, { bold: true, size: 28, spaceBefore: 300 });
      (sec.paragraphs || []).forEach((p) => { body += para(p, { size: 22 }); });
    });
    if (!doc.sections || !doc.sections.length) body += para("(No notes yet.)", { italic: true, size: 22, color: "888888" });
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body}<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/></w:sectPr></w:body></w:document>`;
  }

  const CONTENT_TYPES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`;
  const RELS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`;

  function buildBytes(doc) {
    const enc = new TextEncoder();
    return zip([
      { name: "[Content_Types].xml", data: enc.encode(CONTENT_TYPES) },
      { name: "_rels/.rels", data: enc.encode(RELS) },
      { name: "word/document.xml", data: enc.encode(documentXml(doc)) },
    ]);
  }

  root.Docx = {
    buildBytes,
    build(doc) {
      return new Blob([buildBytes(doc)], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
    },
  };
})();
