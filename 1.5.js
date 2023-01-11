//Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.
const readlineSync = require("readline-sync");
let firstNumber = readlineSync.question("Give me a first decimal number:");
let secondNumber = readlineSync.question("Give me a second decimal number:");
console.log(Math.trunc(firstNumber) * secondNumber);
