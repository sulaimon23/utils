import 'mocha';
import { strict as assert } from 'node:assert';

import npmPackage, { capitalize, formatMoney } from '../src/index';

describe('NPM Package', () => {
    it('should be an object', () => {
        assert.equal(typeof npmPackage, 'object');
    });

    it('should expose every utility as a named export', () => {
        assert.equal(typeof capitalize, 'function');
        assert.equal(typeof formatMoney, 'function');
    });

    it('should expose the same functions on the default export', () => {
        assert.equal(npmPackage.capitalize, capitalize);
        assert.equal(npmPackage.formatMoney, formatMoney);
    });
});
