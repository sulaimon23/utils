import 'mocha';
import { strict as assert } from 'node:assert';
import getOrdinalSuffix from '../src/get-ordinal-suffix';

describe('Get ordinal suffix', () => {
    it('should return the number with its ordinal suffix', () => {
        const expected = '1st';
        const actual = getOrdinalSuffix(1);

        assert.equal(actual, expected);
        assert.equal(getOrdinalSuffix(2), '2nd');
        assert.equal(getOrdinalSuffix(3), '3rd');
        assert.equal(getOrdinalSuffix(4), '4th');
    });

    it('should use th for 11, 12 and 13', () => {
        assert.equal(getOrdinalSuffix(11), '11th');
        assert.equal(getOrdinalSuffix(12), '12th');
        assert.equal(getOrdinalSuffix(13), '13th');
        assert.equal(getOrdinalSuffix(111), '111th');
        assert.equal(getOrdinalSuffix(112), '112th');
        assert.equal(getOrdinalSuffix(113), '113th');
    });

    it('should use the last digit once past the teens', () => {
        assert.equal(getOrdinalSuffix(21), '21st');
        assert.equal(getOrdinalSuffix(22), '22nd');
        assert.equal(getOrdinalSuffix(23), '23rd');
        assert.equal(getOrdinalSuffix(101), '101st');
        assert.equal(getOrdinalSuffix(102), '102nd');
        assert.equal(getOrdinalSuffix(103), '103rd');
    });

    it('should use th for zero and the round tens', () => {
        const expected = '0th';
        const actual = getOrdinalSuffix(0);

        assert.equal(actual, expected);
        assert.equal(getOrdinalSuffix(10), '10th');
        assert.equal(getOrdinalSuffix(20), '20th');
        assert.equal(getOrdinalSuffix(100), '100th');
    });
});
