//Basic Arithmetic Addition
let a = 5;
let b = 7;
let sum = a + b;
console.log(sum);

//String Concatentation
let firstName = "Varun";
let lastName = "Iyer";
let fullName = firstName + " " + lastName;
console.log(fullName);

//Array Sum using .reduce()
let arr = [1, 2, 3, 4, 5];
let sum_array = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum_array);

let arr2 = [1, 2, 3];
let alt_way = arr2.re
reduce((partial_Sum, a) => partial_Sum + a, 0); //The reason we put ,0 is so that if it is empty it will return 0 or else we will get a Typescript error
console.log(alt_way);


//Testing concatenation
console.log(5 + 3 + "hi");