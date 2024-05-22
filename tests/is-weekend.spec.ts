import 'mocha';
import { assert } from 'chai';
import isWeekend from '../src/is-weekend';

describe('Is weekend', () => {
    it('should return true for a saturday', () => {
        const actual = isWeekend(new Date(2022, 11, 17));

        assert.isTrue(actual);
    });

    it('should return true for a sunday', () => {
        const actual = isWeekend(new Date(2022, 11, 18));

        assert.isTrue(actual);
    });

    it('should return false for a weekday', () => {
        const actual = isWeekend(new Date(2022, 11, 19));

        assert.isFalse(actual);
        assert.isFalse(isWeekend(new Date(2022, 11, 14)));
        assert.isFalse(isWeekend(new Date(2022, 11, 16)));
    });

    it('should default to the current date', () => {
        const expected = [0, 6].includes(new Date().getDay());
        const actual = isWeekend();

        assert.equal(actual, expected);
    });
});
