---
"@storybook-community/storybook-dark-mode": major
---

Move `DarkModeDocsContainer` to `@storybook-community/storybook-dark-mode/preview`.

This fixes the main export requiring `@storybook/addon-docs` which you may not need.

BREAKING CHANGE: remove `DarkModeDocsContainer` from the main export.
