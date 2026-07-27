"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (hours, date = new Date()) => {
    const newDate = new Date(date);
    return new Date(newDate.setHours(newDate.getHours() + hours));
};
