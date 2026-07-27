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
