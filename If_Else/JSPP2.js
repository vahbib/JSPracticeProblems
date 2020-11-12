/*
Write a program that takes day and month from the command line and prints true if
day of month is between March 20 and June 20, false otherwise.
*/
var prompt = require('prompt-sync')();
//
// get input from the user.
//
var month = prompt('Enter Month Here: (eg. March)');
var day = prompt('Enter Date Here: (eg. 15)');
if  (month == "March" && day >20 ) {
    console.log("True");
}
else if (month == "May" || month == "April") {
    console.log("True");
}
else if (month == "June" && day <20) {
    console.log("True");
}
else{
    console.log("False");
}