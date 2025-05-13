// create a constant variable called "name" that references a string
const name = "Dylan";

// create a reassignable variable called "favoriteSong" that references a string
let favoriteSong = "Domino";

// create a reassignable variable called "wage" that references a number
let wage = 50000;

// create a variable called "age" that references a number, should it be reassignable?
let age = 32;

// create a variable called "onlyChild" that references a boolean
const onlyChild = false;

// create a variable called "satisfied" that references a boolean
let satisfied = true;

// print the types of two variables that reference two different data types (typeof)
console.log(typeof favoriteSong);
console.log(typeof Wage);

// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = "video games";
console.log(typeof favoriteThing);

// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "Titanium";
console.log(typeof favoriteSong);

// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = "Television";
console.log(typeof favoriteThing);

// Happy Birthday!
// Reassign "age" to a new value
age = 33;

// You got a big raise at work.
// Reassign "wage" to a new value
wage = 60000;

// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = false;

// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log("My name is " + name + " and my favorite song is " + favoriteSong + "'")
