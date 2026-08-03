/* ===========================================================================
   Narrator — text-to-speech narration via the Web Speech API.
   Zero dependencies, no audio files: uses the browser/OS voices client-side.
   Long text is chunked by sentence to avoid the long-utterance cutoff bug,
   and preferences (rate, voice) persist in localStorage.
   window.Narrator.{supported, toggle, speak, pause, resume, stop, state, ...}
   =========================================================================== */
window.Narrator = (function () {
  "use strict";
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  const synth = supported ? window.speechSynthesis : null;
  const KEY = "ledger.narration";

  let prefs = (function () { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } })();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(prefs)); } catch (e) {} };

  let queue = [];
  let idx = 0;
  let state = "idle";        // idle | speaking | paused
  let stateCb = null;

  function setState(s) { state = s; if (stateCb) stateCb(s); }

  function chunk(text) {
    return (text || "").replace(/\s+/g, " ").trim().match(/[^.!?]+[.!?]*(\s|$)/g) || (text ? [text] : []);
  }

  function pickVoice() {
    if (!supported) return null;
    const vs = synth.getVoices();
    if (prefs.voiceURI) { const v = vs.find((x) => x.voiceURI === prefs.voiceURI); if (v) return v; }
    return (
      vs.find((v) => /^en(-US)?/i.test(v.lang) && v.localService) ||
      vs.find((v) => /^en/i.test(v.lang)) ||
      vs[0] || null
    );
  }

  function speakNext() {
    if (idx >= queue.length) { setState("idle"); return; }
    const u = new SpeechSynthesisUtterance(queue[idx]);
    const v = pickVoice();
    if (v) u.voice = v;
    u.lang = (v && v.lang) || "en-US";
    u.rate = prefs.rate || 1;
    u.onend = () => { idx++; if (state === "speaking") speakNext(); };
    u.onerror = () => { idx++; if (state === "speaking") speakNext(); };
    synth.speak(u);
  }

  const api = {
    supported,
    speak(text, cb) {
      if (!supported) return;
      synth.cancel();
      queue = chunk(text);
      idx = 0;
      if (cb) stateCb = cb;
      if (!queue.length) { setState("idle"); return; }
      setState("speaking");
      // small defer: cancel()+immediate speak() can drop the first utterance in Chrome
      setTimeout(speakNext, 60);
    },
    pause() { if (supported && state === "speaking") { synth.pause(); setState("paused"); } },
    resume() { if (supported && state === "paused") { synth.resume(); setState("speaking"); } },
    toggle(text, cb) {
      if (state === "speaking") this.pause();
      else if (state === "paused") this.resume();
      else this.speak(text, cb);
    },
    stop() { if (!supported) return; synth.cancel(); queue = []; idx = 0; setState("idle"); },
    state() { return state; },
    getRate() { return prefs.rate || 1; },
    setRate(r) { prefs.rate = Number(r) || 1; save(); },
    getVoiceURI() { return prefs.voiceURI || ""; },
    setVoiceURI(u) { prefs.voiceURI = u || ""; save(); },
    englishVoices() { return supported ? synth.getVoices().filter((v) => /^en/i.test(v.lang)) : []; },
    onVoicesChanged(cb) { if (supported) synth.addEventListener("voiceschanged", cb); },
  };
  return api;
})();
