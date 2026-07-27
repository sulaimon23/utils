// The package itself is CommonJS, so Node would treat lib/esm/*.js as CommonJS
// too and choke on the import syntax. A package.json in each output directory
// pins the module system for everything beneath it.
import { writeFileSync } from 'node:fs';

writeFileSync('lib/esm/package.json', `${JSON.stringify({ type: 'module' }, null, 2)}\n`);
writeFileSync('lib/cjs/package.json', `${JSON.stringify({ type: 'commonjs' }, null, 2)}\n`);
