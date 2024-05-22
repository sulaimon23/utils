import 'mocha';
import { assert } from 'chai';
import getLastDayOfMonthDate from '../src/get-last-day-of-month-date';

describe('Get last day of month date', () => {
    it('should return the last day of month from a date object', () => {
        const expected = new Date(2022, 11, 31, 23, 59, 59, 999);
        const actual = getLastDayOfMonthDate(new Date(2022, 11, 17, 22, 47));

        assert.equal(actual.toISOString(), expected.toISOString());
    });

    it('should return the last day of a 30 day month', () => {
        const expected = new Date(2023, 3, 30, 23, 59, 59, 999);
        const actual = getLastDayOfMonthDate(new Date(2023, 3, 1));

        assert.equal(actual.toISOString(), expected.toISOString());
    });

    it('should account for february in and out of a leap year', () => {
        const leapYear = getLastDayOfMonthDate(new Date(2024, 1, 5));
        const nonLeapYear = getLastDayOfMonthDate(new Date(2023, 1, 5));

        assert.equal(leapYear.toISOString(), new Date(2024, 1, 29, 23, 59, 59, 999).toISOString());
        assert.equal(nonLeapYear.toISOString(), new Date(2023, 1, 28, 23, 59, 59, 999).toISOString());
    });

    it('should default to the current month at the end of the day', () => {
        const expected = new Date().getMonth();
        const actual = getLastDayOfMonthDate();

        assert.equal(actual.getMonth(), expected);
        assert.equal(actual.getHours(), 23);
        assert.equal(actual.getMinutes(), 59);
        assert.equal(actual.getSeconds(), 59);
        assert.equal(actual.getMilliseconds(), 999);
    });
});
