/*
Read a Number and Display the week day (Sunday, Monday,...)
*/
var prompt = require('prompt-sync')();

var number = prompt('Enter Day Number: ');

if (number == 0) {
        console.log("Sunday");
}
else if (number == 1) {    
            console.log("Monday");
}
else if (number == 2) {
        console.log("Tuesday");
}
else if (number == 3) {
        console.log("Wednesday");
}
else if (number == 4) {
        console.log("Thursday");
}
else if (number == 5) {
        console.log("Friday");
}
else if (number == 6) {
        console.log("Saturday");
}
else if (number == 7) {
        console.log("Seven");
}
else {
    console.log("Not a Single Digit Number");
}