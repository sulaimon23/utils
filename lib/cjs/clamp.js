"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Keeps a number within an inclusive range
 */
exports.default = (value, min, max) => Math.min(Math.max(value, min), max);
