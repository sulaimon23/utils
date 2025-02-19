import 'mocha';
import { strict as assert } from 'node:assert';
import generateRandomString from '../src/generate-random-string';

describe('Generate random string', () => {
    it('should return a random string conforming fo the length and charset parameters', () => {
        const expected = /^[ABC123]{5}$/;
        const actual = generateRandomString(5, 'ABC123');

        assert.match(actual, expected);
    });
});