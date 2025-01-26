function isLeapYear(year) {
    let div_by_4 =  year % 4 === 0;
    let div_by_100 = year % 100 === 0;
    let div_by_400 = year % 400 === 0;

    if (div_by_4) {
        if (!div_by_100) {return true;} // Not Divisible by 100
        else if (div_by_400) {return true;} // Divisible by 400
        return false; // Only divisible by 4 and 100
    }
    return false; // Not Divisible by 4
}

function checkYear() {
    // Function to handle the html processing
    const yearInput = document.getElementById('year').value;
    const year = parseInt(yearInput, 10);

    if (isNaN(year)) {
        document.getElementById('output').textContent = 'Please enter a valid year.';
        return;
    }

    document.getElementById('output').textContent = isLeapYear(year)
        ? `Year ${year} is a leap year.`
        : `Year ${year} is not a leap year.`;
}
