/* eslint-disable @typescript-eslint/no-require-imports -- This CommonJS harness loads the transpiled component inside a mocked Node VM. */
// Exercise the real submit handler without sending newsletter subscriptions.
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

const source = fs.readFileSync(
  "app/[lang]/components/WaitlistForm.tsx",
  "utf8",
);
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
}).outputText;
const dict = {
  placeholder: "Email",
  button: "Join",
  privacy: "Private",
  invalid: "Invalid email",
  success: "Subscribed",
  error: "Try again",
};

function setup(fetch, lang = "fr") {
  const state = [];
  let cursor = 0;
  let scheduled;
  let cleared = false;
  let resets = 0;
  const exports = {};
  const context = {
    exports,
    require(name) {
      if (name === "react")
        return {
          useState(initial) {
            const index = cursor++;
            state[index] = initial;
            return [
              initial,
              (value) => {
                state[index] = value;
              },
            ];
          },
        };
      return require(name);
    },
    process: { env: { NEXT_PUBLIC_API_URL: "https://example.test/api/" } },
    fetch,
    AbortController,
    FormData: class {
      constructor(form) {
        this.form = form;
      }
      get() {
        return this.form.email;
      }
    },
    setTimeout(callback, duration) {
      assert.equal(duration, 15000);
      scheduled = callback;
      return 1;
    },
    clearTimeout() {
      cleared = true;
    },
  };
  vm.runInNewContext(compiled, context);
  const form = exports.default({ dict, lang, compact: true });
  return {
    state,
    submit(email) {
      return form.props.onSubmit({
        preventDefault() {},
        currentTarget: {
          email,
          reset() {
            resets++;
          },
        },
      });
    },
    timeout() {
      scheduled();
    },
    get cleared() {
      return cleared;
    },
    get resets() {
      return resets;
    },
  };
}

test("invalid email never sends a request", async () => {
  const form = setup(() => {
    throw Error("Unexpected network call");
  });
  await form.submit("not-an-email");
  assert.equal(form.state[1], dict.invalid);
  assert.equal(form.state[2], true);
  assert.equal(form.resets, 0);
});

test("successful signup trims email and sends the selected locale", async () => {
  let request;
  const form = setup(async (url, options) => {
    request = { url, options };
    return { ok: true };
  }, "en");
  await form.submit("  parent@example.test  ");
  assert.equal(request.url, "/api/newsletter");
  assert.equal(request.options.method, "POST");
  assert.deepEqual(JSON.parse(request.options.body), {
    email: "parent@example.test",
    locale: "en",
  });
  assert.equal(form.state[0], "success");
  assert.equal(form.state[1], dict.success);
  assert.equal(form.resets, 1);
  assert.equal(form.cleared, true);
});

test("server errors preserve the email and allow a retry", async () => {
  const form = setup(async () => ({ ok: false }));
  await form.submit("parent@example.test");
  assert.equal(form.state[0], "error");
  assert.equal(form.state[1], dict.error);
  assert.equal(form.state[2], false);
  assert.equal(form.resets, 0);
  assert.equal(form.cleared, true);
});

test("a stalled request times out and leaves loading state", async () => {
  const form = setup(
    (_url, { signal }) =>
      new Promise((_resolve, reject) =>
        signal.addEventListener("abort", () => reject(Error("aborted"))),
      ),
  );
  const pending = form.submit("parent@example.test");
  assert.equal(form.state[0], "loading");
  form.timeout();
  await pending;
  assert.equal(form.state[0], "error");
  assert.equal(form.resets, 0);
  assert.equal(form.cleared, true);
});
