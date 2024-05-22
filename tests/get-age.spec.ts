import 'mocha';
import { assert } from 'chai';
import getAge from '../src/get-age';

describe('Get age', () => {
    it('should return the age in whole years', () => {
        const expected = 33;
        const actual = getAge(new Date(1990, 4, 15), new Date(2023, 4, 16));

        assert.equal(actual, expected);
        assert.equal(getAge(new Date(1990, 4, 15), new Date(2023, 11, 1)), 33);
    });

    it('should count the current year on the birthday itself', () => {
        const expected = 33;
        const actual = getAge(new Date(1990, 4, 15), new Date(2023, 4, 15));

        assert.equal(actual, expected);
    });

    it('should not count the current year before the birthday', () => {
        const expected = 32;
        const actual = getAge(new Date(1990, 4, 15), new Date(2023, 4, 14));

        assert.equal(actual, expected);
        assert.equal(getAge(new Date(1990, 4, 15), new Date(2023, 3, 30)), 32);
    });

    it('should accept a date string and a timestamp', () => {
        const expected = 28;
        const actual = getAge('1995-08-20', new Date(2023, 11, 25));

        assert.equal(actual, expected);
        assert.equal(getAge(new Date(1990, 4, 15).getTime(), new Date(2023, 4, 15)), 33);
    });
});
