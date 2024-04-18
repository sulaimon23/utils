import 'mocha';
import { assert } from 'chai';

import npmPackage, { capitalize, formatMoney } from '../src/index';

describe('NPM Package', () => {
    it('should be an object', () => {
        assert.isObject(npmPackage);
    });

    it('should expose every utility as a named export', () => {
        assert.isFunction(capitalize);
        assert.isFunction(formatMoney);
    });

    it('should expose the same functions on the default export', () => {
        assert.equal(npmPackage.capitalize, capitalize);
        assert.equal(npmPackage.formatMoney, formatMoney);
    });
});
