"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Note: Uses Sunday as the first day of the week
 */
exports.default = (date = new Date()) => {
    const today = new Date(new Date(date).setHours(0, 0, 0, 0)); // get current date
    const first = today.getDate() - today.getDay(); // First day is the day of the month - the day of the week
    return new Date(today.setDate(first));
};
