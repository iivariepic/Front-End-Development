function isLeapYear(year) {
    if (year === undefined) {
        throw new Error("Missing argument year error");
    }
    if (!Number.isInteger(year)) {
        throw new Error("Non-integer argument year error");
    }

    let div_by_4 =  year % 4 === 0;
    let div_by_100 = year % 100 === 0;
    let div_by_400 = year % 400 === 0;

    if (div_by_4) {
        if (!div_by_100) {return true;} // Not Divisible by 100

        else if (div_by_400) {return true;} // Divisible by 400

        return false; // Divisible by 4 and 100 only
    }
    return false; // Not Divisible by 4
}


function handleLeapYearErrors(year) {
    try {
        console.log(isLeapYear(year));
    } catch (error) {
        console.error(`Error Caught: ${error.message}`);
    }
}

// Test Cases
handleLeapYearErrors(2024);
handleLeapYearErrors("2024");
handleLeapYearErrors();