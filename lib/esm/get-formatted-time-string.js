export default (dateOrDateString) => {
    const date = new Date(dateOrDateString);
    let hr = date.getHours();
    const meridian = (hr < 12 ? (hr || (hr = 12)) && 'AM' : ((hr === 12) || (hr -= 12)) && 'PM');
    const min = date.getMinutes();
    return `${hr}:${String(min).padStart(2, '0')} ${meridian}`;
};
