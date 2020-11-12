/*
Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
*/

var prompt = require('prompt-sync')();

var number = prompt('Enter Number: ');
var num = number
var digit = 0;

let arr = new Array();

while(number!=0) {
    digit = number%10;
    
    number = Math.trunc(number/10);

    arr.push(digit);
} 
console.log("The Number is: "+num);
console.log(arr);