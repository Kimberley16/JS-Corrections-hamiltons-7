const readlineSync = require("readline-sync");
/**
 * Multiplies two numbers together
 * @param  {Number} length The first number
 * @param  {Number} width The second number
 * @return {Number}      The product of the two numbers
 */
function calcSurface(length, width){
    return length * width;
}

let x = new Number(readlineSync.question('Please enter the length : '));
let y = new Number(readlineSync.question('Please enter the width : '));

console.log("The surface area is = "+ calcSurface(x, y));