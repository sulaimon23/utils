/**
 * Gets an age in whole years, the current year only counts once the birthday has been reached
 */
export default (birthDate, asOf = new Date()) => {
    const birth = new Date(birthDate);
    const reference = new Date(asOf);
    const monthDiff = reference.getMonth() - birth.getMonth();
    const age = reference.getFullYear() - birth.getFullYear();
    if (monthDiff < 0 || (monthDiff === 0 && reference.getDate() < birth.getDate())) {
        return age - 1;
    }
    return age;
};
