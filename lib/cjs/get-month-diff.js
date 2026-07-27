"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get difference in months between two dates
 */
exports.default = (dateFrom, dateTo) => dateTo.getMonth()
    - dateFrom.getMonth()
    + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
