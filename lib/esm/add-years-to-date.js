export default (years, date = new Date()) => {
    const newDate = new Date(date);
    return new Date(newDate.setFullYear(newDate.getFullYear() + years));
};
