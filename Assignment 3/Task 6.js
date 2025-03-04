function getRandomIntegerFromRange(startRange, endRange) {
    let answerFloat = Math.random() * (endRange + 1 - startRange) + startRange;
    return Math.floor(answerFloat);
}

let x = getRandomIntegerFromRange(1, 10);
console.log(x);

function getTimeDifferenceInFullDays(startDate, endDate) {
    let msTimeDifference = endDate.getTime() - startDate.getTime();
    return Math.round(msTimeDifference / (1000 * 60 * 60 * 24));
    }


let today = new Date();
let christmasDay = new Date(today.getFullYear(), 11, 25);
console.log(getTimeDifferenceInFullDays(today, christmasDay));

