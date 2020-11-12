/*
Write a function to check if the two numbers are Palindromes
*/
var num ;
var n1 =0 ;
var n2 = 0;
function palindrome(n) {
    var num = n;
    while (num !=0) {
        n2 = num%10;
        n1 = (n1*10)+n2;
        num = Math.trunc(num/10);       
    }
    if(n == n1) {
        console.log("Palindrome")
    } else {
        console.log("Not Palindrome")
    }
}

palindrome(125);