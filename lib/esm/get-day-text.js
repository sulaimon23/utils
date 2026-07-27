export default (timestampOrdateOrDateString) => [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
][new Date(timestampOrdateOrDateString).getDay()];
