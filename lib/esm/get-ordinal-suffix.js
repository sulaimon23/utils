/**
 * Appends the english ordinal suffix to a number, eg 1 => 1st, 2 => 2nd, 3 => 3rd, 4 => 4th
 * Note: 11, 12 and 13 are the exception to the last digit rule, they all take "th"
 * Use case is in displaying positions, ranks and days of the month
 */
export default (value) => {
    const wholeNumber = Math.trunc(value);
    const lastTwoDigits = Math.abs(wholeNumber) % 100;
    const lastDigit = lastTwoDigits % 10;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return `${wholeNumber}th`;
    }
    switch (lastDigit) {
        case 1:
            return `${wholeNumber}st`;
        case 2:
            return `${wholeNumber}nd`;
        case 3:
            return `${wholeNumber}rd`;
        default:
            return `${wholeNumber}th`;
    }
};
