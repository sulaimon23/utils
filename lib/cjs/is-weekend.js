"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if a date falls on a saturday or a sunday
 */
exports.default = (date = new Date()) => {
    const dayOfWeek = new Date(date).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
};
