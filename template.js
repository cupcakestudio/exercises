"use strict";
//template literals
const name = "Peter";
const animal = "cat";
const animalName = "Mandu";

console.log(`My name is ${name}.\nI have a ${animal} called ${animalName}.`);

//Strings .length and [index]

const newname = "Albus Percival Wulfric Brian Dumbledore";
//answer theses questions:

//1. what is the total number of char, including spaces?
console.log(newname.length);
// A: 39 char incl. spaces

//2. what is the char at index 2?
console.log(newname[2]);
// A: 'b'

//3. Which character is at index 6?
console.log(newname[6]);
// A: 'P'

// 4. What is the index of the first D in Dumbledore?
console.log(newname.indexOf("D", 0));
// A: index 29

// 5. What is the index of the last e in Dumbledore?
console.log(newname.lastIndexOf("e"));
// A: index 38

//other methods:
console.log(newname[newname.substring(29)]);
