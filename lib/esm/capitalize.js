export default (text) => {
    const trimmedString = String(text ?? '').trim();
    return `${trimmedString.charAt(0).toUpperCase()}${trimmedString.substring(1).toLowerCase()}`;
};
