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

machine1 = new SimpleLotteryMachine(1, 42);
machine2 = new SimpleLotteryMachine(1, 42);

lotteryResult1 = []
additionalResult1 = []
lotteryResult2 = []
additionalResult2 = []
for (let i = 0; i < 9; i++) {
    if (i < 7) {
        lotteryResult1.push(machine1.draw_number());
        lotteryResult2.push(machine2.draw_number());
    }
    else {
        additionalResult1.push(machine1.draw_number());
        additionalResult2.push(machine2.draw_number());
    }
}

console.log(lotteryResult1);
console.log(lotteryResult2);
console.log(additionalResult1);
console.log(additionalResult2);
