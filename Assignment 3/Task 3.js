// Musician object
const musician = {
    name: 'Sting',
    realName: 'Gordon Matthew Thomas Sumner',
    instrument: {
        type: 'bass'
    }
};
// Use for in with the object musician above. Log the attribute names and attribute values on the console.
for (let key in musician) {
    console.log(`${key} = ${musician[key]}`);
}

// Implement also another musician object.
const musician2 = {
    name: 'Kirka',
    realName: 'Kirill Babitzin',
    instrument: {
        type: 'vocal'
    }
}

// Put them both into an array:
const musicians = [musician, musician2];

// With the object array you just created: Give examples of the use of Object.entries, Object.keys, and Object.values
console.log(Object.entries(musicians)); // Outputs the array index of the object and the object itself
console.log(Object.keys(musicians)); // Outputs the array indices of the objects
console.log(Object.values(musicians)); // Outputs the musician objects