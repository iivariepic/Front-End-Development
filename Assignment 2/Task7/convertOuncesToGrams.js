function convertOuncesToGrams(measurements) {
    const gram_array = []
    for (let measurement of measurements) {

        if (measurement.unit === "gram") {
            // If unit is already gram, don't convert
            gram_array.push(measurement);
            continue}

        let new_measurement = measurement;
        new_measurement.weight = oz_to_grams(measurement.weight);
        new_measurement.unit = "gram"
        gram_array.push(new_measurement);
    }
    return gram_array;
}

const oz_to_grams = (weight) => {return Math.round(weight * 28.3495231 * 100)/100;}

const given_array = [{ batchid: 434, unit: "ounce", weight: 12.21 }, {batchid: 414, unit: "gram", weight: 199.54 },{ batchid: 522, unit: "ounce", weight: 18.88 }]
console.log(convertOuncesToGrams(given_array));
