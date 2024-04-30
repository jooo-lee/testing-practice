const caesarCipher = (string, shiftFactor) => {
    let outputString = '';
    for (let i = 0; i < string.length; i++) {
        const charCode = string.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            // Handle lowercase letters
            outputString += String.fromCharCode(
                ((charCode - 97 + shiftFactor) % 26) + 97
            );
        } else if (charCode >= 65 && charCode <= 90) {
            // Handle uppercase letters
            outputString += String.fromCharCode(
                ((charCode - 65 + shiftFactor) % 26) + 65
            );
        } else {
            // Handle non-alphabetical characters
            outputString += string[i];
        }
    }
    return outputString;
};

export default caesarCipher;
