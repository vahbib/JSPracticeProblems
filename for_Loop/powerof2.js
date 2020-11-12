/*
Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.
*/

const prompt = require('prompt-sync')();
var n = parseInt(prompt("Enter the power of 2: "));

for(var i = 0; i<=n;i++) {
    console.log(Math.pow(2,i));
}