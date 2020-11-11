/*
Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
*/
var toss = Math.floor(Math.random() * 10) % 2;
if (toss == 1) {
    console.log("Tail");
}
else {
    console.log("Head");
}