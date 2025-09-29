---
"@storybook-community/storybook-dark-mode": patch
---

Restore `preset.cjs` and update `preset.js` to proper ESM.

The change in 6.0.1 somehow fix `TypeError: Cannot read properties of undefined (reading 'matchMedia')` but obviously invalid for CJS usage.
