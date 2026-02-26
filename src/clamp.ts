/**
 * Keeps a number within an inclusive range
 */
export default (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max);
