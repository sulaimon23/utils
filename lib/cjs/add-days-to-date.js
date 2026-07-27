"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Add (or subtract) days from date
 */
exports.default = (days, date = new Date()) => {
    const newDate = new Date(date);
    return new Date(newDate.setDate(newDate.getDate() + days));
};
