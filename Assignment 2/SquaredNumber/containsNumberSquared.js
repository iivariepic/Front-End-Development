const containsNumberSquared = function (numbers, aNumber) {

    for (let i = 0; i < numbers.length; i++) {
        // Iterate through every number
        let is_square = numbers[i] * numbers[i] === aNumber;
        if (is_square) {return true;}
    }
    return false;
}

const checkNumber = function (numbers, aNumber) {
    // Function to handle html processing
    const numberText = document.getElementById('numbers');
    let numberToSquare = document.getElementById('numberToSquare').value;
    numberToSquare = parseInt(numberToSquare, 10);
    const numberArray = numberText.value.split(',');

    // Check the Array
    for (let i = 0; i < numberArray.length; i++) {
        // Modify each number
        numberArray[i] = numberArray[i].trim()
        numberArray[i] = parseInt(numberArray[i], 10);

        // Check each number
        if (isNaN(numberArray[i])) {
            document.getElementById('output').textContent = 'Please enter valid numbers.';
            return;
        }
    }

    // Check the number to square
    if (isNaN(numberToSquare)) {
        document.getElementById('output').textContent = 'Please enter a valid number.';
        return;
    }

    const result = containsNumberSquared(numberArray, numberToSquare);
    document.getElementById('output').textContent = result
        ? `Array contains the square root of ${numberToSquare}.`
        : `Array does not contain the square root of ${numberToSquare}.`;
}