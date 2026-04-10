---
"@storybook-community/storybook-dark-mode": patch
---

Fixed the dark mode toolbar toggle importing manager utilities via an invalid `src/` path; it now resolves `getManagerTarget` using a package-relative import so bundlers consistently include the helper.
