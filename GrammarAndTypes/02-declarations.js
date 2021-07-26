/* 
What is a variable?

Variables are named containers for sorting data. 
We can think of these containers as resources we can call upon later. Each variable allows us to store data, which could be a value on a function, that we will want to reference back to.

*/

let a = 2;

/*
 -"let" is our KEYWORD.
 -"a" is our NAME of the variable
 -"=" is our ASSIGNMENT OPERATOR (assigns value)
 -"2" is our variable's value
 */

 let b = 1;

 console.log(a + b); // what should we get? 3

 /*
 
 Restrictions with variables

 -a variable must begin with a letter,underscore, or dollar sign
 -number may follow the above characters, but cannot come first in the name
 -javascript is case sensitive- 'hello' and 'Hello' are different variables.
 -no spaces are allowed in variable names
 -camelCase is best practice for naming variables in js. This will help keep names of variables readable
  ex: 
  let myName = 'Matt';
  is easier to read than
  let myname = 'Matt';

  */

  let startingWithLetter = 'Works';
  let _startingWithUnderscore = 'Works';
  let $startingWithDollarSign = 'Works';
  // let 5startingWithNumber = 'Breaks'; // Cannot start a variable name with a number
  // let -startingWithDash = 'Breaks'; // cannot start with a -
  
  console.log(startingWithLetter, startingWithUnderscore, $startingWithDollarSign);

  // ctrl + alt + n will run code runner


  /*
  KEYWORDS  

  var, let, const

  - var: the 'old' keyword for variables. We will not use this much but it is still used depending on the project and when it was made. We will focus on let and const.

  - let: the 'new' keyword for variables which was introduced in ES6 *newest verson of ECMAScript, which is a standardization of JS

  - const: also 'new' and declares an unchangeable, or constant, variable. The only limit to const variables is that once they are declared/assigned their value will NEVER change. 
  
  
  */

  var varTest = 'var variable';
let letVariable = 'let variable';
const constVariable = 'const variable';

console.log(varTest, letVariable, constVariable);


/*
Declaration are the LEFT SIDE of the assignment operation (=) within a variable
- let x

Initializations are the RIGHT SIDE of the assignment operation (=) and sets the value fo the variable
-let x = 10

10 would be the initialization
*/

let x;
console.log('Declaration',x);

x = 10;
console.log('Initialization 1', x);

x=33;
console.log('Initialization2', x);

let y = 'Hello';
console.log('Both:', x, y);


let today = 'Great';
const efa = 'Wonderful!';
console.log(today,efa); // Great! Wonderful!

today = 'Awesome!';
console.log(today,efa); // Awesome! Wonderful!

efa = 'Super!';
//console.log(today, efa) // Error

const example; // Error

example = 'Testing';

console.log(example);