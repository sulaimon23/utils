/**
 * This function helps in pagination queries, calculates the number of records to skip
 */
export default (page, limit) => ({
    limit,
    toSkip: limit * (page > 1 ? page - 1 : 0),
});
