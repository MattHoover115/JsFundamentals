/*
- Populating and referring
- Methods
- Length
- Iterating
*/

// POPULATING AND REFERRING
            //0         1           2
let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);
/*
- when we call an array, we can append, or add, square brackets
onto the end of the array name with the index number of the value
we want to experience. This is known as SQUARE BRACKET NOTATION.

-javascript starts counting at 0, so when we console log 'list[1]'
we should see 'banana'
*/

/*
let students = {
    0: 'Evan',
    1: 'Ricky,
    2: 'Kali',
    ...
}
*/
let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Matthew', 'Cameron', 'Phoenix', 25, true, ['Matthew', 'Shake n Bake', 'Sophie']
, 15 % 4] 
console.log(students[10]);
console.log(typeof students);
console.log(students instanceof Array); // true
//console.log(students instanceof array); //
// the instance of operator is used to check the type of an object at run time. remember arrays are technical objects

//let name = 'jerome' // name is deperecated "we do not use it anymore"

let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Matthew', 'Cameron', 'Phoenix', 25, true, ['Matthew', 'Shake n Bake', 'Sophie']
, 15 % 4] 
///console.log(students[10]);
///console.log(typeof students);
///console.log(students instanceof Array); 
console.log(students[4]);
console.log(students[7]);
console.log(students[9][1]);
console.log(`Hello  ${students[9][2]}`)

// ARRAY METHODS
// we can call on multiple different array methods that will allow us to manipulate arrays as we need to.
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
// Add to our array
food.push('Pizza', 'Spring Onion'); // .push() will add a value(s) to the end of the array. multiple values seperated by a comma
// console.log(food.push('Spring Onion')); // gives me the length of the array
console.log('push:', food);

//REMOVE FROM ARRAY
food.pop('Pizza'); // this should remove the last item from the array
console.log('pop:', food);

food.shift('Pecan Pie'); //removes first item in an array
console.log('shift', food);

food.unshift('Chicken', 'Garlic');
console.log('unshift:', food);

food.splice(2, 1, 'Bananas'); //Remove and insert items in the middle of an array
console.log('splice:', food);
// (position to remove, hoe many to remove, what to add in that location)

// LENGTH

let long = [0,1,2,3,4,5,6,7,8,9,10];
console.log(long.length); //11

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length); //6

/*
 ITERATING

forEach - 

- the forEach() method executes a provided function once for each element in an Array.
-the forEach() method does the same thing as a for loop or a for of loop --> noth iterate over the properties in an Array

-provide a callback function that has up to 3 arguments:
1. The value
2. The index
3. The array object itself

*/

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'perrywinkle', 'ocre'];

for(let i = 0; colorList.length; i++) {
    console.log(colorList[i]);
}

colorList.forEach(
//callback function
color --> console.log(color)
// a callback func is a func that is either called or passed as a parameter to another function
);
// how do i make an arrow function
//let something = (color) --> { /* code here */ } 


let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'perrywinkle', 'ocre'];

colorList.forEach( (item, index) --> {
    console.log(item);
    console.log(index);
} )