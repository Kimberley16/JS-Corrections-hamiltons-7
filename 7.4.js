const readlineSync = require("readline-sync");
//Required to use saveAs to save files
const filesaver = require("file-saver");

let pizza_list = [];

//TODO This could be an object
//console.log(pizza_list.length)
function get_menu() {
  //console.clear(); // just clears the screen
  console.log(
    "Hello! Welcome to the Pizza Flavors Manager.\n\nPlease choose your actions:\n1 - List all the pizza flavors \n2 - Add a new pizza flavor\n3 - Remove a pizza flavor\n4 - Exit this program\n"
  );

  let input = readlineSync.questionInt("Enter your action's number:");
  //console.log(input);

  switch (input) {
    case 1:
      list_flavours(pizza_list);
      get_menu();
    case 2:
      add_flavour(pizza_list);
      get_menu();
    case 3:
      remove_flavour(pizza_list);
      get_menu();
    case 4:
      //save(pizza_list);
      console.log("Goodbye");
      break;

    default:
      console.log("Wrong Value. Try Again.\n");
      readlineSync.question("Press Enter to exit.");
      get_menu();
  }
}

function list_flavours(arr) {
  //i need to wait before excitting this function
  //console.log('hello')
  if (arr.length === 0) {
    console.log("No pizza here");
  } else {
    for (pizza in arr) {
      console.log(arr[pizza] + " \n");
    }
  }
  readlineSync.question("Press Enter to exit.");
}

function add_flavour(arr) {
  let flavour;
  while (!flavour) {
    flavour = readlineSync.question("Whats your flavour: ");
    if (flavour) {
      arr.push(flavour);
      console.log("flavour added");
      readlineSync.question("Press Enter to exit.");
      break;
    } else {
      console.log("Try again");
    }
  }
}

function remove_flavour(arr) {
  item = readlineSync.question("which item  you want to remove? ");
  let index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
    console.log.apply("item removed");
  } else {
    console.log("invalid item");
  }
  readlineSync.question("Press Enter to exit.");
}

///saving to file doesent work yet
function save(arr) {
  console.log("test");
  var pizza_file = new Blob(arr, { type: "text/plain;charset=utf-8" });
  filesaver.saveAs(pizza_file, "pizza.txt");
}

get_menu();
