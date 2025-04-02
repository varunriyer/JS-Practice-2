//Array entries 
{
    let arr = ["Red", "Blue", "Green"];
    let iterator = arr.entries();

    for (let [index, color] of iterator) {
        console.log(`Index is ${index} and color is ${color}`);
    }
}

//Array.from()

console.log(Array.from("ABCDEFG"));
console.log(Array.from(`123,ere,test`));

//Array keys() - returns an array iterator object with the keys of an array
{
    let arr = ["Apple", "Banana", "Pineapple"];
    let keys = arr.keys();

    let txt = "";
    for (let x of keys) {
        txt += x + " ";
    }
    console.log(txt);
}

//Array find() - returns value of first element satisifying the condition
{
    let arr = [9, 8, 7, 6, 5, 21, 47];
    let first = arr.find(first_occ);
    function first_occ(value, index, arr) {
        return value > 18
    }
    console.log(first); //21
}

//Array findIndex() - returns first index satisifying the condition 
{
    let arr = [9, 8, 7, 6, 5, 21, 47];
    let first = arr.findIndex(first_occ);
    function first_occ(value, index, arr) {
        return value > 18
    }
    console.log(first); //5
}

//New Math methods
{
    //Math.trunc - integer part of a value
    console.log(Math.trunc(3.14)); //3
    console.log(Math.trunc(-3.14)); //-3
    console.log(Math.trunc(3.74)); //3

    //Math.sign - returns if x is negative, null or positive 
    console.log(Math.sign(3.2)); //1 
    console.log(Math.sign(-3)); //-1
    console.log(Math.sign(0)); //0 
    console.log(Math.sign("hello")); // NaN


    //Math.cbrt - returns cube rrot of x 
    console.log(Math.cbrt(27)); //3
    console.log(Math.cbrt(-15)); //-2.666....
    console.log(Math.cbrt("Test")); //NaN

    //Math.log2 and Math.log10 - logarithm of x with base 2 and 10 respectively
    console.log(Math.log2(19));
    console.log(Math.log10(100));
}

//New Number Properties 
{
    console.log(Number.EPSILON); //2.220446049250313e-16
    console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
    console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
}

//isInteger() &* isSafeInteger() methods 
{
    console.log(Number.isInteger(21)); //true
    console.log(Number.isInteger(-21)); //true
    console.log(Number.isInteger(21.3)); //false
    console.log(Number.isInteger(10 / 2)); //true
    console.log(Number.isInteger(21 / 5)); //flase
    console.log(Number.isInteger("3")); //false

    console.log(Number.isSafeInteger(45)); //true
    console.log(Number.isSafeInteger(-393993)); //true
    console.log(Number.isSafeInteger(2222222222222222222222222)); //false
    console.log(Number.isSafeInteger(2.3)); //false
}

//New Global Methods
{
    //isFinite() - returns false if it is not finite number
    console.log(isFinite(10 / 2)); //true
    console.log(isFinite(10 / 0)); //false
    console.log(isFinite("test")); //false

    //isNaN() - returns true if the argument is Not a Number 
    console.log(isNaN(90 / 23)); //false
    console.log(isNaN("Hello")); //true
    console.log(isNaN(10 / 0)); //false 
}

//END OF ES6

//Start of ECMAScript 2016 

// JS Exponentiation 
{
    let x = 5;
    console.log(x ** 2); //25
    console.log(x ** -2); //0.04
    console.log(x ** 0); //1
    console.log(25 ** (1 / 2)); //5

    //JS Exponentiation works in the same way as Math.pow
    console.log(Math.pow(x, 2)); //25

    //Exponentitation Assignment 
    let y = 4;
    y **= 2;
    console.log(y); // 16
}

//Array.includes()
{
    let nums = [1, 3, 5, 7, 9];
    console.log(nums.includes(3)); //true
    console.log(nums.includes(8)); //false
}

//End of ECMAScript 2016  

//Start of ECMAScript 2017

//String Padding
{
    let text = "7";
    console.log(text.padStart(4, 0)); //0007
    console.log(text.padStart(3, "x")); //xx3
    console.log("3".padEnd(4, 1)); //3111
    console.log(text.padEnd(5, "x")); //7xxxx
}