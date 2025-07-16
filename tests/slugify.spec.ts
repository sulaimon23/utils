import 'mocha';
import { strict as assert } from 'node:assert';
import slugify from '../src/slugify';

describe('Slugify', () => {
    it('should lowercase the text and collapse every gap into a single dash', () => {
        const expected = 'zenith-wogwugwu-360';
        const actual = slugify('Zenith  Wogwugwu -- 360');

        assert.equal(actual, expected);
    });

    it('should strip diacritics and punctuation', () => {
        const expected = 'hello-world';
        const actual = slugify('  Héllo, Wörld! ');

        assert.equal(actual, expected);
        assert.equal(slugify('Naïve Café'), 'naive-cafe');
    });

    it('should not leave a leading or trailing dash', () => {
        const expected = 'naive-cafe';
        const actual = slugify('---Naïve Café---');

        assert.equal(actual, expected);
        assert.equal(slugify('₦500 Naira'), '500-naira');
    });

    it('should return an empty string when there is nothing to slugify', () => {
        const expected = '';
        const actual = slugify('');

        assert.equal(actual, expected);
        assert.equal(slugify('!!!'), '');
    });
});
