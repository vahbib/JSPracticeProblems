/*
Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

Extend the above program to sort the array and then find the 2nd largest
and the 2nd smallest element.
*/
  
var arr = [];
var i;
var max;
var min;
for(i = 0; i<10; i++) 
{
    arr.push(Math.floor(Math.random()*(1000)));
}
console.log("Array is: "+arr);
arr.sort();
console.log("2nd Maximum of Array: "+arr[8]+", 2nd Minimum of Array: "+arr[1]);