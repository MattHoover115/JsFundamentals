/*
CONDITIONALS

FALSY VALUES:
    A falsy value is a value that is considered false when encountered in a boolean context. There are 6 falsy values in JS
        - false
        - 0
        - "", '', ``
        - null
        - undefined
        - NaN (not a number)

    What does this mean? Whenever JS is expecting a Boolean value and is given one of these 6, it is evaluated as false

    side note: there are also Truthy values in JS, which tend to be much less limited. 
        Examples include:
        -true
        -{}
        -[]
        -42 (any number above zero)
        -3.14 (any decimal)
        -"false" (any non-empty string)
    */

        // test if fractions are truthy

        /*
        IF STATEMENTS

        When we use comparison operators, we typically are asking if we can move on to the next section of code. "If" something is true, do "this thing"
        */
       // keyword expression
       if      (true) {
           //code to run if the expression evaluates to true
           console.log('Truthy Test')
        }
        
        //condition
        if(false){
            console.log('Falsy Test');
        }
        
        
        
                let light = 'on';

                if(light == 'on'){
                 console.log('The light is on');
                }

        
    let weather = 65;
    let rain = true;

if( weather < 70 && rain == true ){
console.log('Maybe wear a jacket')
}

//! CHALLENGE

/*
Create two variables:
1) let batman = 'is the night'
2) let bruce = true

Create an if statement that returns true and console log 'Batman'
*/

let batman = 'is the night';
let bruce = true;
// / !bruce will check that bruce is not equal to true
if(bruce == true && batman == 'is the night'){
console.log('BATMAN!');
}

    /*
    IF ELSE

    We can think of if else as not only providing an answer if our condition evaluates to be true, but also one if it ends up being false
    */

    let today = 75;

    if(today < 70){
        // string interpolation
        console.log(`It's ${today}, wear a jacket!`)
    } else {
        console.log(`It's ${today}. No jacket needed!`)
    }

    /*
        ELSE IF

        this is a condition that will be checked if the above condition
        was not met
        */

        let cooktime = 50;
        
        if(cooktime === 45) {
            console.log('Let us feast!');
        } else if(cooktime > 45) {
            console.log(`${cooktime} minutes? Gonna need a glass o' water with this!`)
        }
         else if(cooktime >= 30) {
            console.log(`It has only been ${cooktime} minutes. Wait another 5-15 minutes.`);
        } else if(cooktime >= 20) {
            console.log(`It has only been ${cooktime} minutes. Wait another 10-25 minutes.`);
        } else {
            console.log(`It has only been ${cooktime} minutes. Perhaps we could at least try cooking it...`);
        }


        //! CHALLENGE

        let age = 22

        if(age <= 17) {
            console.log('Sorry, youre too young to do anything');
        } else if(age >= 25) {
            console.log('You can rent a car!');
        } else if(age >= 21) {
            console.log('You can drink!');
        } else if(age >= 18) {
            console.log('You can vote!');
        }


        /* 
        TERNARIES

        They are if/else statements but they look weird!
        */

        let myName = 'Matt';

        if(myName === 'Matt') {
            console.log(`Hi, ${myName}!`);
        } else {
            console.log(`Not sure I know ${myName}`);
        }
        // TERNARY
        //condition ? if true : else result
        //condition                 true runs this                        else runs this
        myName === 'Matt' ? console.log(`Hi, ${myName}!`) : console.log(`Not sure I know ${myName}`);

        //CONDITION
        myName === 'Matt' ?
        //if true
        console.log('Hi, $(myName)!') :
        //else
         false
        console.log('Not sure I know $(myName).');

        let hero = 'Batman';
        let villain = 'Mr. Freeze';

        hero == 'Batman' && villain == 'Riddler' ? console.log('What has a head and a tail, but no body?') : hero == 'Batman' && villain == 'Joker' ? console.log('Why so serious?') : hero == 'Batman' && villain == 'Mr. Freeze' ? console.log('Ice to meet you!') : console.log(`${hero} is the night!`);

        //CHALLENGE

        // != is equal sign with line through it. 

        let lampOn = false;
        let daytime = true;

        lampOn == true && daytime != true ? 
        console.log('The lamp is on during the night') :
        lampOn != true && daytime != true ?
        console.log('The lamp is off during the night.') :
        lampOn == true && daytime == true ? 
        console.log('The lamp is on during the day.') : 
        lampOn != true && daytime == true ? 
        console.log('The lamp is off during the day') : 
        console.log('What lamp?');


        /*
        SWITCH STATEMENTS

        The switch statement executes a block of code depending on different cases
        cases equal if
        */

        let instructor = 'Summer';

        switch(instructor) {
            // if instructor === 'Jerome'
            case 'Jerome':
                console.log(`${instructor} is a part of the Web Development Team`);
                // break is the same as ending curly boy }
                break; 
            case 'Summer':
                console.log(`${instructor} is a part of the Web Development Team`);
                break;
            case 'Josh':
                console.log(`${instructor} is a part of the Web Development Team`);
                break;
                // default; = else {
            default:
                console.log(`Sorry, I can't find what ${instructor} teaches at this time`);
        }


        let staff = 'Jerome';

        switch(staff) {
            case 'Jerome' :
            case 'Summer' :
            case 'Levi' :
            case 'Adam' :
            case 'Hustin' :
                console.log(`${staff} is a part of the Web Development Team`);
                break;
            case 'Josh' :
            case 'Amanda' :
            case 'Casey' :
            case 'Junior' :
                console.log(`${staff} is a part of the Software Development Team`);
                break;
            default:
                console.log(`Sorry, I can't find what ${staff} teaches.`);
                break;
        }

        let switchConditional = true;

        switch(typeof switchConditional == 'string' || typeof 
        switchConditional == 'boolean') {
            case true:
                console.log(`${switchConditional} is a string or boolean`);
                break;
                default:
                    console.log(`${switchConditional}' is NOT a string or boolean`);
        }

        // When we use || (or) only one side of the || needs to be true for the expression to be true

        // When we use && (and) BOTH sides of the && need to be true for the expression to be true


        /* CREATE  a switch statement that takes in a value (number) that represents a grade. If it is True, 
        console log that represents a grade. If it is True, console log that they are passing with the
        correct letter grade. 


* A: 89-100
* B: 79-88
* C: 66-78
* D: 59-65
* F: 0-59
*/


let grade = 89;

switch(true) {
    case grade >= 89 :
        console.log(`${grade} is an A passing grade.`);
        break;
        case grade >= 79 :
        console.log(`${grade} is a B passing grade.`);
        break; 
        case grade >= 66 :
        console.log(`${grade} is a C passing grade.`);
        break; 
        case grade >= 59 :
        console.log(`${grade} is a D passing grade.`);
        break; 
        case grade >= 0 :
        console.log(`${grade} is an F failing grade.`);
        break;
        default:
            console.log(`Please insert a value`)
            break;
}

//! Challenge
/*
  Take this if else statement and translate it to both a ternary and a switch statement
*/
let character = "";
if(character === 'Michael'){
  console.log('That\'s what she said!');
} else if(character === 'Dwight') {
  console.log('It\'s not weed! It\'s hemp!');
} else if(character === 'Jim') {
  console.log('Bears. Beets. Battlestar Galactica.');
} else {
  console.log('*slow camera zoom*');
}


let character = "Michael";

switch(true) {
    case character === "Michael" :
    console.log(`That's what she said!`);
    break;
    case character === "Dwight" :
    console.log(`It's not weed! It's hemp!`);
    break;
    case character === "Jim" :
    console.log(`Bears. Beets. Battlestar Galactica.`);
    break;
    default:
    console.log(`Slow camera zoom.`);
    break;
}

// ! Ternary

let character = "";

character === "Michael" ? console.log(`That's what she said!`) :
character === "Dwight" ? console.log(`It's not weed! It's hemp!`) :
character === "Jim" ? console.log(`Bears. Beets. Battlestar Galactica.`) :
console.log(`*Slow camera zoom*`)

