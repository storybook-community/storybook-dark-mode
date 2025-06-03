---
"storybook-dark-mode2": patch
---

Add `preset` export field to `package.json`.

In certain Node.js versions, the root `./preset.js` file is not read by Storybook.
Instead, the `./index.js` is read instead,
causing the `Tool.js` to be loaded in Node environment and throw an `Unable to access property of undefined` error.