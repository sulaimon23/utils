"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shortens a text to maxLength characters, the suffix is counted in
 * so the returned text is never longer than maxLength
 */
exports.default = (text, maxLength, suffix = '...') => {
    const value = String(text ?? '');
    if (value.length <= maxLength) {
        return value;
    }
    if (maxLength <= suffix.length) {
        return value.substring(0, maxLength);
    }
    return `${value.substring(0, maxLength - suffix.length)}${suffix}`;
};
