---
"storybook-dark-mode2": minor
---

Add `defineDarkModeParam()` to define dark mode parameters for Storybook configuration.
Add `parameters.darkMode.disable` to disable dark mode functionality for a story.
Move `const chan = addons.getChannel()` to module scope. This may fix https://github.com/hipstersmoothie/storybook-dark-mode/issues/297