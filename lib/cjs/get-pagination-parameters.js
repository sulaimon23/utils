"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This function helps in pagination queries, calculates the number of records to skip
 */
exports.default = (page, limit) => ({
    limit,
    toSkip: limit * (page > 1 ? page - 1 : 0),
});
