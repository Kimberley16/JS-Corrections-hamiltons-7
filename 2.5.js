const readlineSync = require("readline-sync");
let number = readlineSync.question("What's your favorite number?");

if ( number!=42) {
    console.log ("Are you really sure?")}

else { (number==42)
    console.log ("Nice choice!");
}
while (number!=42);