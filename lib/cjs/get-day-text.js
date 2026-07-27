"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (timestampOrdateOrDateString) => [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
][new Date(timestampOrdateOrDateString).getDay()];
