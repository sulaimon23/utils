/**
 * Get difference in months between two dates
 */
export default (dateFrom, dateTo) => dateTo.getMonth()
    - dateFrom.getMonth()
    + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
