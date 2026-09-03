---
'@storybook-community/storybook-dark-mode': patch
---

Declare `engines.node: ">=20.19.0"` on the published package.

This records a floor the package already had in practice rather than
introducing a new one: the addon peer-depends on Storybook 10, whose own
minimum Node version is 20.19, and it is published ESM-only with no CJS
output. Installing on an older Node was never supported; now the manifest
says so.

No change to the emitted code, the exports map, or the public API.
