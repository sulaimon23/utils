import 'mocha';
import { strict as assert } from 'node:assert';
import percentageChange from '../src/percentage-change';

describe('Percentage change', () => {
    it('should return a positive percentage for an increase', () => {
        const expected = 25;
        const actual = percentageChange(200, 250);

        assert.equal(actual, expected);
        assert.equal(percentageChange(-100, -50), 50);
    });

    it('should return a negative percentage for a decrease', () => {
        const expected = -10;
        const actual = percentageChange(2000, 1800);

        assert.equal(actual, expected);
        assert.equal(percentageChange(250, 200), -20);
        assert.equal(percentageChange(500, 0), -100);
    });

    it('should round off to 2 dp', () => {
        const expected = 33.33;
        const actual = percentageChange(3, 4);

        assert.equal(actual, expected);
        assert.equal(percentageChange(3, 2), -33.33);
    });

    it('should return zero when the initial value is zero or unchanged', () => {
        const expected = 0;
        const actual = percentageChange(0, 100);

        assert.equal(actual, expected);
        assert.equal(percentageChange(0, 0), 0);
        assert.equal(percentageChange(100, 100), 0);
    });
});
