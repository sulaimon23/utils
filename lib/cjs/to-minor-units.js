"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts a major currency unit to its minor unit, ie naira to kobo
 * The epsilon nudge keeps floating point noise, eg 0.1 + 0.2, out of the integer result
 */
exports.default = (amount) => Math.round((amount + Number.EPSILON) * 100);
