import 'mocha';
import { strict as assert } from 'node:assert';
import getFormattedTimeString from '../src/get-formatted-time-string';

describe('Get formatted time string', () => {
    it('should return a formatted time from a date object', () => {
        const expected = '10:47 PM';
        const actual = getFormattedTimeString(new Date(2022, 3, 12, 22, 47));
        assert.equal(actual, expected);
    });
});