"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (length = 5, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321') => {
    let str = '';
    for (let counter = 0, charsetLength = charset.length; counter < length; counter += 1) {
        str += charset.charAt(Math.floor(Math.random() * charsetLength));
    }
    return str;
};
