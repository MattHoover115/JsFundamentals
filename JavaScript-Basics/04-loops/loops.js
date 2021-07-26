//LOOPS
/*
Loops allow us to go over a block of information or code in a determined amount of cycles. It's important ot note that it is possible for us to write code without declaring an endpoint.

Loops help us repeat a process without writing alot of code.
*/

/*
STRUCTURE

We have to setup our loops in a way that we can
1) See where we are in a loop
2) Consider what sort of condition we want to run it against, and
3) Note when we are done with that condition and move on to the next iteration.

We need to:
1) Create an Index
2) Run a condition
3) Change to the indexing variable (execution of condition)
*/

//? Let's count to 10:

for( let i = 0; i <= 10; i++){
    console.log(i);
}

/*
We state our loop with a "for". Within this function, we are injecting some parameters that JS will run against. Index; condition, change index -> result.

Within parameters, we are stating our index declaration to 0. This is our baseline. We move on to asking if that variable is less than or equal to the number 10, take that set number and add 1 to it. Once that is processed, return that value (in this case "console.log" of that number).
Once our condition is met, we return a FALSE which ends our loop.

THIS important to note:
for(<create an index variable>; <run condition>; <change index>) {
    <return results>
    <cont. until the condition is met>
}
*/

//? If don't indicate what our condition is, the loop will not have a finish line and thus run until we have to force close it.

//INFINITE LOOP!

/*
for(let i = 0; i++){
    console.log(i);
}
*/

//No condition means that JS doesn't know when to stop and will never assume that information.

//! CHALLENGE:
//* Using a for loop, set an index to 2. Make a condition where if that number is greater than -10, change that index by subtracting 4 and console log each iteration.

for(let i = 2; i > -10; i -=4){
    console.log(i);
}

//We aren't limited by positive or negative numbers. We can cycle through variables assigned with strings.

let word = "supercalifragilisticexpialidocious"

for(let b = 0; b < word.length; b++){
    // .length is a method we can use in JS that helps us determine a value we may not know.
    console.log(b, word[b]);

    // 1) We set of each index and are displaying that.
    // 2) We set to display the value within the "object" of word. Each character that is assigned to the variable of "word" is provided an index value and this is how we are cycling through it.
    console.log(`The letter ${word[b]} is in position: ${b}`);
}

/*
 FOR IN LOOPS

 With For loops, we are seeking an index value and running it against a condition. For in loops do not require an index number.
 */

 let city = {
     name: 'Indianapolis',
     pop: 877000,
     speedway: true
 }
// let bear
 for(info in city){
     console.log(info);
    // console.log(city.name);
    // console.log(city["name"]); //city.info looks for city = {info: 'value'}
    console.log(city[info]);
 }

 /*
 for(variable in object){
     run code
 }
 */
//              0       1           2           3       4
 let list = ['milk', 'eggs', 'lunch meat', 'bread', 'bananas'];
/*
let list = {
    1 milk
    2 eggs
    3 lunch meat
    4 bread
    5 bananas
}
*/
 for(item in list){
     console.log(item);
     console.log(list[item]);
 }


 //CHALLENGE
//             012345
 let myName = 'dwiGht';

 /*
 Write a for loop that loops over a name, and will capitalize the first letter,
and make all other letters lowercase
 */

let propCase;

//for(let i = 0; index < myName.length; i++){
for(let index = 0; index <= myName.length - 1; index++){
    //code here
    // console.log(myName.split(''));
   // console.log(myName[index]);

    if(index === 0){
        propCase = myName[index].toUpperCase(); // propCase = 'D'
    } else {
        propCase += myName[index].toLowerCase(); // 'D' + 'w' = 'Dw'
    // 'Dw' + 'i' = 'Dwi'
    }

    console.log(myName);
}

//FOR IN VERSION

let myName = 'dwIght'

let propCase;

for(index in myName){
    index == 0 ? propCase = myName[index].toUpperCase() : propCase += myName[index].toLowerCase();
}

console.log(propCase);


/*
FOR OF LOOP

In order to run a for of loop, the 'thing' must be numbered like an array
*/
//
//let myObject = {
  //  string: 'Peter',
    //boolean: true,
    //number: 1
//};

//for(item of myObject) {
//    console.log(item);
//}

let indexArray = ['spot 1', 2, true, 'not fifth'];

for(let pos of indexArray) {
    console.log(pos, 'was run through a "for of" loop');
}


let coolNum = 500;

for(let coolNum = 498; coolNum < 502; coolNum++){
    console.log(coolNum);
}

/*
for(variable of iterable) {
    code goes here
}

*an iterable is something that has numbers assigned to it like an array, where the first item is assigned a 0, the second a 1, and 
so on... [eg. Arrays, Strings]
*/

let officeCharacters = ['Dwight', 'Michael', 'Jim', 'Stanley', 'Pam'];

for(worker of officeCharacters) {
    console.log(worker, 'works in the office')
}


let officeCharacters = ['Dwight', 'Michael', 'Jim', 'Stanley', 'Pam'];

for(worker of officeCharacters) {
    if(worker === 'Dwight' || worker === 'Michael'){
    console.log(worker, 'works too much in the office')
    }
}

let officeCharacters = ['Dwight', 'Michael', 'Jim', 'Stanley', 'Pam'];

for(worker of officeCharacters) {
    if(worker === 'Dwight' || worker === 'Michael'){
    console.log(worker, 'works too much in the office');
    }

    if(worker === 'Jim' && worker !== 'Dwight'){
        console.log('Bear. Beats. Battlestar Galactica');
    }
}


