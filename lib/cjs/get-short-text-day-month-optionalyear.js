"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (timestampOrdateOrDateString) => {
    const date = new Date(timestampOrdateOrDateString);
    const dy = date.getDate();
    const mnth = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ][date.getMonth()];
    return `${dy} ${mnth}${date.getFullYear() !== new Date().getFullYear() ? ' ' + date.getFullYear() : ''}`;
};
