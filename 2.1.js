/* Allow the user to enter datas with an input */
const readlineSync = require("readline-sync");

/* Defines the "age" variable and asks the user to enter his age*/
let age = new Number(readlineSync.question("Enter your age : "));

/* The condition is waiting to see if the age variable is higer or equal to 18. If the condition is true, the console display "You are an adult.", if not, the console display "You are not yet an adult." */
if (age >= 18) {
    console.log("You are an adult.");
}else {
    console.log("You are not yet an adult.");
}