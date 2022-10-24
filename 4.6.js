/** Instruction : 
* Create a function factorial(a) that returns the factorial of a number.
* That function must be recursive.
*/

// -> A factorial of a number ( written n!) is the multiplication of all numbers from the chosen number down to 1 AKA 1 * 2 * 3 * ... * n-1 * n 
// The formula of a factorial in math : n! = n * (n-1)! 

// -> A recursive function is a function that calls itself.

const readlineSync = require("readline-sync");

let a = parseInt(readlineSync.question("Choose a number : "));

function factorial(a){
    if (a == 0 || a == 1) {
        return 1;
    }
    else {
        return a * factorial(a - 1);
    }
}

console.log("The factorial of " + a + " is " + factorial(a));