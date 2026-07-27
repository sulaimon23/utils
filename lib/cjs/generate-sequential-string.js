"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This method helps to generate serial strings from a base 10 number (serial number)
 * e.g 1 - 22222, 2 - 22223, 2 - 22224 ..., using the charset provided
 * This is useful when you want constant lenght, serial string sequences for IDs without collisions
 *
 * @param serialNumber The running serial number
 * @param outputLength The length of generated string sequence
 * @param charset The character set used to generate the string sequence
 */
exports.default = (serialNumber, outputLength = 32, charset = '2346789ABCDEFHKLMNPQRTVWXY') => {
    const charsetLength = charset.length;
    const output = [];
    for (let outputPosition = 1, runningRemindand = serialNumber, outputPositionWeight; outputPosition <= outputLength; outputPosition += 1) {
        outputPositionWeight = runningRemindand % charsetLength;
        runningRemindand = Math.floor(runningRemindand / charsetLength);
        output.unshift(charset.charAt(outputPositionWeight));
    }
    return output.join('');
};
