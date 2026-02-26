import 'mocha';
import { strict as assert } from 'node:assert';
import clamp from '../src/clamp';

describe('Clamp', () => {
    it('should leave a value within the range unchanged', () => {
        const expected = 5;
        const actual = clamp(5, 0, 10);

        assert.equal(actual, expected);
    });

    it('should return the min for a value below the range', () => {
        const expected = 0;
        const actual = clamp(-5, 0, 10);

        assert.equal(actual, expected);
    });

    it('should return the max for a value above the range', () => {
        const expected = 10;
        const actual = clamp(15, 0, 10);

        assert.equal(actual, expected);
    });

    it('should treat the bounds as inclusive and support a negative range', () => {
        assert.equal(clamp(0, 0, 10), 0);
        assert.equal(clamp(10, 0, 10), 10);
        assert.equal(clamp(-5, -10, -1), -5);
        assert.equal(clamp(-20, -10, -1), -10);
        assert.equal(clamp(0, -10, -1), -1);
    });
});
