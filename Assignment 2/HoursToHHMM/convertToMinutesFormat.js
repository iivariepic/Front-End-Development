const convertToMinutesFormat = (hoursInHundredths) => {
    let whole_hours = Math.floor((hoursInHundredths));
    let whole_minutes = (hoursInHundredths - whole_hours) * 60;
    if (whole_hours === 24) {
        whole_hours = 0;
    }
    whole_minutes = Math.floor(whole_minutes);


    let str_whole_hours = whole_hours.toString().padStart(2, '0');
    let str_whole_minutes = whole_minutes.toString().padStart(2, '0');

    return `${str_whole_hours}:${str_whole_minutes}`;
}

const getDecimalAmount = (decimal_number) => {
    let number_as_str = decimal_number.toString();
    let numbers = number_as_str.split(".")
    if (numbers.length < 2) {
        return 0
    }
    return numbers[1].length;
}


const convertHours = () => {
    // Function to handle html processing
    let hourInput = document.getElementById('hours').value;
    // Fix format errors
    hourInput = hourInput.replace(',', '.');
    let hoursInHundredths = parseFloat(hourInput);

    // Check if it's a valid number
    if (isNaN(hoursInHundredths)) {
        document.getElementById('output').textContent = 'Please enter a valid hour.';
        return;
    }

    if (hoursInHundredths >= 25.00) {
        document.getElementById('output').textContent = 'Please enter a valid hour.';
    }

    if (getDecimalAmount(hoursInHundredths) !== 2) {
        hoursInHundredths = (Math.round(hoursInHundredths * 100)/100);
        hoursInHundredths = hoursInHundredths.toFixed(2);
    }

    let result = convertToMinutesFormat(hoursInHundredths);
    document.getElementById('output').textContent = `Converted time: ${result}`;
}
