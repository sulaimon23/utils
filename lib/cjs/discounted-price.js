"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (value, discountAmount = 0, discountPercent = 0) => value - discountAmount - (value * (discountPercent / 100));
