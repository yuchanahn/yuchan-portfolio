import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../public/visitor-feed.js", import.meta.url), "utf8");
class Element {
  children = []; textContent = ""; listeners = {};
  append(...children) { this.children.push(...children); }
  replaceChildren(...children) { this.children = children; }
  addEventListener(name, callback) { this.listeners[name] = callback; }
}
const tick = () => new Promise(resolve => setImmediate(resolve));

test("feed renders text safely, refreshes read-only, and keeps old data on failure", async () => {
  const list = new Element(), status = new Element(), button = new Element();
  const calls = [], events = {};
  let fail = false, interval;
  const document = {
    visibilityState: "visible",
    getElementById: id => ({ "visitor-feed-list": list, "visitor-feed-status": status, "refresh-visitors": button })[id],
    createElement: () => new Element(), createDocumentFragment: () => new Element(),
    addEventListener: (name, fn) => { events[name] = fn; },
  };
  vm.runInNewContext(source, {
    document, window: { location: { origin: "https://yuchanahn.github.io" }, PORTFOLIO_DATA: { projects: { p2p: { name: "P2P Netcode" } } } },
    URL, Intl, Date, AbortController, setTimeout, clearTimeout,
    setInterval: fn => { interval = fn; },
    fetch: async (url, options) => {
      calls.push({ url, options });
      if (fail) throw new Error("offline");
      return { ok: true, json: async () => ({ visitors: [{ name: "<script>bad</script>", path: "/?project=p2p", visitCount: 3, visitedAt: "2026-09-08T01:00:00Z" }] }) };
    },
  });
  await tick();
  const row = list.children[0].children[0];
  assert.equal(row.children[0].children[0].textContent, "<script>bad</script>");
  assert.match(row.children[0].children[1].textContent, /P2P Netcode/);
  assert.ok(calls.every(call => call.url.endsWith("/visitors") && !call.options.method));
  document.visibilityState = "hidden";
  interval();
  assert.equal(calls.length, 1);
  document.visibilityState = "visible";
  fail = true;
  await button.listeners.click();
  assert.match(status.textContent, /이전 기록/);
  assert.equal(list.children[0].children[0], row);
  assert.equal(button.disabled, false);
});
