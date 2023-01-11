const readlineSync = require("readline-sync");

let firstname = readlineSync.question("Hi what is your first name ? ");
console.log("Hello " + firstname);