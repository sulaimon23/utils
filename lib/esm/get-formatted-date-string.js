export default (timestampOrdateOrDateString) => {
    const date = new Date(timestampOrdateOrDateString);
    const mnth = date.getMonth() + 1;
    const dy = date.getDate();
    return String(dy).padStart(2, '0') + '/' + String(mnth).padStart(2, '0') + '/' + date.getFullYear();
};
