const musician = {
    name: 'Sting',
    realName: 'Gordon Matthew Thomas Sumner',
    instrument: {
        type: 'bass'
    }
};

const musicianJSON = JSON.stringify(musician);
console.log(musicianJSON);

const musicianObject = JSON.parse(musicianJSON);
console.log(musicianObject);

