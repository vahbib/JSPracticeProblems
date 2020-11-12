/*
Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is reached.
*/

const prompt = require('prompt-sync')();
const n = parseInt(prompt("Enter the power of 2: "));
var n1 = n;
var i =1;

while(n1 != 256) {
    n1 = Math.pow(2, i);
    i++;
    console.log(n1);
    if(i>n){
        process.exit(0);
    }
}