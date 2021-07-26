/*
OBJECTS

-objects are used to store multiple sets of data in the key/value pair format
-denoted by {}
*/

let netflix = {
    // name: value
    id: 1,
    name: 'The Office',
    genre: 'Comedy',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {episode: 1
                    episodeName: 'Pilot'}, 
                {episode: 2,
                    episodeName: 'Diversity Day'},
                {episode: 3,
                    episodeName: 'Health Care'},
                {episode: 4,
                    episodeName: 'The Allegiance'},
                {episode: 5,
                    episodeName: 'Basketball'},
                {episode: 6
                    episodeName: 'H'}}
            ]
        }
    }
}

// console.log(netflix.name, netflix.genre); // dot notation: when we know the name of the key/ value information we want, we will use dot Notification

console.log('All Data:',netflix);

console.log('Just season info:', netflix.season1.seasonInfo);

// console.log any single episode name from season 1
console.log('Episode 2:', netflix.season1.seasonInfo.episodeInfo[1].episodeName);

/*
JSON OBJECTS

-JSON stands for javascript object notification
-the json syntax is derived from javascript object syntax, nut the json format is text only
-Json exists as a string- useful when fetching data from a sever. It needs to be translated into a native javascript
object if we want to access the data.
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//We can use some Object methods to help us gather information we might not otherwise know

// Object.keys()
console.log(Object.keys(spaceJam.toonSquad)); //gives an array of the keys in an object
console.log(Object.keys(spaceJam.toonSquad.duck)); //gives us the index numbers for the string 'Daffy Duck'
console.log(Object.values(spaceJam.toonSquad)); //gives us an array with the values of each key in an object

/*
OBJECT BRACKET NOTATION

-object bracket notation can allow us to find a value in an object we wouldn't be able to access information in an object
-we can also use object bracket notation to store a key in a variable and use that variable to access information in an object
- this works because all key names in an object are strings
*/

let garden = {
    vegetable: 'Zucchini',
    flower: 'Orchid',
    fruit: 'Kiwi',
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

//Dot Notation
console.log(garden.flower);

//Square Bracket Notation
console.log(garden['flower']);



let baking = {};
baking['zucchini'] = 'better make some bread!';
baking.bakeTime = 60;
console.log(baking);

let garden = {
    vegetable: 'Zucchini',
    flower: 'Orchid',
    fruit: 'Kiwi',
    water: true,
    sun: true,
    size: 10
}

console.log(baking[garden['vegetabel']])

// Using square brackets can also be a good idea if the object's key has a space in the name

let testObj = {
    "Spaces Here": true,
    noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj['Spaces Here']);