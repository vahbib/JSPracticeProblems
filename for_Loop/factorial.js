/*
Write a program that computes a factorial of a number taken as input.

5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
*/
const prompt = require("prompt-sync")();

const number = parseInt(prompt('Enter number: '));
var num = number;

for(var i = 1; i<number; i++) {
        num = num*i;
}
console.log("Factorial: ", num);