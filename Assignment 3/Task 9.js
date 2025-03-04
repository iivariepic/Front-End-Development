// Copy SimpleLotteryMachine from Task 7
class SimpleLotteryMachine {
    constructor(minNumber, maxNumber) {
        this.numbers = SimpleLotteryMachine.make_set(minNumber, maxNumber);
    }

    static make_set(min, max) {
        let result = new Set();
        for (let i = min; i <= max; i++) {
            result.add(i);
        }

        return result;
    }

    draw_number() {
        // Draw a random number from the set and remove it
        // Return the number
        let numbersArray = Array.from(this.numbers);
        let randomIndex = Math.floor(Math.random() * numbersArray.length);
        let result = numbersArray[randomIndex];

        this.numbers.delete(result);
        return result;
    }
}

class ComplexLotteryMachine extends SimpleLotteryMachine {
    constructor(normalMin, normalMax, additionalMin, additionalMax) {
        super(normalMin, normalMax);
        this.additionalNumbers =
            SimpleLotteryMachine.make_set(additionalMin, additionalMax);
    }

    draw_additional() {
        let numbersArray = Array.from(this.additionalNumbers);
        let randomIndex = Math.floor(Math.random() * numbersArray.length);
        let result = numbersArray[randomIndex];

        this.additionalNumbers.delete(result);
        return result;
    }
}

let myMachine =
    new ComplexLotteryMachine(1, 42, 1, 42);
let yourMachine =
    new ComplexLotteryMachine(3, 42, 1, 42);

for (let i = 0; i < 7; i++) {
    console.log("Normal pull from machine 1: " + myMachine.draw_number());
    console.log("Normal pull from machine 2: " + yourMachine.draw_number());
}

for (let i = 0; i < 2; i++) {
    console.log("Additional pull from machine 1: " + myMachine.draw_additional());
    console.log("Additional pull from machine 2: " + yourMachine.draw_additional());
}

