// Custom error classes
class MissingArgumentError extends Error {
    constructor() {
        super("Missing argument year error");
        this.name = "MissingArgumentError";
    }
}

class NonIntegerArgumentError extends Error {
    constructor() {
        super("Non-integer argument year error");
        this.name = "NonIntegerArgumentError";
    }
}


function isLeapYear(year) {
    if (year === undefined) {
        throw new MissingArgumentError();
    }
    if (!Number.isInteger(year)) {
        throw new NonIntegerArgumentError();
    }

    let div_by_4 = year % 4 === 0;
    let div_by_100 = year % 100 === 0;
    let div_by_400 = year % 400 === 0;

    if (div_by_4) {
        if (!div_by_100) {
            return true; // Not Divisible by 100
        } else if (div_by_400) {
            return true; // Divisible by 400
        }
        return false; // Divisible by 4 and 100
    }
    return false; // Not Divisible by 4
}

// Testing
try {
    console.log(isLeapYear("1"));
} catch (error) {
    console.error(error.message);
}