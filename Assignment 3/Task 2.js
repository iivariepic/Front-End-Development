// You have the following object:
const musician = {
    name: 'Sting',
    realName: 'Gordon Matthew Thomas Sumner',
    instrument: {
        type: 'bass'
    }
};

// Read the attributes name and instrument into the variables name and instrument
const { name, instrument } = musician;

// Read the type of the instrument into a variable instrumentTypeOfArtist
const { type: instrumentTypeOfArtist } = instrument;

/* Read the make of the instrument into a variable instrumentMakeOfArtist.
If the attribute is missing from the current object, give it a default value "unknown".
*/
const { make: instrumentMakeOfArtist } = instrument;

console.log(name);  // Output: 'Sting'
console.log(instrument);  // Output: { type: 'bass' }
console.log(instrumentTypeOfArtist);  // Output: 'bass'
console.log(instrumentMakeOfArtist);  // Output: 'unknown' (since make is missing)