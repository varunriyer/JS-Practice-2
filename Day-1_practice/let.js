if (1 < 2) {
    let x = 5;
    console.log(x);
}
// console.log(x + 5); --> This will give an error

if (1 < 2) {
    var y = 5;
    console.log(y);
    var y = 10;
    console.log(y);
}
console.log(y + 5); // --> This will not give an error


const j = 3
console.log(j);
// j = 8; This will give error for const
// console.log(j);