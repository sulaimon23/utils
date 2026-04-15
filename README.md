# @sulaimon23/utils

Typescript utilities commonly used in apps.

[![Tests](https://img.shields.io/github/actions/workflow/status/sulaimon23/utils/tests.yml?branch=master&label=tests)](https://github.com/sulaimon23/utils/actions/workflows/tests.yml)
[![License: ISC](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/sulaimon23/utils/blob/master/LICENSE)

A small, dependency-free grab bag of date, string, number and money helpers pulled
out of a handful of apps. Ships as a dual CJS/ESM package with bundled type
declarations. Defaults lean Nigerian — `₦` for money, `234` for phone numbers —
but every default is overridable.

## Install

This package is published to **GitHub Packages**, not the public npm registry, so
`npm install` will 404 until you point the `@sulaimon23` scope at the right
registry. Add an `.npmrc` next to your `package.json`:

```
@sulaimon23:registry=https://npm.pkg.github.com/
```

Then:

```sh
npm install @sulaimon23/utils
```

GitHub Packages requires authentication even for public packages. If you hit a
`401`, add a [personal access token](https://github.com/settings/tokens) with the
`read:packages` scope to your `.npmrc` too — keep the token in the environment
rather than committing it:

```
@sulaimon23:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

In CI, `actions/setup-node` will write this for you:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: 20
    registry-url: https://npm.pkg.github.com/
    scope: '@sulaimon23'
  env:
    NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Usage

Every utility is available both as a named export and as a property of the default
export. `require()` resolves to `lib/cjs/index.js` and `import` to
`lib/esm/index.mjs`, so both styles work against the same types:

```ts
import { formatMoney, getPaginationParameters } from '@sulaimon23/utils';  // named
import utils from '@sulaimon23/utils';                                     // default object

const { formatMoney } = require('@sulaimon23/utils');                      // CJS
```

Prefer the named exports — they let a bundler drop the functions you don't use.
The default export pulls in all of them, and exists so that existing callers keep
working.

The examples below use the default object for brevity.

### Showing a discounted price

`discountedPrice` applies both the flat amount and the percentage to the original
value, so the two discounts don't compound. `formatMoney` defaults to `₦` with two
decimal places.

```ts
const listPrice = 24_500;
const payable = utils.roundOff2Dp(
    utils.discountedPrice(listPrice, 500, 10),  // 24500 - 500 - 2450
);

utils.formatMoney(listPrice);   // '₦24,500.00'
utils.formatMoney(payable);     // '₦21,550.00'
utils.formatMoney(payable, '$') // '$21,550.00'
```

### Normalising a phone number at signup

Users type local numbers; storage wants one canonical shape. `normalizePhoneNumber`
strips the leading trunk `0` and prefixes the country code (`234` by default),
leaving anything already in `+…` form alone.

```ts
utils.normalizePhoneNumber('08139498596');          // '+2348139498596'
utils.normalizePhoneNumber('2348139498596');        // '+2348139498596'
utils.normalizePhoneNumber('+2348139498596');       // '+2348139498596'
utils.normalizePhoneNumber('08139498596', '43');    // '+438139498596'
```

### Paginating a query

`getPaginationParameters` takes a 1-based page number and returns the pair most
query builders want. Page `0` and page `1` both skip nothing.

```ts
const { toSkip, limit } = utils.getPaginationParameters(4, 10);
// { toSkip: 30, limit: 10 }

const orders = await Order
    .find({ createdAt: { $gte: utils.getStartOfDayDate(30) } })
    .skip(toSkip)
    .limit(limit);
```

### Relative time in a feed

`getDateTimeAgo` returns abbreviated units, largest first, and measures against
now when you leave the second argument off.

```ts
const createdAt = new Date(2022, 11, 17, 20, 47);

utils.getDateTimeAgo(createdAt, new Date(2022, 11, 17, 22, 50));  // '2 hrs 3 mins'
utils.getDateTimeAgo(createdAt, new Date());                      // e.g. '3 yrs 7 mnths 4 dys'
utils.getDateTimeAgo(createdAt);                                  // same as passing new Date()

utils.getShortTextDayMonthOptionalyear(createdAt);  // '17 Dec 2022' (year dropped if current)
utils.getFormattedTimeString(createdAt);            // '8:47 PM'
```

## API

All functions are properties of the default export. Optional parameters show their
defaults in the description.

### Dates

| Function | Signature | Description |
| --- | --- | --- |
| `addDaysToDate` | `(days: number, date?: Date): Date` | Returns a copy of `date` (default: now) shifted by `days`; pass a negative number to subtract. |
| `addHoursToDate` | `(hours: number, date?: Date): Date` | Returns a copy of `date` (default: now) shifted by `hours`; negative values subtract. |
| `addMinutesToDate` | `(minutes: number, date?: Date): Date` | Returns a copy of `date` (default: now) shifted by `minutes`; negative values subtract. |
| `addMonthsToDate` | `(months: number, date?: Date): Date` | Returns a copy of `date` (default: now) shifted by `months`, following JavaScript's month-overflow rules — 31 Jan plus one month lands in March. |
| `addSecondsToDate` | `(seconds: number, date?: Date): Date` | Returns a copy of `date` (default: now) shifted by `seconds`; negative values subtract. |
| `addYearsToDate` | `(years: number, date?: Date): Date` | Returns a copy of `date` (default: now) shifted by `years`; negative values subtract. |
| `getAge` | `(birthDate: Date \| string \| number, asOf?: Date): number` | Whole years elapsed from `birthDate` to `asOf` (default: now), rolled back a year when the birthday hasn't come round yet. |
| `getDateDayDiff` | `(date: Date, anotherDate: Date): number` | Whole calendar days between the two dates, compared at midnight and always returned as a non-negative number. |
| `getDateFullText` | `(input: number \| string \| Date): string` | Formats as `MONTH D, YYYY` with an uppercase full month name, e.g. `DECEMBER 17, 2022`. |
| `getDateTimeAgo` | `(dateStart: string \| number \| Date, dateEnd?: string \| number \| Date): string` | Elapsed time between two instants as abbreviated units largest-first, e.g. `2 hrs 3 mins`, falling back to `3 secs` or `Instant` under a minute; defaults `dateEnd` to now, and returns `''` if either argument does not parse to a valid date. |
| `getDayText` | `(input: number \| string \| Date): string` | Full English weekday name for the date, e.g. `Saturday`. |
| `getEndOfDayDate` | `(daysAgo?: number, date?: Date): Date` | Takes `date` (default: now), rolls it back `daysAgo` days (default `0`) and sets the clock to `23:59:59.999` — the upper bound of a date-range query. |
| `getFirstDayOfMonthDate` | `(date?: Date): Date` | Midnight on the 1st of the date's month, in local time. |
| `getFirstDayOfQuarterDate` | `(date?: Date): Date` | Midnight on the first day of the calendar quarter containing `date`, in local time. |
| `getFirstDayOfWeekDate` | `(date?: Date): Date` | Midnight on the Sunday that starts the date's week; weeks are treated as Sunday-first. |
| `getFirstDayOfYearDate` | `(date?: Date): Date` | Midnight on 1 January of the date's year, in local time. |
| `getFormattedDateString` | `(input: number \| string \| Date): string` | Zero-padded numeric date as `DD/MM/YYYY`, e.g. `17/12/2022`. |
| `getFormattedTimeString` | `(input: string \| Date \| number): string` | 12-hour clock time with meridiem and no leading zero on the hour, e.g. `10:47 PM`. |
| `getLastDayOfMonthDate` | `(date?: Date): Date` | Last day of the month containing `date` (default: now), clocked to `23:59:59.999` — the closing bound to `getFirstDayOfMonthDate`'s opening one. |
| `getMonthDiff` | `(dateFrom: Date, dateTo: Date): number` | Calendar months from `dateFrom` to `dateTo`, ignoring day of month; negative when `dateTo` is the earlier date. |
| `getOrdinalSuffix` | `(value: number): string` | Appends the English ordinal suffix to a number — `1` → `'1st'`, `2` → `'2nd'`, `11` → `'11th'` — for rendering days of the month. |
| `getShortTextDate` | `(input: number \| string \| Date): string` | Formats as `D MON YYYY` with an uppercase three-letter month, e.g. `17 DEC 2022`. |
| `getShortTextDayMonthOptionalyear` | `(input: number \| string \| Date): string` | Formats as `D Mon`, appending the year only when it differs from the current year — `17 Dec` this year, `17 Dec 2022` otherwise. |
| `getStartOfDayDate` | `(daysAgo?: number, date?: Date): Date` | Takes `date` (default: now), rolls it back `daysAgo` days (default `0`) and sets the clock to `00:00:00.000` — the lower bound of a date-range query. |
| `isWeekend` | `(date?: Date): boolean` | `true` when `date` (default: now) falls on a Saturday or Sunday, in local time. |

### Strings

| Function | Signature | Description |
| --- | --- | --- |
| `capitalize` | `(text: string): string` | Trims the input, uppercases the first character and **lowercases the rest**, so `'hELLO wORLD'` becomes `'Hello world'`. |
| `generateRandomString` | `(length?: number, charset?: string): string` | Random string of `length` characters (default `5`) drawn from `charset` (default mixed-case letters plus digits) using `Math.random` — fine for reference codes, not for secrets. |
| `generateSequentialString` | `(serialNumber: number, outputLength?: number, charset?: string): string` | Renders a base-10 `serialNumber` as a fixed-width base-N string over `charset` (default `32` characters wide over `2346789ABCDEFHKLMNPQRTVWXY`, which omits visually ambiguous glyphs), giving constant-length, collision-free IDs as the serial increments. |
| `getAAnForWord` | `(word: string): 'a' \| 'an'` | Returns `'an'` when the word's first letter is a vowel and `'a'` otherwise, for grammatical article selection in generated sentences. |
| `getInitials` | `(name: string, max?: number): string` | Uppercase initials taken from the first `max` words of a name (default `2`), e.g. `'Taiwo Sulaimon'` → `'TS'`, for avatar placeholders. |
| `isValidEmail` | `(value: string): boolean` | `true` when the value has the shape of an email address; a format check for form validation, not proof the mailbox exists. |
| `normalizePhoneNumber` | `(phoneNumber: string, countryCode?: string): string` | Prefixes `+` and `countryCode` (default `'234'`), dropping the local trunk `0`; input already starting with `+` is returned untouched, and input starting with `(` is prefixed with `+<countryCode> `. |
| `slugify` | `(text: string): string` | Lowercases the text, strips accents and punctuation and joins the remaining words with hyphens, producing a URL-safe segment. |
| `splitCompoundString` | `(compoundString: string): [string, string]` | Splits on whitespace into `[firstToken, everythingElse]` — a full name into first name and the rest — collapsing repeated spaces. |
| `textSubtract` | `(text: string, subtractLength: number, startIndex?: number, removeExtraSpace?: boolean): string` | Deletes `subtractLength` characters (a **length**, not a substring) starting at `startIndex` (default `0`), and unless `removeExtraSpace` is `false` also swallows the orphaned space left on either side. |
| `toTitleCase` | `(text: string): string` | Lowercases the text, then uppercases the first letter of each space-separated word and collapses repeated spaces. |
| `truncate` | `(text: string, maxLength: number, suffix?: string): string` | Shortens `text` to at most `maxLength` characters including the `suffix` (default `'...'`), which is appended only when something was actually cut. |
| `trimAndLowercase` | `(text: string): string` | Trims and lowercases, coercing `null`/`undefined` to `''`. |
| `trimAndUppercase` | `(text: string): string` | Trims and uppercases, coercing `null`/`undefined` to `''`. |

### Numbers & money

| Function | Signature | Description |
| --- | --- | --- |
| `discountedPrice` | `(value: number, discountAmount?: number, discountPercent?: number): number` | Subtracts a flat `discountAmount` and `discountPercent` of the original `value`; both are computed against the pre-discount value rather than compounding, so `discountedPrice(2000, 200, 10)` is `1600`. |
| `clamp` | `(value: number, min: number, max: number): number` | Constrains `value` to the inclusive `min`–`max` range. |
| `formatMoney` | `(amount: number, currencySymbol?: string, minimumFractionDigits?: number, maximumFractionDigits?: number): string` | Prefixes `currencySymbol` (default `'₦'`) to a thousands-separated amount fixed at 2 decimal places by default; falsy or non-numeric amounts render as `0`. |
| `fromMinorUnits` | `(minorUnits: number): number` | Converts whole minor units back to major units — kobo to naira — rounded to 2 dp for display. |
| `percentageChange` | `(from: number, to: number): number` | Percentage change from `from` to `to` to 2 dp, negative when the value fell; `0` when `from` is `0`. |
| `roundOff2Dp` | `(number: number): number` | Rounds to 2 decimal places with a `Number.EPSILON` nudge so borderline binary floats round the way a ledger expects. |
| `toMinorUnits` | `(amount: number): number` | Converts a major-unit amount to whole minor units — naira to kobo — for the payment gateways that only accept integers. |

### Misc

| Function | Signature | Description |
| --- | --- | --- |
| `getPaginationParameters` | `(page: number, limit: number): { toSkip: number, limit: number }` | Turns a 1-based `page` and a `limit` into `{ toSkip, limit }` for a database query; any page below `2` skips nothing. |
| `isString` | `(x: unknown): boolean` | `true` for string primitives and boxed `String` objects, via `Object.prototype.toString`. |

### Caveats

A few behaviours are worth knowing before you reach for them.

- **`getDateTimeAgo` uses fixed 30- and 365-day months and years**, so long
  intervals drift by a few days.
- **`getAAnForWord` inspects spelling, not pronunciation.** `'hour'` yields `'a'`
  and `'university'` yields `'an'`.
- **`isString` returns `boolean`, not a `x is string` type guard**, so it won't
  narrow types in a conditional.
- **`formatMoney` formats with the runtime's default locale** (`toLocaleString`
  with `undefined` locale), so grouping and decimal separators follow the host,
  not the currency symbol you pass.
- **All date helpers work in local time**, including the start/end-of-day and
  first-day-of-period functions. Convert before comparing against UTC timestamps.

## Contributing

```sh
npm ci
npm test     # mocha, via ts-node, over tests/**/*.spec.ts
npm run build
```

Commits are linted by [commitlint](https://commitlint.js.org) with
`@commitlint/config-conventional`, wired to a husky `commit-msg` hook — so
`npm ci` (which runs `husky install`) is required before your first commit, and
messages must follow [Conventional Commits](https://www.conventionalcommits.org):

```
feat(dates): add getLastDayOfMonthDate
fix(strings): keep leading zero in normalizePhoneNumber
docs: document the GitHub Packages registry setup
```

The commit type drives the release: `fix` cuts a patch, `feat` a minor, and a
`BREAKING CHANGE:` footer a major. Versioning, the changelog, the GitHub release
and the publish to GitHub Packages are all handled by semantic-release from the
CI workflow — never bump `package.json` by hand.

New utilities follow the existing shape: one kebab-case file per function in
`src/`, a single default export, a matching `tests/<name>.spec.ts`, and a line
added to both the imports and the default export object in `src/index.ts`.

## Licence

ISC © Taiwo Sulaimon. See [LICENSE](./LICENSE).
