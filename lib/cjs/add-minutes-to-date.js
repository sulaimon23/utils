"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (minutes, date = new Date()) => {
    const newDate = new Date(date);
    return new Date(newDate.setMinutes(newDate.getMinutes() + minutes));
};
