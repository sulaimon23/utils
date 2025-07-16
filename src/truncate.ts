/**
 * Shortens a text to maxLength characters, the suffix is counted in
 * so the returned text is never longer than maxLength
 */
export default (text: string, maxLength: number, suffix: string = '...'): string => {
    const value: string = String(text ?? '');

    if (value.length <= maxLength) {
        return value;
    }

    if (maxLength <= suffix.length) {
        return value.substring(0, maxLength);
    }

    return `${value.substring(0, maxLength - suffix.length)}${suffix}`;
}
