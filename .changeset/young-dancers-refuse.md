---
"storybook-dark-mode2": patch
---

Remove `type: module` from `package.json`

Node 22.12.0 turns on ESM mode by default.
However, the `preset.js` needs to be a CommonJS module in order to work with older versions of Node.
