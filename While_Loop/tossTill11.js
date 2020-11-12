/*
Extend the Flip Coin problem till either Heads or Tails wins 11 times.
*/

var tailCount = 0, headCount = 0;

while (tailCount!=11 && headCount!=11) {
    var toss = Math.floor(Math.random() * 10) % 2;
    if (toss == 1) {
        tailCount++;
    }
    else {
        headCount++
    }
}
if(tailCount ==11) {
    console.log("Tails Win");
}
else {
    console.log("Heads Win");
}