/*
ARROW FUNCTIONS

Arrow functions are expressional functions that can be simplified into one of two forms: concise body and block body. The main goal is to generate shorter syntax for writing a function.
*/

// Regular Function
function regFunc() {
    console.log('just a regular function');
}
regFunc();

//      (1)      (2)(3)     (4)
let arrowFunc = () => console.log('just a regular function');
arrowFunc();

/*
1: A variable created to hold the value of our anonymous arrow function
-Arrow functions are ALWAYS anonymous
2: Parameters are still capable of being added
-Parameters go in the () as they would with a normal function. BUT if we only have 1, no more or less, parameter, we do not
need (). If we have no parameters we are still required to put ().
3: "How we see an arrow". This is JS syntax that says wa are about to process a function.
4: The code the arrow function will run, or execute. i.e. "do this"
*/

let arrow = (x) => console.log(x);
arrow(10);

//! CONSCISE vs BLOCK BODY

// CONSCISE BODY
// When we have a simple return, or response, from our arrow function, it makes sense to write it in a concise, simplified way. When we use a concise body arrow function, the "return" statement is implied (meaning we do not have to write it)

let conciseBody = (x,y,z) => console.log(x + y - z)
conciseBody(1,2,7);

                        //return x + y
                        //implied return
let conciseBody = (x,y) => x + y;
let result = conciseBody(1,2); //return sets conciseBody(1,2) = 3
console.log( result );

let slightlyComplexConcise = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log(`${x} and ${y} are where we want them.`)

slightlyComplexConcise(3,1);
slightlyComplexConcise(2,1);

// BLOCK BODY
// the 'return' keyword IS required. we will include curly braces.
// Sometimes it will make sense to use block body if we need to do multiple lines of code

let blockArrow = (x,y) => {
    console.log(`${x} and ${y} are in block body arrow function`)
   // return `${x} and ${y} are in a block body arrow function`
}
// ANY code below the return statement in a function will be ignored. If we write code below it, it will not run
// console.log()

//console.log( blockArrow(1,2) );

// variable will hold the value of the returned string
let blockResponseReturn = blockArrow(1,2);

//variable will be undefined
let blockResponse = blockArrow(1,2);

console.log(`BLOCK RESPONSE:`,blockResponse);

//! CHALLENGE

let hero = 'Robin Hood';
let nock = 1;

let shot = (x, y) => y < 3 ? console.log(`${x} only shot ${y} arrow...`) : console.log(`${x} shot ${y} arrows at the target!`);


shot(hero,nock);

//* Using a block body, pass the same variables but increase the number of shots until the second console.log is printed

let hero = 'Robin Hood';
let nock = 1;

//1 - block body arrow function (?)
//2 - pass in 2 variables
//3 - run the conditional
//4 - repeat the code until the result changes?

let shoot = (x, y) => {

    for(y; y < 4; y++){
    console.log('y:',y);
    if(y < 3){
        console.log(`${x} only shot ${y} arrow...`)
     } else {
          console.log(`${x} shot ${y} arrows at the target!`);
    };
  }
}

shoot(hero, nock);

function hi() {
    console.log('Hello!')
}