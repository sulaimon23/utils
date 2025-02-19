import 'mocha';
import { strict as assert } from 'node:assert';

import splitCompoundString from '../src/split-compound-string';

describe('Split compound string', () => {
    it('should return the first word and the remaining words', () => {
        const expected = ['zenith', 'wogwugwu ugochukwu'];
        const actual = splitCompoundString('zenith wogwugwu ugochukwu');
        assert.deepEqual([...actual].sort(), [...expected].sort());
    });

    it('should remove excess spacing', () => {
        const expected = ['zenith', 'wogwugwu ugochukwu'];
        const actual = splitCompoundString(' zenith   wogwugwu  ugochukwu ');
        assert.deepEqual([...actual].sort(), [...expected].sort());
    });
});