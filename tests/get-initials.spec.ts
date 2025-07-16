import 'mocha';
import { strict as assert } from 'node:assert';
import getInitials from '../src/get-initials';

describe('Get initials', () => {
    it('should return the uppercased initials of a name', () => {
        const expected = 'TS';
        const actual = getInitials('taiwo sulaimon');

        assert.equal(actual, expected);
    });

    it('should ignore excess whitespace', () => {
        const expected = 'TS';
        const actual = getInitials('   taiwo    sulaimon  ');

        assert.equal(actual, expected);
    });

    it('should cap the initials at max characters', () => {
        const expected = 'TO';
        const actual = getInitials('taiwo olamide sulaimon');

        assert.equal(actual, expected);
        assert.equal(getInitials('taiwo olamide sulaimon', 3), 'TOS');
    });

    it('should handle a single name and an empty name', () => {
        const expected = 'Z';
        const actual = getInitials('zenith');

        assert.equal(actual, expected);
        assert.equal(getInitials(''), '');
        assert.equal(getInitials('   '), '');
    });
});
