// toString() 
x = 5;
console.log(x.toString()); //converts into a string 
console.log((100 + 5).toString());

// toExponential()
num = 7.314;
console.log(num.toExponential()); // 7.314e+0
console.log(num.toExponential(2)); // 7.31e+0
console.log(num.toExponential(5)); // 7.31400e+0
console.log(7.615.toExponential(0)); // 8e+0

// toFixed()
num = 9.314
console.log(num.toFixed()); // 9
console.log(num.toFixed(2)); // 9.31
console.log(num.toFixed(5)); // 9.31400
console.log(num.toFixed(1)); // 9.3


// toPrecision()
num = 3.141
console.log(num.toPrecision()); //3.141
console.log(num.toPrecision(2)); //3.1
console.log(num.toPrecision(5)); //3.1410
console.log(num.toPrecision(1)); //3 (cannot put 0 in toPrecision())

//valueOf function can be used while working with objects

//Number Method()
console.log(typeof (Number(true)));
console.log(typeof (Number(false)));
console.log(typeof (Number("10")));
console.log(typeof (Number("  10")));
console.log(typeof (Number("10  ")));
console.log(typeof (Number(" 10  ")));
console.log(typeof (Number("10.33")));
console.log(typeof (Number("10,33")));
console.log(typeof (Number("10 33")));

text = "Hello";
conv_text = Number(text); //Number() method return NaN when it cannot be converted into number
console.log(conv_text);

//Number method can also convert a date to a number 
console.log(Number(new Date("1970-09-27"))); // returns the milliseconds since the provided date 

//parseInt() method parses a string and returns a integer. Spaces are allowed. Only the first number is returned. 
console.log(parseInt("-10.33")); //returns -10
console.log(parseInt("10.33")); //returns 10
console.log(parseInt("10 years old.")); // returns 10
console.log(parseInt("years old 10.")); // returns NaN
console.log(parseInt("years old.")); // returns NaN

//parseFloat() - similar to above but returns a real number
console.log(parseFloat("-10.33")); //returns -10.33
console.log(parseFloat("10.33")); //returns 10.33
console.log(parseFloat("10 years old.")); // returns 10
console.log(parseFloat("years old 10.")); // returns NaN
console.log(parseFloat("years old.")); // returns NaN

//There are also Number object methods() --> these cannot be used with variables but can only be used with objects (will work on it later in detail)
// They are as follows - Number.isInteger(), Number.isSafeInteger(), Number.parseFloat(), Number.parseInt()


