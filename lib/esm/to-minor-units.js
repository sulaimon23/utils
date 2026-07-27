/**
 * Converts a major currency unit to its minor unit, ie naira to kobo
 * The epsilon nudge keeps floating point noise, eg 0.1 + 0.2, out of the integer result
 */
export default (amount) => Math.round((amount + Number.EPSILON) * 100);
