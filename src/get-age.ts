/**
 * Gets an age in whole years, the current year only counts once the birthday has been reached
 */
export default (birthDate: Date | string | number, asOf: Date = new Date()): number => {
    const birth: Date = new Date(birthDate);
    const reference: Date = new Date(asOf);
    const monthDiff: number = reference.getMonth() - birth.getMonth();
    const age: number = reference.getFullYear() - birth.getFullYear();

    if (monthDiff < 0 || (monthDiff === 0 && reference.getDate() < birth.getDate())) {
        return age - 1;
    }

    return age;
}
