---
"@storybook-community/storybook-dark-mode": major
---

Move `DarkModeDocsContainer` to `@storybook-community/storybook-dark-mode/docs`.

This fixes the main export requiring `@storybook/addon-docs` which you may not need.

BREAKING CHANGE: Move `DarkModeDocsContainer` from the main export to `/docs` sub-path.
