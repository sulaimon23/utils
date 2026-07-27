/**
 * Keeps a number within an inclusive range
 */
export default (value, min, max) => Math.min(Math.max(value, min), max);
