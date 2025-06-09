# v4.0.4 (Sat May 31 2025)

## 5.2.1

### Patch Changes

- [`2a32a6e`](https://github.com/repobuddy/storybook-dark-mode2/commit/2a32a6ef3273d1848cd479f7539d6ffcf54442ef) Thanks [@unional](https://github.com/unional)! - Revert to use React hooks instead of storybook hooks.
  Storybook preview hooks can only be called inside decorators and story functions.

## 5.2.0

### Minor Changes

- [`010fc08`](https://github.com/repobuddy/storybook-dark-mode2/commit/010fc08a87469c7672d99a951b6263070d0f412a) Thanks [@unional](https://github.com/unional)! - Add `/manager` export field.
  This allows preset addons to load this addon.

- [`7de145d`](https://github.com/repobuddy/storybook-dark-mode2/commit/7de145d976f128efb2c9623519657ab3fd2da196) Thanks [@unional](https://github.com/unional)! - Use hooks provided by storybook.
  This make sure the addon is using the same React version as storybook.

## 5.1.0

### Minor Changes

- [`9575acf`](https://github.com/repobuddy/storybook-dark-mode2/commit/9575acf0bda50326d3aa81856eff0ad52198c60e) Thanks [@unional](https://github.com/unional)! - Allow `docs.theme` override

- [`4a5e096`](https://github.com/repobuddy/storybook-dark-mode2/commit/4a5e096bc7d7f98f7ea1b26fb41b8f99615ac813) Thanks [@unional](https://github.com/unional)! - Disable toolbar icon button when user specify `docs.theme`

## 5.0.3

### Patch Changes

- [`60dcff7`](https://github.com/repobuddy/storybook-dark-mode2/commit/60dcff7707bf241e5fa6d62c9805fe2e3c7bb95a) Thanks [@unional](https://github.com/unional)! - Add `preset` export field to `package.json`.

  In certain Node.js versions, the root `./preset.js` file is not read by Storybook.
  Instead, the `./index.js` is read instead,
  causing the `Tool.js` to be loaded in Node environment and throw an `Unable to access property of undefined` error.

## 5.0.2

### Patch Changes

- [`b412546`](https://github.com/repobuddy/storybook-dark-mode2/commit/b412546cc4fd2a0654cbbe2db5c6d318a49de14e) Thanks [@unional](https://github.com/unional)! - Remove `type: module` from `package.json`

  Node 22.12.0 turns on ESM mode by default.
  However, the `preset.js` needs to be a CommonJS module in order to work with older versions of Node.

## 5.0.1

### Patch Changes

- [`89a1777`](https://github.com/repobuddy/storybook-dark-mode2/commit/89a1777a298238ff933af39115576e7b436ca8d8) Thanks [@unional](https://github.com/unional)! - Remove reliance on `@storybook/global`

- [`f750005`](https://github.com/repobuddy/storybook-dark-mode2/commit/f750005801ec0b1fd1eb0e4b43eb594c81615025) Thanks [@unional](https://github.com/unional)! - Downgrade to Storybook 9.0.2 for general consumption.

## 5.0.0

### Major Changes

- [`e6aebdf`](https://github.com/repobuddy/storybook-dark-mode2/commit/e6aebdf6502c4555a997013c1e8115b4ac5189c3) Thanks [@unional](https://github.com/unional)! - Initial release of `storybook-dark-mode2` with support for Storybook 9.

  Note: The previous published version was not versioned correctly with `auto`.

### Patch Changes

- [`984964f`](https://github.com/repobuddy/storybook-dark-mode2/commit/984964fc00254f9725c7f3ee2e00ff74d3cd75a6) Thanks [@unional](https://github.com/unional)! - Add `package.json` exports

#### ⚠️ Pushed to `master`

- chore: update project name to storybook-dark-mode2 in .all-contributorsrc ([@unional](https://github.com/unional))
- chore: add cSpell ignore path for .all-contributorsrc ([@unional](https://github.com/unional))

#### Authors: 1

- Homa Wong ([@unional](https://github.com/unional))

---

# v4.0.3 (Sat May 31 2025)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Homa Wong ([@unional](https://github.com/unional))

:heart: Adam Gołąb ([@adam-golab](https://github.com/adam-golab))

:heart: Sergey Kozlov ([@dartess](https://github.com/dartess))

:heart: Lauri Luotola ([@leiit](https://github.com/leiit))

:heart: Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

:heart: Steven Sacks ([@stevensacks](https://github.com/stevensacks))

:heart: Rohan Poojary ([@RohanPoojary1107](https://github.com/RohanPoojary1107))

:heart: Alex Yang ([@himself65](https://github.com/himself65))

:heart: Zeno Jiricek ([@airtonix](https://github.com/airtonix))

:heart: An Dang ([@zyzo](https://github.com/zyzo))

:heart: Christopher Dura ([@chris-dura](https://github.com/chris-dura))

:heart: Slava Kostenko ([@Namielusi](https://github.com/Namielusi))

:heart: null[@erik-d](https://github.com/erik-d)

:heart: Beltrán Rengifo ([@beltranrengifo](https://github.com/beltranrengifo))

:heart: Jack Westbrook ([@jackw](https://github.com/jackw))

:heart: nilscox ([@nilscox](https://github.com/nilscox))

:heart: Ryan McHenry ([@Develonaut](https://github.com/Develonaut))

:heart: Clay Risser ([@clayrisser](https://github.com/clayrisser))

:heart: Nikki Pantony ([@h0t-p1xels](https://github.com/h0t-p1xels))

:heart: Ian VanSchooten ([@IanVS](https://github.com/IanVS))

:heart: Klaus Nygård ([@nygardk](https://github.com/nygardk))

:heart: David Richolm ([@dricholm](https://github.com/dricholm))

:heart: Paul Fasola ([@PaulFasola](https://github.com/PaulFasola))

:heart: Pavel Keyzik ([@pavelkeyzik](https://github.com/pavelkeyzik))

:heart: Adam Dierkens ([@adierkens](https://github.com/adierkens))

:heart: Alex Khomenko ([@Clarity-89](https://github.com/Clarity-89))

:heart: Jeroen Zwartepoorte ([@jpzwarte](https://github.com/jpzwarte))

:heart: Tobias Skarhed ([@tskarhed](https://github.com/tskarhed))

:heart: Jacob Coughenour ([@jacobcoughenour](https://github.com/jacobcoughenour))

:heart: Erik Hughes ([@Swiftwork](https://github.com/Swiftwork))

:heart: Adam Jahnke ([@adamyonk](https://github.com/adamyonk))

:heart: Fatih Kalifa ([@pveyes](https://github.com/pveyes))

#### 🐛 Bug Fix

- feat: New release [#1](https://github.com/repobuddy/storybook-dark-mode/pull/1) ([@unional](https://github.com/unional))

#### ⚠️ Pushed to `master`

- feat: upgrade to sb 9 ([@unional](https://github.com/unional))
- chore: move example into main ([@unional](https://github.com/unional))
- chore: separate tsconfig ([@unional](https://github.com/unional))
- chore: add packageManager field ([@unional](https://github.com/unional))
- fix: use the useEffect from storybook preview api ([@adam-golab](https://github.com/adam-golab))
- fix: use useState hook from storybook preview api ([@adam-golab](https://github.com/adam-golab))
- update actions ([@dartess](https://github.com/dartess))
- Fix `useDarkMode` to use correct addons channel ([@leiit](https://github.com/leiit))
- Add test story for `useDarkMode` ([@leiit](https://github.com/leiit))
- Add typings & `StoryObj` format for Button story ([@leiit](https://github.com/leiit))
- update auto ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Update dependency @storybook/icons to v1.2.9 ([@renovate[bot]](https://github.com/renovate[bot]))
- up node version in github workflows ([@dartess](https://github.com/dartess))
- update storybook to v8 stable ([@dartess](https://github.com/dartess))
- update storybook to rc.0 ([@dartess](https://github.com/dartess))
- use standard @storybook/icons instead of custom ucons ([@dartess](https://github.com/dartess))
- remove useless types ([@dartess](https://github.com/dartess))
- remove useless peer deps https://storybook.js.org/docs/8.0/addons/addon-migration-guide\#react-peer-dependency-is-no-longer-required ([@dartess](https://github.com/dartess))
- update storybook and vite deps ([@dartess](https://github.com/dartess))
- fix icon height ([@dartess](https://github.com/dartess))
- remove deprecated @storybook/addons ([@dartess](https://github.com/dartess))
- fix build ([@hipstersmoothie](https://github.com/hipstersmoothie))
- split release step out ([@hipstersmoothie](https://github.com/hipstersmoothie))
- fix: switch to @storybook/manager-api ([@stevensacks](https://github.com/stevensacks))
- Update addons import in readme code examples ([@RohanPoojary1107](https://github.com/RohanPoojary1107))
- bump node ([@hipstersmoothie](https://github.com/hipstersmoothie))
- move to actions ([@hipstersmoothie](https://github.com/hipstersmoothie))
- fix: type ([@himself65](https://github.com/himself65))
- chore: bump version ([@himself65](https://github.com/himself65))
- fix: package.json ([@himself65](https://github.com/himself65))
- chore: bump to storybook v7 ([@himself65](https://github.com/himself65))
- fix: use classTarget when updating manager too ([@airtonix](https://github.com/airtonix))
- Null check window.matchMedia ([@zyzo](https://github.com/zyzo))
- docs: Add doc example for multiple classes ([@chris-dura](https://github.com/chris-dura))
- chore: TS typo part deux ([@chris-dura](https://github.com/chris-dura))
- chore: Typescript typo ([@chris-dura](https://github.com/chris-dura))
- chore: Arrayify the dark and light classes ([@chris-dura](https://github.com/chris-dura))
- feat!: Toggle multiple light/dark classes ([@chris-dura](https://github.com/chris-dura))
- Fix importing global variables ([@Namielusi](https://github.com/Namielusi))
- Document what is needed when upgrading from 1.x ([@erik-d](https://github.com/erik-d))
- fix: respect current param by using a new property in the store ([@beltranrengifo](https://github.com/beltranrengifo))
- Bump minimatch from 3.0.4 to 3.1.2 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump ajv from 6.10.0 to 6.12.6 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump lodash from 4.17.11 to 4.17.21 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- fix tsc ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add basic example ([@hipstersmoothie](https://github.com/hipstersmoothie))
- fix warnings ([@hipstersmoothie](https://github.com/hipstersmoothie))
- remove husky ([@hipstersmoothie](https://github.com/hipstersmoothie))
- update husky ([@hipstersmoothie](https://github.com/hipstersmoothie))
- update fast-deep-equal ([@hipstersmoothie](https://github.com/hipstersmoothie))
- update react types ([@hipstersmoothie](https://github.com/hipstersmoothie))
- update storybook ([@hipstersmoothie](https://github.com/hipstersmoothie))
- update react ([@hipstersmoothie](https://github.com/hipstersmoothie))
- upgrade more deps ([@hipstersmoothie](https://github.com/hipstersmoothie))
- remove unused deps ([@hipstersmoothie](https://github.com/hipstersmoothie))
- upgrade eslint and typescript ([@hipstersmoothie](https://github.com/hipstersmoothie))
- upgrade babel ([@hipstersmoothie](https://github.com/hipstersmoothie))
- don't show light/dark as a toggle since that doesn't really make and sense ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @clayrisser as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- fix flash of unthemed storybook when using CSS overrides ([@hipstersmoothie](https://github.com/hipstersmoothie))
- feat(addon): update to match latest addon-kit, build with babel, esm and cjs builds ([@jackw](https://github.com/jackw))
- refactor(addon): rename register -> manager, update preset to use dist manager ([@jackw](https://github.com/jackw))
- Add @Develonaut as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @jackw as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @nilscox as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump y18n from 4.0.0 to 4.0.3 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump ini from 1.3.5 to 1.3.8 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump async from 3.2.0 to 3.2.4 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- fix(tool): use global window to prevent storybook preset loading error ([@jackw](https://github.com/jackw))
- deps: add react and react-dom as optional peer dependencies ([@nilscox](https://github.com/nilscox))
- deps: remove storybook related dependencies from peerDependencies ([@nilscox](https://github.com/nilscox))
- Persist current store value ([@Develonaut](https://github.com/Develonaut))
- Add @frassinier as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- feat: add update_dark_mode event (frassinier@talend.com)
- Add @IanVS as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @nikkipantony as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @artmsilva as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- fix: fix alignment issue with moon icon in storybook 6.4.9 (arturo.silva@washpost.com)
- fix: alignment issue with icons in toolbar with storybook 6.4.9 (arturo.silva@washpost.com)
- Update README.md ([@clayrisser](https://github.com/clayrisser))
- Change `export parameters` to `export const parameters` in README ([@h0t-p1xels](https://github.com/h0t-p1xels))
- Import addon as named ([@IanVS](https://github.com/IanVS))
- Add @nygardk as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- fix storybook peerDependencies semver range ([@nygardk](https://github.com/nygardk))
- Add @dricholm as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Update README with classTarget info ([@dricholm](https://github.com/dricholm))
- Add parameter for class target in iframe ([@dricholm](https://github.com/dricholm))
- only get initial mode once ([@hipstersmoothie](https://github.com/hipstersmoothie))
- don't set default params to avoid base theme flash ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @pavelkeyzik as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @PaulFasola as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- when setting initial theme extends from default storybook themes to account for new variables that aren't yet stored it localStorage ([@hipstersmoothie](https://github.com/hipstersmoothie))
- README: added "themes" import origin ([@PaulFasola](https://github.com/PaulFasola))
- Change presets field to addons in configuration ([@pavelkeyzik](https://github.com/pavelkeyzik))
- add preset.js ([@hipstersmoothie](https://github.com/hipstersmoothie))
- update readme config for storybook 6.0 ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Ship source files for sourcemaps ([@adierkens](https://github.com/adierkens))
- Revert "update deprecated function" ([@hipstersmoothie](https://github.com/hipstersmoothie))
- When storybook params change update the stored themes ([@hipstersmoothie](https://github.com/hipstersmoothie))
- default to light theme ([@hipstersmoothie](https://github.com/hipstersmoothie))
- update deprecated function ([@hipstersmoothie](https://github.com/hipstersmoothie))
- upgrade to storybook 6.0 ([@hipstersmoothie](https://github.com/hipstersmoothie))
- fix rendering theme on load ([@hipstersmoothie](https://github.com/hipstersmoothie))
- upgrade storybook rc ([@hipstersmoothie](https://github.com/hipstersmoothie))
- upgrade beta version ([@hipstersmoothie](https://github.com/hipstersmoothie))
- working ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @Clarity-89 as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Read default isDark value from local storage ([@Clarity-89](https://github.com/Clarity-89))
- Ignore IDE files ([@Clarity-89](https://github.com/Clarity-89))
- handle lightClass and darkClass not being in the store ([@hipstersmoothie](https://github.com/hipstersmoothie))
- target body element ([@hipstersmoothie](https://github.com/hipstersmoothie))
- add dark/light class to manager + add option to optionally set classes on the preview ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @jpzwarte as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- update shared auto config ([@hipstersmoothie](https://github.com/hipstersmoothie))
- turn on canary builds ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @jacobcoughenour as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @pveyes as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @tskarhed as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @adierkens as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @carlesnunez as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @adamyonk as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @Swiftwork as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Add @hipstersmoothie as a contributor ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Update src/Tool.tsx ([@jpzwarte](https://github.com/jpzwarte))
- First attempt. ([@jpzwarte](https://github.com/jpzwarte))
- Update README.md ([@hipstersmoothie](https://github.com/hipstersmoothie))
- respect current param if it's set ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Enable toggling theme on docs and fix issue with theme not loading on init docs page ([@tskarhed](https://github.com/tskarhed))
- fix undefined story data ([@jacobcoughenour](https://github.com/jacobcoughenour))
- Merge branch 'master' into renovate/auto-config-hipstersmoothie-3.x ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Fix main ([@adierkens](https://github.com/adierkens))
- create hook for useDarkMode() ([@adierkens](https://github.com/adierkens))
- Update dependency auto to v9.9.0 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency auto-config-hipstersmoothie to v3 ([@renovate-bot](https://github.com/renovate-bot))
- Update typescript-eslint monorepo to v2.17.0 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency auto to v9 ([@renovate-bot](https://github.com/renovate-bot))
- Update storybook monorepo to v5.3.8 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency typescript to v3.7.5 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency eslint-config-prettier to v6.9.0 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency fast-deep-equal to v3 ([@renovate-bot](https://github.com/renovate-bot))
- style: update function declaration order ([@Swiftwork](https://github.com/Swiftwork))
- chore: remove package-lock.json, project uses yarn ([@Swiftwork](https://github.com/Swiftwork))
- feat: add media query matcher, OS theme control ([@Swiftwork](https://github.com/Swiftwork))
- style: clean up store function's readability ([@Swiftwork](https://github.com/Swiftwork))
- chore: add package-lock.json per npm's recommendation ([@Swiftwork](https://github.com/Swiftwork))
- Update dependency lint-staged to v9.5.0 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency husky to v3.1.0 ([@renovate-bot](https://github.com/renovate-bot))
- Merge branch 'master' into patch-2 ([@hipstersmoothie](https://github.com/hipstersmoothie))
- add API peer ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Fix up some types ([@adamyonk](https://github.com/adamyonk))
- Update react monorepo ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency auto to v7.12.4 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency @types/react to v16.9.11 ([@renovate-bot](https://github.com/renovate-bot))
- Fix TS error ([@adamyonk](https://github.com/adamyonk))
- Update Tool.tsx ([@adamyonk](https://github.com/adamyonk))
- Update typescript-eslint monorepo to v2.6.0 ([@renovate-bot](https://github.com/renovate-bot))
- Pin dependency eslint-plugin-react-hooks to 2.1.1 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency auto to v7.12.3 ([@renovate-bot](https://github.com/renovate-bot))
- Update to eslint 6 ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Update typescript-eslint monorepo to v2.3.2 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency eslint-config-xo-react to v0.20.0 ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Update dependency eslint-config-xo to v0.27.1 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency eslint to v6 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency auto to v7.6.2 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency @types/react to v16.9.4 ([@renovate-bot](https://github.com/renovate-bot))
- Update react monorepo to v16.10.1 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency lint-staged to v9.4.0 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency auto to v7.6.0 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency husky to v3 ([@renovate-bot](https://github.com/renovate-bot))
- Update typescript-eslint monorepo to v2 ([@renovate-bot](https://github.com/renovate-bot))
- Update storybook monorepo to v5.2.1 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency typescript to v3.6.3 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency lint-staged to v9 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency auto to v7.4.5 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency eslint-config-prettier to v6.3.0 ([@renovate-bot](https://github.com/renovate-bot))
- Update typescript-eslint monorepo to v1.13.0 ([@renovate-bot](https://github.com/renovate-bot))
- Update react monorepo to v16.9.0 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency eslint-config-prettier to v6 ([@renovate-bot](https://github.com/renovate-bot))
- Update storybook monorepo to v5.1.11 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency typescript to v3.6.2 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency auto to v7.4.4 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency lint-staged to v8.2.1 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency prettier to v1.18.2 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency eslint-plugin-react to v7.14.3 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency jest to v24.9.0 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency eslint-config-prettier to v4.3.0 ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency eslint to v5.16.0 ([@renovate-bot](https://github.com/renovate-bot))
- Pin dependencies ([@renovate-bot](https://github.com/renovate-bot))
- update ([@hipstersmoothie](https://github.com/hipstersmoothie))
- add shared auto config ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Update renovate.json ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Update dependency @types/react to v16.9.2 ([@renovate-bot](https://github.com/renovate-bot))
- Add renovate.json ([@renovate-bot](https://github.com/renovate-bot))
- Fix version error (bkniffler@me.com)
- Fix dependency issues (bkniffler@me.com)
- PR - Changes, removed arrow function unneded (carles.nunez@letgo.com)
- Subscribed to another event in order to trigger theme change on story change (carles.nunez@letgo.com)
- update store if defaults change ([@hipstersmoothie](https://github.com/hipstersmoothie))
- allow user to change options ([@hipstersmoothie](https://github.com/hipstersmoothie))
- simplify ([@hipstersmoothie](https://github.com/hipstersmoothie))
- get rid of some anys ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Merge origin/master into config ([@hipstersmoothie](https://github.com/hipstersmoothie))
- use localstorage ([@hipstersmoothie](https://github.com/hipstersmoothie))
- switch to hooks ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Merge branch 'master' into emit-event ([@hipstersmoothie](https://github.com/hipstersmoothie))
- update example gif ([@hipstersmoothie](https://github.com/hipstersmoothie))
- configure dark/light mode themes ([@hipstersmoothie](https://github.com/hipstersmoothie))
- emit DARK_MODE event via addons channel ([@pveyes](https://github.com/pveyes))
- add example gif ([@hipstersmoothie](https://github.com/hipstersmoothie))
- add a simple readme ([@hipstersmoothie](https://github.com/hipstersmoothie))
- add github to known hosts ([@hipstersmoothie](https://github.com/hipstersmoothie))
- add circle ([@hipstersmoothie](https://github.com/hipstersmoothie))
- add license ([@hipstersmoothie](https://github.com/hipstersmoothie))
- add author ([@hipstersmoothie](https://github.com/hipstersmoothie))
- init ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 39

- [@dependabot[bot]](https://github.com/dependabot[bot])
- [@erik-d](https://github.com/erik-d)
- [@renovate[bot]](https://github.com/renovate[bot])
- Adam Dierkens ([@adierkens](https://github.com/adierkens))
- Adam Gołąb ([@adam-golab](https://github.com/adam-golab))
- Adam Jahnke ([@adamyonk](https://github.com/adamyonk))
- Alex Khomenko ([@Clarity-89](https://github.com/Clarity-89))
- Alex Yang ([@himself65](https://github.com/himself65))
- An Dang ([@zyzo](https://github.com/zyzo))
- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Arturo Silva (arturo.silva@washpost.com)
- Beltrán Rengifo ([@beltranrengifo](https://github.com/beltranrengifo))
- Benjamin Kniffler (bkniffler@me.com)
- Carles Núñez Tomeo (carles.nunez@letgo.com)
- Christopher Dura ([@chris-dura](https://github.com/chris-dura))
- Clay Risser ([@clayrisser](https://github.com/clayrisser))
- David Richolm ([@dricholm](https://github.com/dricholm))
- Erik Hughes ([@Swiftwork](https://github.com/Swiftwork))
- Fabien (frassinier@talend.com)
- Fatih Kalifa ([@pveyes](https://github.com/pveyes))
- Homa Wong ([@unional](https://github.com/unional))
- Ian VanSchooten ([@IanVS](https://github.com/IanVS))
- Jack Westbrook ([@jackw](https://github.com/jackw))
- Jacob Coughenour ([@jacobcoughenour](https://github.com/jacobcoughenour))
- Jeroen Zwartepoorte ([@jpzwarte](https://github.com/jpzwarte))
- Klaus Nygård ([@nygardk](https://github.com/nygardk))
- Lauri Luotola ([@leiit](https://github.com/leiit))
- Mend Renovate ([@renovate-bot](https://github.com/renovate-bot))
- Nikki Pantony ([@h0t-p1xels](https://github.com/h0t-p1xels))
- nilscox ([@nilscox](https://github.com/nilscox))
- Paul Fasola ([@PaulFasola](https://github.com/PaulFasola))
- Pavel Keyzik ([@pavelkeyzik](https://github.com/pavelkeyzik))
- Rohan Poojary ([@RohanPoojary1107](https://github.com/RohanPoojary1107))
- Ryan McHenry ([@Develonaut](https://github.com/Develonaut))
- Sergey Kozlov ([@dartess](https://github.com/dartess))
- Slava Kostenko ([@Namielusi](https://github.com/Namielusi))
- Steven Sacks ([@stevensacks](https://github.com/stevensacks))
- Tobias Skarhed ([@tskarhed](https://github.com/tskarhed))
- Zeno Jiricek ([@airtonix](https://github.com/airtonix))

---

# v4.0.2 (Wed Jun 19 2024)

#### 🐛 Bug Fix

- Fix for the "Storybook preview hooks can only be called inside decorators and story functions." error [#279](https://github.com/hipstersmoothie/storybook-dark-mode/pull/279) ([@adam-golab](https://github.com/adam-golab))

#### Authors: 1

- Adam Gołąb ([@adam-golab](https://github.com/adam-golab))

---

# v4.0.1 (Mon Mar 18 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Lauri Luotola ([@leiit](https://github.com/leiit)), for all your work!

#### 🐛 Bug Fix

- Fix `useDarkMode` to use correct channel [#266](https://github.com/hipstersmoothie/storybook-dark-mode/pull/266) ([@leiit](https://github.com/leiit))

#### 🔩 Dependency Updates

- Update dependency @storybook/icons to v1.2.9 [#253](https://github.com/hipstersmoothie/storybook-dark-mode/pull/253) ([@renovate[bot]](https://github.com/renovate[bot]))

#### Authors: 2

- [@renovate[bot]](https://github.com/renovate[bot])
- Lauri Luotola ([@leiit](https://github.com/leiit))

---

# v4.0.0 (Fri Mar 15 2024)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Sergey Kozlov ([@dartess](https://github.com/dartess))

:heart: Rohan Poojary ([@RohanPoojary1107](https://github.com/RohanPoojary1107))

#### 💥 Breaking Change

- Storybook 8 [#251](https://github.com/hipstersmoothie/storybook-dark-mode/pull/251) ([@dartess](https://github.com/dartess))

#### ⚠️ Pushed to `master`

- update auto ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### 📝 Documentation

- Update addons import in readme code examples [#243](https://github.com/hipstersmoothie/storybook-dark-mode/pull/243) ([@RohanPoojary1107](https://github.com/RohanPoojary1107))

#### Authors: 3

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Rohan Poojary ([@RohanPoojary1107](https://github.com/RohanPoojary1107))
- Sergey Kozlov ([@dartess](https://github.com/dartess))

---

# v3.0.3 (Sun Nov 26 2023)

:tada: This release contains work from a new contributor! :tada:

Thank you, Steven Sacks ([@stevensacks](https://github.com/stevensacks)), for all your work!

#### 🐛 Bug Fix

- fix: switch to @storybook/manager-api [#246](https://github.com/hipstersmoothie/storybook-dark-mode/pull/246) ([@stevensacks](https://github.com/stevensacks) [@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 2

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Steven Sacks ([@stevensacks](https://github.com/stevensacks))

---

# v3.0.2 (Sun Nov 26 2023)

#### 🐛 Bug Fix

- split release step out [#247](https://github.com/hipstersmoothie/storybook-dark-mode/pull/247) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v3.0.1 (Fri Jul 28 2023)

#### ⚠️ Pushed to `master`

- bump node ([@hipstersmoothie](https://github.com/hipstersmoothie))
- move to actions ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v3.0.0 (Mon Apr 03 2023)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Himself65 ([@Himself65](https://github.com/Himself65))

:heart: Zeno Jiricek ([@airtonix](https://github.com/airtonix))

#### 💥 Breaking Change

- chore: bump to storybook v7 [#224](https://github.com/hipstersmoothie/storybook-dark-mode/pull/224) ([@Himself65](https://github.com/Himself65))

#### 🐛 Bug Fix

- fix: use classTarget when updating manager too [#223](https://github.com/hipstersmoothie/storybook-dark-mode/pull/223) ([@airtonix](https://github.com/airtonix))

#### Authors: 2

- Himself65 ([@Himself65](https://github.com/Himself65))
- Zeno Jiricek ([@airtonix](https://github.com/airtonix))

---

# v2.1.1 (Tue Feb 21 2023)

:tada: This release contains work from a new contributor! :tada:

Thank you, An Dang ([@zyzo](https://github.com/zyzo)), for all your work!

#### 🐛 Bug Fix

- Null check window.matchMedia [#222](https://github.com/hipstersmoothie/storybook-dark-mode/pull/222) ([@zyzo](https://github.com/zyzo))

#### Authors: 1

- An Dang ([@zyzo](https://github.com/zyzo))

---

# v2.1.0 (Sun Feb 19 2023)

#### 🚀 Enhancement

- feat: Add ability to toggle multiple light/dark classes [#220](https://github.com/hipstersmoothie/storybook-dark-mode/pull/220) ([@chris-dura](https://github.com/chris-dura))

#### Authors: 1

- Christopher Dura ([@chris-dura](https://github.com/chris-dura))

---

# v2.0.6 (Fri Feb 10 2023)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Slava Kostenko ([@Namielusi](https://github.com/Namielusi))

:heart: null[@erik-d](https://github.com/erik-d)

#### 🐛 Bug Fix

- Fix importing global variables [#217](https://github.com/hipstersmoothie/storybook-dark-mode/pull/217) ([@Namielusi](https://github.com/Namielusi))
- Document what is needed when upgrading from 1.x [#210](https://github.com/hipstersmoothie/storybook-dark-mode/pull/210) ([@erik-d](https://github.com/erik-d))

#### Authors: 2

- [@erik-d](https://github.com/erik-d)
- Slava Kostenko ([@Namielusi](https://github.com/Namielusi))

---

# v2.0.5 (Thu Dec 29 2022)

:tada: This release contains work from a new contributor! :tada:

Thank you, Beltrán Rengifo ([@beltranrengifo](https://github.com/beltranrengifo)), for all your work!

#### 🐛 Bug Fix

- Fix: `current` param not being respected by the dark OS color mode [#207](https://github.com/hipstersmoothie/storybook-dark-mode/pull/207) ([@beltranrengifo](https://github.com/beltranrengifo))

#### 🔩 Dependency Updates

- Bump ini from 1.3.5 to 1.3.8 [#189](https://github.com/hipstersmoothie/storybook-dark-mode/pull/189) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump minimatch from 3.0.4 to 3.1.2 [#196](https://github.com/hipstersmoothie/storybook-dark-mode/pull/196) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump y18n from 4.0.0 to 4.0.3 [#190](https://github.com/hipstersmoothie/storybook-dark-mode/pull/190) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump async from 3.2.0 to 3.2.4 [#188](https://github.com/hipstersmoothie/storybook-dark-mode/pull/188) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump ajv from 6.10.0 to 6.12.6 [#175](https://github.com/hipstersmoothie/storybook-dark-mode/pull/175) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump lodash from 4.17.11 to 4.17.21 [#152](https://github.com/hipstersmoothie/storybook-dark-mode/pull/152) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Beltrán Rengifo ([@beltranrengifo](https://github.com/beltranrengifo))

---

# v2.0.4 (Tue Dec 06 2022)

#### 🐛 Bug Fix

- Dev setup [#201](https://github.com/hipstersmoothie/storybook-dark-mode/pull/201) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v2.0.3 (Mon Dec 05 2022)

#### 🐛 Bug Fix

- don't show light/dark as a toggle since that doesn't really make any sense [#199](https://github.com/hipstersmoothie/storybook-dark-mode/pull/199) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v2.0.2 (Mon Dec 05 2022)

#### 🐛 Bug Fix

- fix flash of unthemed storybook when using CSS overrides [#198](https://github.com/hipstersmoothie/storybook-dark-mode/pull/198) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v2.0.1 (Mon Dec 05 2022)

:tada: This release contains work from a new contributor! :tada:

Thank you, Clay Risser ([@clayrisser](https://github.com/clayrisser)), for all your work!

#### 🐛 Bug Fix

- Update README.md [#197](https://github.com/hipstersmoothie/storybook-dark-mode/pull/197) ([@clayrisser](https://github.com/clayrisser) [@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 2

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Clay Risser ([@clayrisser](https://github.com/clayrisser))

---

# v2.0.0 (Mon Dec 05 2022)

#### 💥 Breaking Change

- Fix: Storybook 6.5.x Yarn PnP preset loading issue [#191](https://github.com/hipstersmoothie/storybook-dark-mode/pull/191) ([@jackw](https://github.com/jackw))

#### Authors: 1

- Jack Westbrook ([@jackw](https://github.com/jackw))

---

# v1.1.2 (Wed Sep 14 2022)

:tada: This release contains work from a new contributor! :tada:

Thank you, Ryan McHenry ([@Develonaut](https://github.com/Develonaut)), for all your work!

#### 🐛 Bug Fix

- Persist current store value [#185](https://github.com/hipstersmoothie/storybook-dark-mode/pull/185) ([@Develonaut](https://github.com/Develonaut))

#### Authors: 1

- Ryan McHenry ([@Develonaut](https://github.com/Develonaut))

---

# v1.1.1 (Wed Sep 14 2022)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: nilscox ([@nilscox](https://github.com/nilscox))

:heart: Jack Westbrook ([@jackw](https://github.com/jackw))

#### 🐛 Bug Fix

- Remove @storybook/\* dependencies from peer dependencies [#186](https://github.com/hipstersmoothie/storybook-dark-mode/pull/186) ([@nilscox](https://github.com/nilscox))
- Fix: Storybook preset loading error [#187](https://github.com/hipstersmoothie/storybook-dark-mode/pull/187) ([@jackw](https://github.com/jackw))

#### Authors: 2

- Jack Westbrook ([@jackw](https://github.com/jackw))
- nilscox ([@nilscox](https://github.com/nilscox))

---

# v1.1.0 (Wed Apr 27 2022)

:tada: This release contains work from a new contributor! :tada:

Thank you, Fabien ([@frassinier](https://github.com/frassinier)), for all your work!

#### 🚀 Enhancement

- feat: add update_dark_mode event [#182](https://github.com/hipstersmoothie/storybook-dark-mode/pull/182) ([@frassinier](https://github.com/frassinier))

#### Authors: 1

- Fabien ([@frassinier](https://github.com/frassinier))

---

# v1.0.9 (Thu Feb 17 2022)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Arturo Silva ([@artmsilva](https://github.com/artmsilva))

:heart: Nikki Pantony ([@nikkipantony](https://github.com/nikkipantony))

:heart: Ian VanSchooten ([@IanVS](https://github.com/IanVS))

#### 🐛 Bug Fix

- fix: alignment issue with icons in toolbar with storybook 6.4.9 [#172](https://github.com/hipstersmoothie/storybook-dark-mode/pull/172) ([@artmsilva](https://github.com/artmsilva))
- Change export parameters to export const parameters in README [#164](https://github.com/hipstersmoothie/storybook-dark-mode/pull/164) ([@nikkipantony](https://github.com/nikkipantony))
- Import addon as named [#155](https://github.com/hipstersmoothie/storybook-dark-mode/pull/155) ([@IanVS](https://github.com/IanVS))

#### Authors: 3

- Arturo Silva ([@artmsilva](https://github.com/artmsilva))
- Ian VanSchooten ([@IanVS](https://github.com/IanVS))
- Nikki Pantony ([@nikkipantony](https://github.com/nikkipantony))

---

# v1.0.8 (Sat May 08 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, Klaus Nygård ([@nygardk](https://github.com/nygardk)), for all your work!

#### 🐛 Bug Fix

- Fix storybook peerDependencies semver range [#149](https://github.com/hipstersmoothie/storybook-dark-mode/pull/149) ([@nygardk](https://github.com/nygardk))

#### Authors: 1

- Klaus Nygård ([@nygardk](https://github.com/nygardk))

---

# v1.0.7 (Wed Mar 10 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, David Richolm ([@dricholm](https://github.com/dricholm)), for all your work!

#### 🐛 Bug Fix

- Add parameter for classTarget to toggle iframe preview class [#144](https://github.com/hipstersmoothie/storybook-dark-mode/pull/144) ([@dricholm](https://github.com/dricholm))

#### Authors: 1

- David Richolm ([@dricholm](https://github.com/dricholm))

---

# v1.0.6 (Mon Mar 08 2021)

#### ⚠️ Pushed to `master`

- only get initial mode once ([@hipstersmoothie](https://github.com/hipstersmoothie))
- don't set default params to avoid base theme flash ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v1.0.5 (Mon Mar 08 2021)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Paul Fasola ([@PaulFasola](https://github.com/PaulFasola))

:heart: Pavel Keyzik ([@pavelkeyzik](https://github.com/pavelkeyzik))

#### 🐛 Bug Fix

- Fix "color function invalid arg" issue when upgrading between versions of storybook [#142](https://github.com/hipstersmoothie/storybook-dark-mode/pull/142) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### 📝 Documentation

- README: added "themes" import origin [#141](https://github.com/hipstersmoothie/storybook-dark-mode/pull/141) ([@PaulFasola](https://github.com/PaulFasola))
- Change presets field to addons in configuration [#139](https://github.com/hipstersmoothie/storybook-dark-mode/pull/139) ([@pavelkeyzik](https://github.com/pavelkeyzik))

#### Authors: 3

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Paul Fasola ([@PaulFasola](https://github.com/PaulFasola))
- Pavel Keyzik ([@pavelkeyzik](https://github.com/pavelkeyzik))

---

# v1.0.4 (Tue Dec 15 2020)

#### 🐛 Bug Fix

- add preset.js [#129](https://github.com/hipstersmoothie/storybook-dark-mode/pull/129) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### 📝 Documentation

- update readme config for storybook 6.0 [#126](https://github.com/hipstersmoothie/storybook-dark-mode/pull/126) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v1.0.3 (Fri Sep 11 2020)

#### 🐛 Bug Fix

- Ship source files for sourcemaps [#123](https://github.com/hipstersmoothie/storybook-dark-mode/pull/123) ([@adierkens](https://github.com/adierkens))

#### Authors: 1

- Adam Dierkens ([@adierkens](https://github.com/adierkens))

---

# v1.0.2 (Wed Sep 02 2020)

#### 🐛 Bug Fix

- Revert "update deprecated function" [#122](https://github.com/hipstersmoothie/storybook-dark-mode/pull/122) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v1.0.1 (Wed Sep 02 2020)

#### 🐛 Bug Fix

- Fixing brand theming in light mode [#121](https://github.com/hipstersmoothie/storybook-dark-mode/pull/121) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v1.0.0 (Wed Aug 12 2020)

#### 💥 Breaking Change

- Working on 6.0 [#106](https://github.com/hipstersmoothie/storybook-dark-mode/pull/106) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v0.6.1 (Fri May 22 2020)

:tada: This release contains work from a new contributor! :tada:

Thank you, Alex Khomenko ([@Clarity-89](https://github.com/Clarity-89)), for all your work!

#### 🐛 Bug Fix

- useDarkMode: read default isDark value from local storage [#110](https://github.com/hipstersmoothie/storybook-dark-mode/pull/110) ([@Clarity-89](https://github.com/Clarity-89))

#### Authors: 1

- Alex Khomenko ([@Clarity-89](https://github.com/Clarity-89))

---

# v0.6.0 (Wed May 20 2020)

#### 🚀 Enhancement

- add dark/light class to manager + optionally set classes on the preview [#107](https://github.com/hipstersmoothie/storybook-dark-mode/pull/107) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v0.5.0 (Wed May 20 2020)

:tada: This release contains work from a new contributor! :tada:

Thank you, Jeroen Zwartepoorte ([@jpzwarte](https://github.com/jpzwarte)), for all your work!

#### 🚀 Enhancement

- Add ability to set a dark/light class on the preview iframe [#102](https://github.com/hipstersmoothie/storybook-dark-mode/pull/102) (jeroen.zwartepoorte@iddinkgroup.com [@hipstersmoothie](https://github.com/hipstersmoothie))

#### 📝 Documentation

- Update auto + add all-contributors [#103](https://github.com/hipstersmoothie/storybook-dark-mode/pull/103) ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Update README.md [#99](https://github.com/hipstersmoothie/storybook-dark-mode/pull/99) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 2

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Jeroen Zwartepoorte ([@jpzwarte](https://github.com/jpzwarte))

---

# v0.4.1 (Wed Apr 15 2020)

#### 🐛 Bug Fix

- respect current param if it's set [#98](https://github.com/hipstersmoothie/storybook-dark-mode/pull/98) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v0.4.0 (Fri Mar 27 2020)

#### 🚀 Enhancement

- Add toggle button to to docs page and save custom themes on initilization [#97](https://github.com/hipstersmoothie/storybook-dark-mode/pull/97) ([@tskarhed](https://github.com/tskarhed))

#### Authors: 1

- Tobias Skarhed ([@tskarhed](https://github.com/tskarhed))

---

# v0.3.1 (Fri Mar 13 2020)

#### 🐛 Bug Fix

- Fix undefined story data [#91](https://github.com/hipstersmoothie/storybook-dark-mode/pull/91) ([@jacobcoughenour](https://github.com/jacobcoughenour))

#### Authors: 1

- Jacob Coughenour ([@jacobcoughenour](https://github.com/jacobcoughenour))

---

# v0.3.0 (Tue Feb 04 2020)

#### 🚀 Enhancement

- Create a React hook for getting dark-mode state [#89](https://github.com/hipstersmoothie/storybook-dark-mode/pull/89) ([@adierkens](https://github.com/adierkens))

#### 🐛 Bug Fix

- Update dependency auto-config-hipstersmoothie to v3 [#88](https://github.com/hipstersmoothie/storybook-dark-mode/pull/88) ([@renovate-bot](https://github.com/renovate-bot) [@hipstersmoothie](https://github.com/hipstersmoothie) [@renovate[bot]](https://github.com/renovate[bot]))

#### 🔩 Dependency Updates

- Update dependency auto to v9.9.0 [#82](https://github.com/hipstersmoothie/storybook-dark-mode/pull/82) ([@renovate-bot](https://github.com/renovate-bot) [@renovate[bot]](https://github.com/renovate[bot]))
- Update dependency fast-deep-equal to v3 [#74](https://github.com/hipstersmoothie/storybook-dark-mode/pull/74) ([@renovate-bot](https://github.com/renovate-bot) [@renovate[bot]](https://github.com/renovate[bot]))
- Update storybook monorepo to v5.3.8 [#68](https://github.com/hipstersmoothie/storybook-dark-mode/pull/68) ([@renovate-bot](https://github.com/renovate-bot) [@renovate[bot]](https://github.com/renovate[bot]))
- Update typescript-eslint monorepo to v2.17.0 [#66](https://github.com/hipstersmoothie/storybook-dark-mode/pull/66) ([@renovate-bot](https://github.com/renovate-bot) [@renovate[bot]](https://github.com/renovate[bot]))
- Update dependency typescript to v3.7.5 [#59](https://github.com/hipstersmoothie/storybook-dark-mode/pull/59) ([@renovate-bot](https://github.com/renovate-bot) [@renovate[bot]](https://github.com/renovate[bot]))
- Update dependency husky to v3.1.0 [#51](https://github.com/hipstersmoothie/storybook-dark-mode/pull/51) ([@renovate-bot](https://github.com/renovate-bot) [@renovate[bot]](https://github.com/renovate[bot]))
- Update dependency eslint-config-prettier to v6.9.0 [#56](https://github.com/hipstersmoothie/storybook-dark-mode/pull/56) ([@renovate-bot](https://github.com/renovate-bot) [@renovate[bot]](https://github.com/renovate[bot]))
- Update dependency lint-staged to v9.5.0 [#50](https://github.com/hipstersmoothie/storybook-dark-mode/pull/50) ([@renovate-bot](https://github.com/renovate-bot) [@renovate[bot]](https://github.com/renovate[bot]))
- Update dependency auto to v9 [#78](https://github.com/hipstersmoothie/storybook-dark-mode/pull/78) ([@renovate-bot](https://github.com/renovate-bot) [@renovate[bot]](https://github.com/renovate[bot]))

#### Authors: 4

- [@renovate[bot]](https://github.com/renovate[bot])
- Adam Dierkens ([@adierkens](https://github.com/adierkens))
- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
- WhiteSource Renovate ([@renovate-bot](https://github.com/renovate-bot))

---

# v0.2.0 (Tue Dec 10 2019)

#### 🚀 Enhancement

- feat: add media query matcher for operating system theme control [#73](https://github.com/hipstersmoothie/storybook-dark-mode/pull/73) ([@Swiftwork](https://github.com/Swiftwork))

#### Authors: 1

- Erik Hughes ([@Swiftwork](https://github.com/Swiftwork))

---

# v0.1.9 (Wed Oct 30 2019)

#### 🐛 Bug Fix

- Fix useEffect warning/memory leak [#63](https://github.com/hipstersmoothie/storybook-dark-mode/pull/63) ([@adamyonk](https://github.com/adamyonk) [@hipstersmoothie](https://github.com/hipstersmoothie))

#### 🔩 Dependency Updates

- Update react monorepo [#53](https://github.com/hipstersmoothie/storybook-dark-mode/pull/53) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency @types/react to v16.9.11 [#54](https://github.com/hipstersmoothie/storybook-dark-mode/pull/54) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency auto to v7.12.4 [#64](https://github.com/hipstersmoothie/storybook-dark-mode/pull/64) ([@renovate-bot](https://github.com/renovate-bot))
- Update typescript-eslint monorepo to v2.6.0 [#58](https://github.com/hipstersmoothie/storybook-dark-mode/pull/58) ([@renovate-bot](https://github.com/renovate-bot))
- Pin dependency eslint-plugin-react-hooks to 2.1.1 [#47](https://github.com/hipstersmoothie/storybook-dark-mode/pull/47) ([@renovate-bot](https://github.com/renovate-bot))

#### Authors: 3

- Adam Jahnke ([@adamyonk](https://github.com/adamyonk))
- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Renovate Bot ([@renovate-bot](https://github.com/renovate-bot))

---

# v0.1.8 (Mon Oct 28 2019)

#### 🐛 Bug Fix

- Listen for `docsRendered` event so it also picks up the correct theme. [#61](https://github.com/hipstersmoothie/storybook-dark-mode/pull/61) ([@adamyonk](https://github.com/adamyonk))

#### 🏠 Internal

- Update renovate.json [#16](https://github.com/hipstersmoothie/storybook-dark-mode/pull/16) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### 🔩 Dependency Updates

- Update dependency auto to v7.12.3 [#55](https://github.com/hipstersmoothie/storybook-dark-mode/pull/55) ([@renovate-bot](https://github.com/renovate-bot))
- Eslint update [#46](https://github.com/hipstersmoothie/storybook-dark-mode/pull/46) ([@renovate-bot](https://github.com/renovate-bot) [@hipstersmoothie](https://github.com/hipstersmoothie))
- Update dependency auto to v7.6.2 [#44](https://github.com/hipstersmoothie/storybook-dark-mode/pull/44) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency @types/react to v16.9.4 [#41](https://github.com/hipstersmoothie/storybook-dark-mode/pull/41) ([@renovate-bot](https://github.com/renovate-bot))
- Update react monorepo to v16.10.1 [#43](https://github.com/hipstersmoothie/storybook-dark-mode/pull/43) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency lint-staged to v9.4.0 [#40](https://github.com/hipstersmoothie/storybook-dark-mode/pull/40) ([@renovate-bot](https://github.com/renovate-bot))
- Update storybook monorepo to v5.2.1 [#39](https://github.com/hipstersmoothie/storybook-dark-mode/pull/39) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency auto to v7.6.0 [#38](https://github.com/hipstersmoothie/storybook-dark-mode/pull/38) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency typescript to v3.6.3 [#37](https://github.com/hipstersmoothie/storybook-dark-mode/pull/37) ([@renovate-bot](https://github.com/renovate-bot))
- Update typescript-eslint monorepo to v2 (major) [#34](https://github.com/hipstersmoothie/storybook-dark-mode/pull/34) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency husky to v3 [#32](https://github.com/hipstersmoothie/storybook-dark-mode/pull/32) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency lint-staged to v9 [#33](https://github.com/hipstersmoothie/storybook-dark-mode/pull/33) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency auto to v7.4.5 [#35](https://github.com/hipstersmoothie/storybook-dark-mode/pull/35) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency eslint-config-prettier to v6.3.0 [#36](https://github.com/hipstersmoothie/storybook-dark-mode/pull/36) ([@renovate-bot](https://github.com/renovate-bot))
- Update typescript-eslint monorepo to v1.13.0 [#29](https://github.com/hipstersmoothie/storybook-dark-mode/pull/29) ([@renovate-bot](https://github.com/renovate-bot))
- Update react monorepo to v16.9.0 [#27](https://github.com/hipstersmoothie/storybook-dark-mode/pull/27) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency eslint-config-prettier to v6 [#31](https://github.com/hipstersmoothie/storybook-dark-mode/pull/31) ([@renovate-bot](https://github.com/renovate-bot))
- Update storybook monorepo to v5.1.11 [#28](https://github.com/hipstersmoothie/storybook-dark-mode/pull/28) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency typescript to v3.6.2 [#26](https://github.com/hipstersmoothie/storybook-dark-mode/pull/26) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency auto to v7.4.4 [#25](https://github.com/hipstersmoothie/storybook-dark-mode/pull/25) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency lint-staged to v8.2.1 [#23](https://github.com/hipstersmoothie/storybook-dark-mode/pull/23) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency eslint-plugin-react to v7.14.3 [#21](https://github.com/hipstersmoothie/storybook-dark-mode/pull/21) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency prettier to v1.18.2 [#24](https://github.com/hipstersmoothie/storybook-dark-mode/pull/24) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency jest to v24.9.0 [#22](https://github.com/hipstersmoothie/storybook-dark-mode/pull/22) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency eslint-config-prettier to v4.3.0 [#19](https://github.com/hipstersmoothie/storybook-dark-mode/pull/19) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency eslint to v5.16.0 [#18](https://github.com/hipstersmoothie/storybook-dark-mode/pull/18) ([@renovate-bot](https://github.com/renovate-bot))
- Pin dependencies [#17](https://github.com/hipstersmoothie/storybook-dark-mode/pull/17) ([@renovate-bot](https://github.com/renovate-bot))
- Update dependency @types/react to v16.9.2 [#15](https://github.com/hipstersmoothie/storybook-dark-mode/pull/15) ([@renovate-bot](https://github.com/renovate-bot))

#### Authors: 3

- Adam Jahnke ([@adamyonk](https://github.com/adamyonk))
- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Renovate Bot ([@renovate-bot](https://github.com/renovate-bot))

---

# v0.1.6 (Tue Sep 03 2019)

#### 🐛 Bug Fix

- Pin dependencies [#14](https://github.com/hipstersmoothie/storybook-dark-mode/pull/14) ([@renovate-bot](https://github.com/renovate-bot))
- Configure Renovate [#13](https://github.com/hipstersmoothie/storybook-dark-mode/pull/13) ([@renovate-bot](https://github.com/renovate-bot))

#### Authors: 1

- Renovate Bot ([@renovate-bot](https://github.com/renovate-bot))

---

# v0.1.5 (Tue Aug 27 2019)

#### 🐛 Bug Fix

- Fix dependency issues [#12](https://github.com/hipstersmoothie/storybook-dark-mode/pull/12) ([@bkniffler](https://github.com/bkniffler))

#### Authors: 1

- Benjamin Kniffler ([@bkniffler](https://github.com/bkniffler))

---

# v0.1.4 (Wed Jul 17 2019)

#### 🐛 Bug Fix

- Subscribed to another event in order to trigger theme change on story change [#10](https://github.com/hipstersmoothie/storybook-dark-mode/pull/10) ([@carlesnunez](https://github.com/carlesnunez))

#### Authors: 1

- Carles Núñez ([@carlesnunez](https://github.com/carlesnunez))

---

# v0.1.3 (Wed Mar 13 2019)

#### 🐛 Bug Fix

- update store if defaults change [#7](https://github.com/hipstersmoothie/storybook-dark-mode/pull/7) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v0.1.2 (Wed Mar 13 2019)

#### 🐛 Bug Fix

- persisted state [#6](https://github.com/hipstersmoothie/storybook-dark-mode/pull/6) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v0.1.1 (Wed Mar 13 2019)

#### 🐛 Bug Fix

- emit DARK_MODE event via addons channel [#2](https://github.com/hipstersmoothie/storybook-dark-mode/pull/2) ([@pveyes](https://github.com/pveyes) [@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 2

- Fatih Kalifa ([@pveyes](https://github.com/pveyes))
- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v0.1.0 (Fri Mar 08 2019)

#### 🚀 Enhancement

- Add ability to configure the dark and light themes [#5](https://github.com/hipstersmoothie/storybook-dark-mode/pull/5) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v0.0.4 (Wed Mar 06 2019)

#### ⚠️ Pushed to master

- add example gif ([@lisowski54@gmail.com](https://github.com/lisowski54@gmail.com))

#### Authors: 1

- [@lisowski54@gmail.com](https://github.com/lisowski54@gmail.com)

---

# v0.0.3 (Wed Mar 06 2019)

#### ⚠️ Pushed to master

- add a simple readme ([@lisowski54@gmail.com](https://github.com/lisowski54@gmail.com))

#### Authors: 1

- [@lisowski54@gmail.com](https://github.com/lisowski54@gmail.com)

---

# v0.0.2 (Wed Mar 06 2019)

#### ⚠️ Pushed to master

- add github to known hosts ([@lisowski54@gmail.com](https://github.com/lisowski54@gmail.com))
- add circle ([@lisowski54@gmail.com](https://github.com/lisowski54@gmail.com))
- add license ([@lisowski54@gmail.com](https://github.com/lisowski54@gmail.com))
- add author ([@lisowski54@gmail.com](https://github.com/lisowski54@gmail.com))

#### Authors: 1

- [@lisowski54@gmail.com](https://github.com/lisowski54@gmail.com)
