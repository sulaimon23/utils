export default (date = new Date()) => {
    const quarter = Math.floor((date.getMonth() + 3) / 3);
    return new Date(date.getFullYear(), (quarter - 1) * 3, 1, 0, 0, 0, 0);
};
