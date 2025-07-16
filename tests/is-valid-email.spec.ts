import 'mocha';
import { strict as assert } from 'node:assert';
import isValidEmail from '../src/is-valid-email';

describe('Is valid email', () => {
    it('should return true for a well formed email address', () => {
        const actual = isValidEmail('taiwo@example.com');

        assert.equal(actual, true);
        assert.equal(isValidEmail('taiwo.sulaimon@mail.co.uk'), true);
        assert.equal(isValidEmail('taiwo+invoices@example.com'), true);
    });

    it('should ignore surrounding whitespace', () => {
        const actual = isValidEmail('  taiwo@example.com  ');

        assert.equal(actual, true);
    });

    it('should return false without a single at sign and a domain dot', () => {
        const actual = isValidEmail('taiwo@example');

        assert.equal(actual, false);
        assert.equal(isValidEmail('taiwo.example.com'), false);
        assert.equal(isValidEmail('taiwo@@example.com'), false);
        assert.equal(isValidEmail('@example.com'), false);
    });

    it('should return false for empty domain labels and inner whitespace', () => {
        const actual = isValidEmail('taiwo@.com');

        assert.equal(actual, false);
        assert.equal(isValidEmail('taiwo@example..com'), false);
        assert.equal(isValidEmail('taiwo@example.com.'), false);
        assert.equal(isValidEmail('taiwo sulaimon@example.com'), false);
        assert.equal(isValidEmail(''), false);
    });
});
