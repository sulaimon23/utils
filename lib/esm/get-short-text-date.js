export default (timestampOrdateOrDateString) => {
    const date = new Date(timestampOrdateOrDateString);
    const dy = date.getDate();
    const mnth = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
    ][date.getMonth()];
    return `${dy} ${mnth} ${date.getFullYear()}`;
};
