const readlineSync = require("readline-sync");

let n = readlineSync.question('Enter a number');
let Sum = 0;

for (i=0; i<n; i++) {
    let newNumber = readlineSync.question("Enter a number to add");
    Sum += Number(newNumber);
}
console.log(Sum);