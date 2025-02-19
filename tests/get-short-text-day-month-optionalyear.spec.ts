import 'mocha';
import { strict as assert } from 'node:assert';
import getShortTextDayMonthOptionalyear from '../src/get-short-text-day-month-optionalyear';

describe('Get short text day month optionalyear', () => {
    it('should return the short text without the year for a date in the current year', () => {
        const currentYear = new Date().getFullYear();
        const expected = '17 Dec';
        const actual = getShortTextDayMonthOptionalyear(new Date(currentYear, 11, 17, 22, 47));
        assert.equal(actual, expected);
    });

    it('should return the short text with the year for a date in a different year', () => {
        const previousYear = new Date().getFullYear() - 1;
        const expected = `17 Dec ${previousYear}`;
        const actual = getShortTextDayMonthOptionalyear(new Date(previousYear, 11, 17, 22, 47));
        assert.equal(actual, expected);
    });
});
