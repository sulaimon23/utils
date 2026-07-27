"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// default time units for getDateDiff
/*export*/ const DATE_DIFF_DEF = Object.freeze({
    millennium: 31536000000000,
    century: 3153600000000,
    decade: 315360000000,
    year: 31536000000,
    // quarter:	7776000000,
    month: 2592000000,
    week: 604800000,
    day: 86400000,
    hour: 3600000,
    minute: 60000,
    // second:		1000,
    // millisecond:1
});
/*export*/ const DATE_DIFF_KEYS = Object.freeze(Object.keys(DATE_DIFF_DEF));
/* export */ const SHORTEN_DATE_DIFF_KEYS = {
    millennium: 'm',
    century: 'c',
    decade: 'dc',
    year: 'yr',
    quarter: 'qt',
    month: 'mnth',
    week: 'wk',
    day: 'dy',
    hour: 'hr',
    minute: 'min',
    second: 'sec',
    millisecond: 'msec',
};
/**
 * ☃ getDateDiff "Snowman Carl" (http://stackoverflow.com/questions/13903897)
 * Returns a detail object about the difference between two dates
 *
 * When providing custom units, provide them in descending order (eg week,day,hour; not hour,day,week)
 *
 * @param {Date} dateStart - date to compare to
 * @param {Date} [dateEnd=new Date()] - second date to compare against
 * @returns {DateDifference}
 */
function getDateDiff(dateStart, dateEnd = new Date()) {
    let delta = Math.abs(dateStart.getTime() - dateEnd.getTime());
    return DATE_DIFF_KEYS
        .reduce((res, key) => {
        res[key] = Math.floor(delta / DATE_DIFF_DEF[key]);
        delta -= res[key] * DATE_DIFF_DEF[key];
        return res;
    }, {});
}
function isValidDate(date) {
    return !isNaN(new Date(date).getTime());
}
function getSecondsInTimestamp(dateStart, dateEnd) {
    const secsInMsecs = Math.floor(Math.abs(new Date(dateStart).getTime() - new Date(dateEnd).getTime()) / 1000);
    return secsInMsecs ? secsInMsecs + ' sec' + (secsInMsecs > 1 ? 's' : '') : 'Instant';
}
exports.default = (dateStart, dateEnd = new Date()) => {
    if (!isValidDate(dateStart) || !isValidDate(dateEnd)) {
        return '';
    }
    const dateDifference = getDateDiff(new Date(dateStart), new Date(dateEnd));
    const dateDiffResult = Object.keys(dateDifference).filter((part) => !!dateDifference[part]).map((part) => {
        const dateDiffValue = dateDifference[part];
        return `${dateDiffValue} ${SHORTEN_DATE_DIFF_KEYS[part]}${dateDiffValue > 1 ? 's' : ''}`;
    }).join(' ');
    return dateDiffResult ? dateDiffResult : getSecondsInTimestamp(dateStart, dateEnd);
};
