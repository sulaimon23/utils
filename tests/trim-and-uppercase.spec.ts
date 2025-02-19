import 'mocha';
import { strict as assert } from 'node:assert';

import trimAndUpperCase from '../src/trim-and-uppercase';

describe('Trim and uppercase', () => {
    it('should return a trimmed string', () => {
        const expected = 'HELLO';
        const actual = trimAndUpperCase(' hello ');
        assert.equal(actual, expected);
    });

    it('should returned an uppercased string', () => {
        const expected = 'HELLO';
        const actual = trimAndUpperCase('hello');
        assert.equal(actual, expected);
    });
});