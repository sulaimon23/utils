"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Round off to absolute 2 dp, best results with javascript
 * Use case is in displaying financial amounts with exact fractional part
 */
exports.default = (number) => Math.round((number + Number.EPSILON) * 100) / 100;
