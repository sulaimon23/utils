/**
 * Converts a minor currency unit to its major unit, ie kobo to naira, rounded off to 2 dp
 */
export default (minorUnits: number): number => {
    const amount: number = minorUnits / 100;

    return Math.round((amount + Number.EPSILON) * 100) / 100;
}
