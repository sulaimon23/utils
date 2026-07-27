"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts a minor currency unit to its major unit, ie kobo to naira, rounded off to 2 dp
 */
exports.default = (minorUnits) => {
    const amount = minorUnits / 100;
    return Math.round((amount + Number.EPSILON) * 100) / 100;
};
