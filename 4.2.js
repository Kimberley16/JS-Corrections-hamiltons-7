// function that returns a random integer

function rand10(min, max){
   return Math.floor(Math.random() * max - min + 1 ) + 1;
}

//  between 1 and 10

console.log(rand10(1,10));
