// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
const name = "Dylan";
let age = 32;
let AmIHappy = true;
let favoriteMovie;
let DoesNotExist = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof name);
console.log(typeof age);
console.log(typeof AmIHappy);
console.log(typeof favoriteMovie);
console.log(typeof DoesNotExist);

// create a variable that references a template literal
// inside the template literal, use two of the above variables

const template = ` "My name is ${name} and I am ${age} years old"`;
console.log(template);

// reassign the value of the variable that references "null"
favorireMovie= "Halloween"

// print the value and its type
console.log(favoriteMovie);
console.log(typeof favoriteMovie);

// print a variable that causes a ReferenceError
let DoesNotExist = 0;
console.log(DoesNotExist);

// alter the previous line to no longer cause a ReferenceError
