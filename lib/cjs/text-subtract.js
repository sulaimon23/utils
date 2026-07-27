"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Removes a substring from any position in a string, and assembles the rest of the remainder correctly
 */
exports.default = (text, 
/*subText: string*/ subtractLength, startIndex = 0, removeExtraSpace = true) => {
    const stringArray = text.split('');
    let deleteCount = /*subText.length*/ subtractLength;
    if (removeExtraSpace) {
        if (stringArray[startIndex + deleteCount] === ' ') {
            deleteCount += 1;
        }
        else if (stringArray[startIndex - 1] === ' ') {
            startIndex -= 1;
            deleteCount += 1;
        }
    }
    // substract from the string, also remove the extra space
    stringArray.splice(startIndex, deleteCount);
    return stringArray.join('');
};
