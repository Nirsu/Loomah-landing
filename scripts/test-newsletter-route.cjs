/* eslint-disable @typescript-eslint/no-require-imports -- Run the real route in an isolated VM. */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const compiled = ts.transpileModule(fs.readFileSync("app/api/newsletter/route.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;

function handler(fetch, env = { API_URL: "http://backend.test/api/" }) {
  const context = { exports: {}, fetch, process: { env }, Response, AbortSignal };
  vm.runInNewContext(compiled, context);
  return (body) => context.exports.POST(new Request("http://landing.test/api/newsletter", {
    method: "POST", body: JSON.stringify(body),
  }));
}

test("forwards a valid signup and only accepts backend confirmation", async () => {
  const post = handler(async (url, options) => {
    assert.equal(url, "http://backend.test/api/newsletter");
    assert.deepEqual(JSON.parse(options.body), { email: "parent@example.test", locale: "fr" });
    return Response.json({ message: "Subscribed" }, { status: 201 });
  });
  assert.equal((await post({ email: " parent@example.test ", locale: "fr" })).status, 201);
});

test("duplicate signup remains successful", async () => {
  const post = handler(async () => Response.json({ message: "Already subscribed" }));
  assert.equal((await post({ email: "parent@example.test" })).status, 200);
});

test("invalid addresses never reach backend", async () => {
  const post = handler(() => assert.fail("Unexpected request"));
  assert.equal((await post({ email: "invalid" })).status, 400);
});

test("missing backend configuration reports unavailable", async () => {
  const post = handler(() => assert.fail("Unexpected request"), {});
  assert.equal((await post({ email: "parent@example.test" })).status, 503);
});

test("network failure reports unavailable", async () => {
  const post = handler(async () => { throw Error("Connection refused"); });
  assert.equal((await post({ email: "parent@example.test" })).status, 503);
});

test("an unrelated 200 response cannot become a false signup success", async () => {
  const post = handler(async () => Response.json({ ok: true }));
  assert.equal((await post({ email: "parent@example.test" })).status, 502);
});

test("backend storage failure is reported as failure", async () => {
  const post = handler(async () => Response.json({ error: "Database unavailable" }, { status: 500 }));
  assert.equal((await post({ email: "parent@example.test" })).status, 502);
});
