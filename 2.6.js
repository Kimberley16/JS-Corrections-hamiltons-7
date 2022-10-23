// Exercise 2.6
// Make a program that ask the user to enter a number between 1 and 7. 
// Depending on the number, display the day of the week that correspond. 
// (1 => Monday, 2 => Tuesday, etc...)

const readlineSync = require("readline-sync");

let day = new Number(readlineSync.question("Please enter a number between 1 and 7"));

if (day == 1) {
    console.log('Monday');
} else if (day == 2) {
    console.log('Tuesday');
} else if (day == 3) {
    console.log('Wednesday');
} else if (day == 4) {
    console.log('Thursday');
}
else if (day == 5) {
    console.log('Friday');
}
else if (day == 6) {
    console.log('Saturday');
}
else if (day == 7) {
    console.log('Sunday');
}
else {
    console.log("You didn't enter a number between 1 and 7");
}

/*

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4: {
        console.log('Thursday');
    }
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log("You didn't enter a number between 1 and 7");
        break;
}*/
