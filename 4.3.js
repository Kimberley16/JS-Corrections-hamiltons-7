// By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

// Write a documentation for the multiRand(n) function.

// Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.
const readlineSync = require("readline-sync");
let Number = readlineSync.question('How many random numbers output do you need ?');

function rand10(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

function multiRand(Number)
{
    let arr = [];
    for(let i = 0; i < Number; i++)
    {
       arr[i] = rand10(1,10);
    }
    return arr;
}

console.log(multiRand(Number));