import 'mocha';
import { strict as assert } from 'node:assert';
import truncate from '../src/truncate';

describe('Truncate', () => {
    it('should leave a text that is within the max length unchanged', () => {
        const expected = 'zenith';
        const actual = truncate('zenith', 10);

        assert.equal(actual, expected);
        assert.equal(truncate('zenith', 6), 'zenith');
    });

    it('should count the suffix towards the max length', () => {
        const expected = 'zenith wo...';
        const actual = truncate('zenith wogwugwu', 12);

        assert.equal(actual, expected);
        assert.equal(actual.length, 12);
    });

    it('should append a custom suffix', () => {
        const expected = 'zenith wo…';
        const actual = truncate('zenith wogwugwu', 10, '…');

        assert.equal(actual, expected);
        assert.equal(actual.length, 10);
    });

    it('should drop the suffix when there is no room for it', () => {
        const expected = 'ze';
        const actual = truncate('zenith wogwugwu', 2);

        assert.equal(actual, expected);
        assert.equal(truncate('zenith wogwugwu', 3), 'zen');
        assert.equal(truncate('zenith', 0), '');
    });
});
