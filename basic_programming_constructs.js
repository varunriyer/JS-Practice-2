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

//IIFE with arrow functions
{
    (() => {
        console.log("This is IIFE with arrow function");
    })();
}

//Use IIFE to display the current date and time 
{

    (() => {
        let date = new Date()
        console.log(`Current date and time is: ${date}`);
    })();
}

//Use an IIFE to create a private scope. Write an IIFE that declares a variable counter and increments it by 1. The variable should not be accessible outside the IIFE.
{
    (function () {
        let counter = 0;
        counter++;
        console.log(`Counter value is ${counter}`);
    })();

    //console.log(counter); - This would result in an error as counter is not in this scope and is part of the private scope of the function 
}

//Parameterized IIFE - Write an IIFE that accepts two numbers as arguments, adds them together, and logs the result.
{
    (function (num1, num2) {
        console.log(`Sum of ${num1} + ${num2} is equal to ${num1 + num2}`);
    })(3, 5);
}

//Bonus Question - Write an arrow function as an IIFE that calculates the factorial of a number passed as an argument.
{
    ((num) => {
        let fact = 1;
        for (let i = 1; i <= num; i++) { //Optimal way is to use recursion but recursion fails inside an IIFE
            fact *= i;
        }
        console.log(`The factorial of ${num} is ${fact}`);
    })(5);
}

//Factorial of a number using recursion - not using IIFE
{
    let factorial = (num => {
        if (num === 0 || num === 1) return 1;
        return num * factorial(num - 1);
    });
    let num = 7;
    console.log(`The factorial of ${num} is ${factorial(num)} `);
}

//Mastering working with Objects 
/*Create and Access Object Properties - Create an object named person with the following properties:
name: "Alice"
age: 25
city: "New York"

Write code to:
Access and log the name and age properties.
Add a new property occupation with the value "Engineer".
Update the city property to "San Francisco".

Expected Output:
Alice is 25 years old.
Occupation: Engineer
City: San Francisco */
{
    let person = {
        name: "Alice",
        age: 25,
        city: "New York"
    };

    console.log(`My name is ${person.name}. I am ${person.age} years old and I live in ${person.city}.`);

    let { name, age, city } = person; //Using destructuring makes the code cleaner and more optimal
    console.log(`My name is ${name}. I am ${age} years old and I live in ${city}.`);

    person.occupation = "Engineer";
    console.log(`My occupation is: ${person.occupation}`);

    person.city = "San Francisco";
    console.log(`Now I live in ${person.city}`);

    console.log(person);
}

/* Iterate Over Object Properties

Write code to:
Iterate over all properties using a for...in loop.
Log each property name and its value in the format: "key: value".

Expected Output:
name: Bob
age: 30
email: bob@example.com */
{
    let user = {
        name: "Bob",
        age: 30,
        email: "bob@xyz.com"
    };
    for (let key in user) {
        console.log(key + ":" + user[key]);
    }
}

/*Nested objects - Create an object named student with the following structure:
const student = {
  name: "Charlie",
  grades: {
    math: 90,
    science: 85,
    english: 88
  }
};

Write code to:
Access and log the student's science grade.
Add a new subject (history) with a grade of 92.
Calculate the average grade across all subjects.

Expected Output:
Science Grade: 85
History Grade Added.
Average Grade: 88.75 */

{
    let student = {
        name: "Charlie",
        grades: {
            math: 90,
            science: 85,
            english: 88
        }
    };

    let { name, grades } = student;
    let { math, science, english } = grades;

    console.log(`Name: ${name}`)
    console.log(`Science grade: ${science}`);

    grades.history = 92;
    console.log(`History grade added`);
    let total = Object.values(grades).reduce((sum, grade) => sum + grade, 0)
    let avg = total / Object.keys(student.grades).length;
    console.log(`Average grade: ${avg}`);

}

/* Object Methods - Create an object named calculator with the following methods:
add(a, b): Returns the sum of two numbers.
subtract(a, b): Returns the difference between two numbers.
multiply(a, b): Returns the product of two numbers.

Use these methods to perform calculations:
Add 5 and 10.
Subtract 15 from 20.
Multiply 6 by 7.

Expected Output:
Sum: 15
Difference: 5
Product: 42 */

{
    let calc = {
        add(num1, num2) { return `${num1} + ${num2} is = ${num1 + num2}`; },
        subtract(num1, num2) { return `${num1} - ${num2} is = ${num1 - num2}`; },
        multiply(num1, num2) { return `${num1} * ${num2} is = ${num1 * num2}`; },
        divide(num1, num2) { return num2 === 0 ? `Not allowed` : `${num1} / ${num2} is = ${num1 / num2}`; }
    };
    console.log(calc.add(5, 10));
    console.log(calc.subtract(20, 15));
    console.log(calc.multiply(6, 7));
    console.log(calc.divide(3, 3));
}


