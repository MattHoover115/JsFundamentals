//COMPARISON OPERATORS

//EQUAL
'3' == 3;
console.log('3' == 3);
/*
Javascript is helpful and does something known as coercion when comparing values
-coercion is the process of converting a value from one type to another
-in the above example, javascript assumed that we were trying to check if '3' is equal to 3, even though one of our values is a string and one is an integer.
*/

//STRICT EQUAL - This overrides javascripts coercion
console.log(3===3); //true
console.log('3' ===3); //false

// NOT EQUAL
console.log('3' != 3);

//STRICT NOT EQUAL
'3' !== 4;
console.log('3' !== 4); //true

//GREATER THAN
3 > 2;

//LESS THAN
2 < 3;

//GREATER THAN OR EQUAL TO
3 >= 2; //NOT TO BE CONFUSED WITH A "FAT ARROW" => (EXPLAINED LATER)

//LESS THAN OR EQUAL TO
2 <= 3;

// AND
2 && 3;

// OR
2 || 3;