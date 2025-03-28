//let 
let a = 10;
console.log(a);

/* let a = 20; 
 SyntaxError: Identifier 'a' has already been declared [Cannot redeclare a variable using let ] */

a = 20;
console.log(a); // 20 [Can reassign a value to a variable declared using let]

//const 

const b = 10;
console.log(b);

/* const b = 20;  SyntaxError: Identifier 'b' has already been declared [Cannot redeclare a variable using const ] */

/* b = 20;  TypeError: Assignment to constant variable. [Cannot reassign a value to a variable declared using const] */

//var 
var c = 10;
console.log(c);

var c = 20; // [Can redeclare a variable using var ]
console.log(c); // 20 [Can reassign a value to a variable declared using var]

c = 30;
console.log(c); // 30 [Can reassign a value to a variable declared using var]