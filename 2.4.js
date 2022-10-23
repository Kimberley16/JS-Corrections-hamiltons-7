/*for (let i = 0; i <= 100; i++) {
  console.log((i /= 2));
}*/
let i = 0;

while (i <= 100) {
  if (i % 2 === 0) {
    console.log(i / 2);
    i++;
  } else {
    console.log(i * 3);
    i++;
  }
}
