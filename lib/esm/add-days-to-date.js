/**
 * Add (or subtract) days from date
 */
export default (days, date = new Date()) => {
    const newDate = new Date(date);
    return new Date(newDate.setDate(newDate.getDate() + days));
};
