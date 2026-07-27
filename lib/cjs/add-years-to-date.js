"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (years, date = new Date()) => {
    const newDate = new Date(date);
    return new Date(newDate.setFullYear(newDate.getFullYear() + years));
};
