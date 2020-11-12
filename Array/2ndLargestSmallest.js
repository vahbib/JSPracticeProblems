/*
Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
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

function findmaxMin(){ 
    max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    min = Math.min.apply(null, arr);
    arr.splice(arr.indexOf(min), 1); 
    console.log("2nd Maximum of Array: "+Math.max.apply(null, arr)+"\n2nd Minimum of Array: "+Math.min.apply(null, arr));
};
findmaxMin();
arr.push(max);
arr.push(min);