export default (seconds, date = new Date()) => {
    const newDate = new Date(date);
    return new Date(newDate.setSeconds(newDate.getSeconds() + seconds));
};
