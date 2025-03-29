var x = 10;
var y = 20;
console.log(x + y); //Addition with numbers 

x = "10";
y = "20";
console.log(x + y); //Concatenation with strings 

x = 10;
y = "20";
console.log(x + y); //Number + String = String
console.log(y + x); //String + Number = String

x = 10;
y = 20;
console.log("The result is = " + x + y); //We will expect this to give 30 but it concatenates

x = "10";
y = "2";
//JavaScript will convbert string to numbers in all cases except '+'
console.log(x / y); //5
console.log(x * y); //20
console.log(x - y); //8
console.log(x + y); //102

