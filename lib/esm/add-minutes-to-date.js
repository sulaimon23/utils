export default (minutes, date = new Date()) => {
    const newDate = new Date(date);
    return new Date(newDate.setMinutes(newDate.getMinutes() + minutes));
};
