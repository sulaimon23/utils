"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (months, date = new Date()) => {
    const newDate = new Date(date);
    return new Date(newDate.setMonth(newDate.getMonth() + months));
};
