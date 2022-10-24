const readlineSync = require("readline-sync");

function getDivisors(n)  {
    let arr = [];

    for (let i = 2; i < n; i++) {
        if (n % i == 0)
            arr.push(i);
    }

    return arr;
}

function displayNumbers(divisors) {
    let strElements = "";

    if (divisors.length == 0)
        console.log("nothing (it's a prime number)");
    else {
        for (let i = 0; i < divisors.length; i++)
            strElements += divisors[i] + " ";
        console.log(strElements);
    }
}

let number = -1;
do {
    number = readlineSync.questionInt("Enter an positive integer : ");
} while (number <= 0);

let divisors = getDivisors(number);
displayNumbers(divisors);

