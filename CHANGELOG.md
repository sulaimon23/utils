# [1.2.0](https://github.com/sulaimon23/utils/compare/v1.1.0...v1.2.0) (2026-07-27)


### Bug Fixes

* **build:** declare typescript as a devDependency ([eed4fc7](https://github.com/sulaimon23/utils/commit/eed4fc78daf77ada928ef471627973032501b196))
* **build:** make the esm output loadable and move to typescript 6 ([c3c75a8](https://github.com/sulaimon23/utils/commit/c3c75a8617be4be674876f2d6448e73916835b62))
* **dates:** derive the quarter from the supplied date ([a55baf0](https://github.com/sulaimon23/utils/commit/a55baf08d9e5c88d53314cfa5355804ca32c2ffe))
* **pkg:** correct package scope to [@sulaimon23](https://github.com/sulaimon23) ([9e832fe](https://github.com/sulaimon23/utils/commit/9e832fe2e93ad7640a16bebb912d041c3264de40))
* **strings:** return empty tokens for a blank compound string ([da3e736](https://github.com/sulaimon23/utils/commit/da3e7366efe92d326b43dd0464ed4181baecbd69))


### Features

* **dates:** add getLastDayOfMonthDate, getOrdinalSuffix, isWeekend and getAge ([c45e02c](https://github.com/sulaimon23/utils/commit/c45e02c92945d5918c63eebb1fa123b0e7c68f84))
* **dates:** default getDateTimeAgo to measuring against now ([4ae56c4](https://github.com/sulaimon23/utils/commit/4ae56c4426c9fdfb635f495858b0821728250e9f))
* **numbers:** add clamp, percentageChange and minor-unit conversion helpers ([1c5f43d](https://github.com/sulaimon23/utils/commit/1c5f43d8926cf3b1a253aaad11c81da7b9fc8278))
* **strings:** add slugify, truncate, getInitials and isValidEmail ([86158d1](https://github.com/sulaimon23/utils/commit/86158d1e372173605de03c3bc4b882a05e5c1103))

# Changelog

Releases are cut by [semantic-release](https://semantic-release.gitbook.io) from
the commit history, and it maintains this file from here on. The entries below
were written by hand to cover the period before the release workflow was able to
run.

## Unreleased

### Fixed

- The ESM half of the dual build never worked. `module: "ESNext"` was paired with
  `moduleResolution: "NodeNext"`, which TypeScript rejects, so `npm run build`
  failed before emitting anything. Even once it compiled, the package declares no
  `"type"`, so Node would have read the emitted `lib/esm/*.js` as CommonJS and
  thrown on the `import` syntax. Relative imports now carry explicit `.js`
  extensions, and each output directory gets a `package.json` pinning its module
  system.
- `getFirstDayOfQuarterDate` read the month off a fresh `new Date()` rather than
  its argument, so it mixed the year you passed with today's quarter.
- `splitCompoundString('')` returned `[undefined, '']` despite promising
  `[string, string]`.
- `typescript` was never declared as a dependency, so a clean install could not
  build.
- The package was published under the wrong scope for its repository, which
  GitHub Packages rejects.
- Every workflow filtered on a `main` branch that does not exist here, so CI had
  never run once.

### Added

- 12 utilities: `getLastDayOfMonthDate`, `getOrdinalSuffix`, `isWeekend`,
  `getAge`, `slugify`, `truncate`, `getInitials`, `isValidEmail`, `clamp`,
  `percentageChange`, `toMinorUnits` and `fromMinorUnits`.
- Named exports for every utility, alongside the existing default export.
- A README documenting all 48 utilities, an ISC `LICENSE`, and eslint + prettier.

### Changed

- `getDateTimeAgo` now defaults its second argument to now, so the one-argument
  call its name implies works.
- Tests moved from chai to `node:assert`, dropping two dependencies.
- Toolchain moved to TypeScript 6, eslint 10, mocha 11, husky 9 and commitlint 21;
  CI now covers Node 20, 22 and 24.
