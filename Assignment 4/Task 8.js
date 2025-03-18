// Custom error classes
class InvalidLetters extends Error {
    constructor() {
        super("Invalid letters error");
        this.name = "InvalidLetters";
    }
}

class InvalidDigits extends Error {
    constructor() {
        super("Invalid digits error");
        this.name = "InvalidDigits";
    }
}

function buildRegisterNumber (theLetters, theDigits) {
    const lettersRegex = /^[A-VX-Z]{2,3}$/;
    const digitsRegex = /^[1-9][0-9]{0,2}$/;

    if (!lettersRegex.test(theLetters)) {
        throw new InvalidLetters();
    }

    if (!digitsRegex.test(theDigits)) {
        throw new InvalidDigits();
    }

    return `${theLetters}-${theDigits}`;
}

try {
    console.log(buildRegisterNumber("AX", "12"));
    console.log(buildRegisterNumber("UUI", "6"));
    console.log(buildRegisterNumber("GFS", "200"));
    console.log(buildRegisterNumber("X", "100"));
} catch (error) {
    console.error(error.message);
}

try {
    console.log(buildRegisterNumber("YUT", "020"));
} catch (error) {
    console.error(error.message);
}

try {
    console.log(buildRegisterNumber("WWW", "100"));
} catch (error) {
    console.error(error.message);
}
