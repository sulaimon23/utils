import 'mocha';
import { strict as assert } from 'node:assert';
import fromMinorUnits from '../src/from-minor-units';

describe('From minor units', () => {
    it('should convert kobo to naira', () => {
        const expected = 1000;
        const actual = fromMinorUnits(100000);

        assert.equal(actual, expected);
        assert.equal(fromMinorUnits(1999), 19.99);
        assert.equal(fromMinorUnits(12345), 123.45);
    });

    it('should keep a single kobo', () => {
        const expected = 0.01;
        const actual = fromMinorUnits(1);

        assert.equal(actual, expected);
    });

    it('should round a fractional minor unit off to 2 dp', () => {
        const expected = 1.51;
        const actual = fromMinorUnits(150.5);

        assert.equal(actual, expected);
    });

    it('should handle zero and a negative amount', () => {
        const expected = 0;
        const actual = fromMinorUnits(0);

        assert.equal(actual, expected);
        assert.equal(fromMinorUnits(-1999), -19.99);
    });
});
