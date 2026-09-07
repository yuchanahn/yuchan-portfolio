import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";

const source = fs.readFileSync(new URL("../public/visitor-tracking.js", import.meta.url), "utf8");

function run(href, visibilityState = "visible", fail = false) {
  const calls = [];
  const listeners = {};
  const document = { visibilityState, addEventListener: (name, fn) => { listeners[name] = fn; } };
  vm.runInNewContext(source, {
    window: { location: new URL(href) }, document, URL, URLSearchParams,
    fetch: (...args) => { calls.push(args); return fail ? Promise.reject(new Error("offline")) : Promise.resolve({ ok: true }); },
  });
  return { calls, document, listeners };
}

test("records selected view once and excludes unrelated URL data", () => {
  const { calls, listeners } = run("https://yuchanahn.github.io/yuchan-portfolio/?project=p2p&tags=cpp,network&token=private#section");
  listeners.visibilitychange();
  assert.equal(calls.length, 1);
  assert.equal(calls[0][0], "https://portfolio-visitor-worker.ultrauc123.workers.dev/visit");
  assert.equal(JSON.parse(calls[0][1].body).path, "/yuchan-portfolio/?tags=cpp%2Cnetwork&project=p2p");
  assert.equal(calls[0][1].credentials, "omit");
});

test("does not collect local previews or unseen background tabs", () => {
  assert.equal(run("http://localhost:3000/").calls.length, 0);
  const { calls, document, listeners } = run("https://yuchanahn.github.io/yuchan-portfolio/", "hidden");
  assert.equal(calls.length, 0);
  document.visibilityState = "visible";
  listeners.visibilitychange();
  assert.equal(calls.length, 1);
});

test("network failure is swallowed without duplicate retry", async () => {
  const { calls, listeners } = run("https://yuchanahn.github.io/yuchan-portfolio/", "visible", true);
  await new Promise(resolve => setImmediate(resolve));
  listeners.visibilitychange();
  assert.equal(calls.length, 1);
});
