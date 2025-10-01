---
"@storybook-community/storybook-dark-mode": patch
---

Replace `import.meta.resolve` with `require.resolve` for manager entries again.

Tested in some repos that `require.resolve` works while `import.meta.resolve` doesn't.
