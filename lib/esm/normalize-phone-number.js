export default (phoneNumber, countryCode = '234') => {
    const phone = String(phoneNumber).trim() /*.replace(/\D/g, '')*/;
    if (phone.charAt(0) === '+') {
        return phone;
    }
    else if (phone.charAt(0) === '(') {
        return `+${countryCode} ${phone}`;
    }
    else if (phone.length < 12) {
        return `+${countryCode}${phone.substring(1)}`;
    }
    return `+${phone}`;
};
