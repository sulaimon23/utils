import 'mocha';
import { strict as assert } from 'node:assert';
import toMinorUnits from '../src/to-minor-units';

describe('To minor units', () => {
    it('should convert naira to kobo', () => {
        const expected = 100000;
        const actual = toMinorUnits(1000);

        assert.equal(actual, expected);
        assert.equal(toMinorUnits(19.99), 1999);
        assert.equal(toMinorUnits(0.01), 1);
    });

    it('should not leak floating point error', () => {
        const expected = 30;
        const actual = toMinorUnits(0.1 + 0.2);

        assert.equal(actual, expected);
        assert.equal(toMinorUnits(1.005), 101);
        assert.equal(toMinorUnits(8.115), 812);
    });

    it('should round off to the nearest minor unit', () => {
        const expected = 235;
        const actual = toMinorUnits(2.345);

        assert.equal(actual, expected);
    });

    it('should handle zero and a negative amount', () => {
        const expected = 0;
        const actual = toMinorUnits(0);

        assert.equal(actual, expected);
        assert.equal(toMinorUnits(-19.99), -1999);
    });
});
