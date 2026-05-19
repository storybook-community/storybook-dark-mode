---
"@storybook-community/storybook-dark-mode": patch
---

Fix brand image not switching between light and dark themes (issue #66)

`mergeThemeWithBrandConfig` now gives store theme properties priority over config theme properties, so per-mode `brandImage` and `brandTitle` set on the dark/light theme are preserved instead of being overwritten by the global config theme.
