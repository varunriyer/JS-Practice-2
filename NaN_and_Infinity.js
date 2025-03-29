//NaN - Not a number 

console.log(100 / "Apple"); //NaN
console.log(100 / "10"); //10

console.log(isNaN(100 / "Apple")); //true
console.log(isNaN(10 * 3)); //false

x = NaN;
y = 5;
console.log(x + y); //if you use NaN in mathematical operations --> result will also be NaN

console.log(x + "5"); //here result will be Nan5

console.log(typeof (NaN)); //NaN is a type of number --> result is 'number'

//Infinity 
x = 2
while (x != Infinity) {
    x = x * x;
    console.log(x);
}

console.log(10 / 0); //Infinity
console.log(-2 / 0); //-Infinity

console.log(typeof (Infinity)); //Infinity is also a type of number --> result is 'number'

