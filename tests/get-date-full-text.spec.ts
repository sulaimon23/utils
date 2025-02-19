import 'mocha';
import { strict as assert } from 'node:assert';
import getDateFullText from '../src/get-date-full-text';

describe('Get date full text', () => {
    it('should return the date full text from a date object', () => {
        const expected = 'DECEMBER 18, 2022';
        const actual = getDateFullText(new Date(2022, 11, 18, 22, 47));
        assert.equal(actual, expected);
    });
});