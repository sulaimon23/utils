"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Percentage change from one value to another, rounded off to 2 dp
 * The initial value is taken as an absolute so a move away from zero always reads as a gain
 * Returns 0 when the initial value is 0, there is nothing to compare against
 */
exports.default = (from, to) => {
    if (from === 0) {
        return 0;
    }
    const change = ((to - from) / Math.abs(from)) * 100;
    return Math.round((change + Number.EPSILON) * 100) / 100;
};
