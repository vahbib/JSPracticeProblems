/*
Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value
*/

var value = [];
var i;
for(i = 0; i <5; i++) {
    value.push(Math.floor(Math.random()*(999-100+1)+100));
}
let min = Math.min.apply(Math, value)
let max = Math.max.apply(Math, value)
console.log(value);
console.log("Maximum of Array: "+max+" | Minimum of Array: "+min);