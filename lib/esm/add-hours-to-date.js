export default (hours, date = new Date()) => {
    const newDate = new Date(date);
    return new Date(newDate.setHours(newDate.getHours() + hours));
};
