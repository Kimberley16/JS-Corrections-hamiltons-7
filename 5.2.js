// Exercise 5.2

// Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

function askTvSerie() { // function will ask the fave tv Series to a user 
    const tvSeries = {
        name: " ",
        prodYear: 0,
        cast: [],
    }
    const readlineSync = require("readline-sync");

    tvSeries.name = readlineSync.question("Please enter your favorites series name");
    tvSeries.prodYear = readlineSync.question("What is its production year?");

    let ans = readlineSync.question("Do you know any cast members? yes / no");
    if (ans == "yes") {
        while (ans == "yes") {
            tvSeries.cast.push(
                this.memberName = readlineSync.question("What is its first and last name?")
            )
            ans = readlineSync.question("Any more? yes / no")
        }
    }
    return tvSeries;
}


function randomizeCast(tvSerie) { // function that will randomly shuffle the values of a table
    let i = tvSerie.length; // we store the lenght of that table in a var 
    while (--i > 0) { // while the lenght is > 0 we will decrement until reaching the 0 value
        let j = Math.floor(Math.random() * (i + 1)); // as long as we can decrement, we will store the random number in a new var j
        [tvSerie[j], tvSerie[i]] = [tvSerie[i], tvSerie[j]]; // here we swap the elements between j and i.
    }
    return tvSerie;
}

let tvSerie = askTvSerie().cast; // we store the table cast in an var

console.log(randomizeCast(tvSerie)); // the var above will then be the arg of our function the we are going to call -> the arg has to be a table  


// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.

