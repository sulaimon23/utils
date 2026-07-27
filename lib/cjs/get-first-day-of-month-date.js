"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (date = new Date()) => {
    return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
};
