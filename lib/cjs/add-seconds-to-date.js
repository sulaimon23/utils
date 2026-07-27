"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (seconds, date = new Date()) => {
    const newDate = new Date(date);
    return new Date(newDate.setSeconds(newDate.getSeconds() + seconds));
};
