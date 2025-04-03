//Checking if a function is a typeof of object
{
    function greet(name) {
        return `Yooo ${name}`;
    }
    console.log(greet("Jeremy"));
    console.log(typeof (greet)); //returns function 
}

//implementing switch-case as have not used it with javascript
{
    //Check if a color is part of RGB or not
    let color = "blue";
    switch (color) {
        case "red":
            console.log(`${color} is part of RGB`);
            break;
        case "green":
            console.log(`${color} is part of RGB`);
            break;
        case "blue":
            console.log(`${color} is part of RGB`);
            break;
        default:
            console.log(`${color} is not part of RGB`);
            break;
    }
}

//Reverse a string while keeping the words intact - practising this question as I just remembered about it 
{
    let str = "Hello World !!";
    let result = str.split(" ").reverse().join(" ");
    console.log(result);
}

//Mastering Arrow functions 
{
    //Use arrow function to create a function which calculates area
    let calcArea = (length, width) => length * width;
    console.log(calcArea(5, 2));

}

//Double the values of an array (use map and arrow functions)
{
    let arr = [1, 2, 3, 4, 0, 7];
    let double = arr.map(x => x * 2);
    console.log(double);
}

//Write an arrow function to create a function isEven() which takes a number and returns true or false if it is even or not respectively
{
    let isEven = (num) => console.log(num % 2 == 0 ? true : false);
    isEven(7);
    isEven(18);
    isEven(0);
}

//Bonus Question - Given an array of numbers, find the sum of all even numbers after doubling them.
{
    let final_sum = (nums) => console.log(nums.filter(num => num % 2 == 0).map(num => num * 2).reduce((x, sum) => sum + x));
    final_sum([1, 2, 3, 4, 5, 6]);
}

//Use arrow functions to concatenate two strings 
{
    let concat_strings = (str1, str2) => console.log(str1 + " " + str2);
    concat_strings("Hello", "World");
    concat_strings("3", "4");
}

//Immediately Invoked Function Expression (IIFE) - functions executed immediately after it is defined.
//IIFE is typically wrapped inside parantheses to make it an expression, followed by () to invoke it immediately 
//It is used to avoid polluting the global scope, encapsulation and to execute code immediately 
{
    (function () {
        console.log("This runs immediately!");
    })();
}

//IIFE with parameter
{
    (function (name) {
        console.log(`Hello ${name}`);
    })("Alice");
}