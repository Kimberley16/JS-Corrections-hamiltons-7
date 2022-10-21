const readlineSync = require("readline-sync");

function askTvSerie() {
    console.log("Let's talk a bit about your favourite TV serie!")
    let favoriteTvShow = {
        "Name of the serie": readlineSync.question("What's its name ?\n"),
        "Year of Production": readlineSync.question("What's its production date ?\n"),
        "Cast": []}
    let done = 0; 
    let actor = readlineSync.question("Who acted in it ? Type Done or send an empty line once finished !\n")
    while (actor === "" || actor === 'Done') {
        console.log("Please enter at least one actor... I know you can do it !");
        actor = readlineSync.question("Who acted in it ? \n");
    }
    favoriteTvShow.Cast.push(actor);
    while (done === 0) {
        if (actor === 'Done' || actor === '') {
            done = 1;
            break;
        }
        else /* if (actor != 'Done' && actor != '') */{
            actor = readlineSync.question("Who else acted in it ? Remember, send Done or send an empty line once finished ! \n");
        favoriteTvShow.Cast.push(actor);
        }
        }
    favoriteTvShow.Cast.pop()
    console.log(favoriteTvShow)
    }


askTvSerie()