/*
Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
1. a + b * c                           3. c + a / b
2. a % b + c                           4. a * b + c
*/

var prompt = require('prompt-sync')();

var a = prompt('Enter value of a: ');
var b = prompt('Enter value of b: ');
var c = prompt('Enter value of c: ');

let op1 = 0;
let op2 = 0;
let op3 = 0;
let op4 = 0;

op1 = a + (b * c);
op2 = (a % b) +c;
op3 = (Math.trunc(a / b)) +c;
op4 = (a*b)+c;

console.log("Value of 1st: " + op1+" | Value of 2nd: "+ op2+ " | Value of 3rd: "+op3+ " | Value of 4th: "+op4 );
