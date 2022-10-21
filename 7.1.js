const readlineSync = require("readline-sync");
let number;
//get and stock a random number
function rand100(number) {
  return Math.floor(Math.random() * 100) + 1;
}
let findingNumber = rand100(number);
//get the player a first guess
console.log("Guess the number I'm thinking about (between 1 and 100)");
let playNumber = readlineSync.question("Give the number you think is right: ");
//while the guess is different, check if it's lower or higher, display a message and ask a new number and loop again
while (findingNumber != playNumber) {
  if (findingNumber < playNumber) {
    console.log("The number is too high , try again !");
    playNumber = readlineSync.question("Give the number you think is right: ");
  } else if (findingNumber > playNumber) {
    console.log("The number is too low, try again !");
    playNumber = readlineSync.question("Give the number you think is right: ");
  }
}
//The loop is finished when the player find it so congratulate him or he ll never play again :)
console.log("Congratulation!!!!!!!!!!!!!!!!");
