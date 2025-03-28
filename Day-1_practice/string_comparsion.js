let text1 = "Hello";
let text2 = "Hell";
let text3 = "Hi"
let text4 = "hello";

let result1 = text1 < text2; //Compares alphabetically
console.log(result1); //false

let result2 = text1 < text3; //Compares alphabetically
console.log(result2); //true

let result3 = text1 < text4; //Compares alphabetically
console.log(result3); //true

let text5 = "20";
let text6 = "5";
let result = text5 < text6; //Compares alphabetically
console.log(result); //false

let text7 = "What a very ";
text7 += "nice day!";
console.log(text7);

let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
console.log(x, y, z);

let text8 = "5" + 2 + 3; //First string then numbers gives plain concatenation
console.log(text8);

let text9 = 2 + 3 + "5"; //First numbers then string gives addition then concatenation  
console.log(text9);