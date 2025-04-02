var str = "   Hello world!!     ";
console.log(str.trim());

//forEach()
var txt = "";
var numbers = [45, 2, 10, 32, 10];
numbers.forEach(myFunction);

function myFunction(key) {
    txt = txt + key * 2 + " ";
}
console.log(txt);
console.log(" ");
console.log(numbers);


// Property getters and setters 
var person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName);

var person = {
    name: "Helen",
    age: 23,
    language: "No",
    get lang() {
        return this.language;
    },
    set lang(value) {
        this.language = value;
    }
};

person.lang = "en";

console.log(person.lang);

//setter method to convert language to UPPERCASE 

var person = {
    name: "Jane",
    age: 22,
    language: "NULL",
    set lang(value) {
        this.language = value.toUpperCase();
    }
};
console.log(person.language);

person.lang = "hindi";
console.log(person.language);

//Object.defineProperty()

var Fruit = {
    color: "Red",
    seed: true
};

Object.defineProperty(Fruit, "flower", {
    value: "Yes",
    writable: true,
    enumerable: true,
    configurable: true
});

var txt = "";
for (var x in Fruit) {
    txt += Fruit[x] + " ";
}
console.log(txt);

//Object.create()

var person = {
    name: "Kyrie",
    age: 32,
    job: "Athlete"
};

console.log(person);

var per1 = Object.create(person);
per1.name = "James";
per1.age = 22;
console.log(per1);

//Object.keys()
var Car = {
    brand: "Tata",
    model: "SUV",
    mileage: 22.7
};

console.log(Object.keys(Car));

//bind() function

var User = {
    firstName: "James",
    lastName: "Jones",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(User.fullName());

var Guest = {
    firstName: "John",
    lastName: "David",
};

var fullName = User.fullName.bind(Guest);
console.log(fullName());

//Trailing Commas 
var obj = {
    name: "Joe",
    age: 22,
    gender: "M", //Trailing commas allowed in objects
};
console.log(obj);

var arr = [1, 2, 3, 4, 5, 6, 7,]; //Trailing commas allowed in arrays 
console.log(arr);

// console.log(JSON.parse(obj)); - not allowed as JSON does not support trailing commas

var obj = '{ "name": "Love", "age": 33 }';
console.log(JSON.parse(obj));

//ES6 JS Version

//let keyword

let num = 10;
console.log(num);
{
    let num = 2;
    console.log(num);
}
{
    let num = 4;
    console.log(num);
    num = 7; //can update the value of variable even inside the same block
    console.log(num);
    // let num = 10; //--> cannot redeclare the value within the same block
}

//const keyword

const d = "a";
console.log(d)
// {
//      const d = "b";
//      d = "c"; --> cannot reassign value to a const variable even outside the scope 

// }

//Arrow Functions 
var x = function (x, y) { // functions needed to be written ellaborately in ES5 
    return x * y;
}

console.log(x(2, 3));


var x = (x, y) => x * y; // from ES6 we can now use Arrow functions to perform the same function with a short syntax. No function keyword, no return and no curly brackets
console.log(x(2, 7));

//although it is better to keep the return statement and the curly brackets as it can only be omitted when it is a single statement. It is also good practice to use the const keyword for functions always as the function expression is always a constant value.

const test_func = (x, y) => {
    mul = x * y;
    return (mul / 2);
}
console.log(test_func(10, 3));

// Object Destructuring
var person = {
    firstName: "Jimmy",
    lastName: "McGill",
    age: 50,
    job: "lawyer"
};

console.log(person);
var { firstName, age } = person;
console.log(firstName, age);

//Array Destructuring 

var fruits = ["orange", "banana", "apple", "kiwi"];
var [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);

//Spread Operator 
var arr = [1, 2, 3, 4, 5];
var [a, b] = arr;
console.log(a, b);
var [a, b, ...rest] = arr;
console.log(a, b, rest);
var [a, , , ...rest] = arr;
console.log(a, rest);

//Object Destructuring - revision 

var obj = { a: 1, b: 2 };
var { a, b } = obj;
console.log(a, b);

//Using Spread operator to convert array into object 
var arr = ["cat", "bat", "mat"];
var obj = { ...arr };
console.log(obj); // automatically assigns keys 0,1,2

var arr = [3, 4, 5];
function sum(v1, v2, v3) {
    return v1 + v2 + v3;
};
console.log(sum(...arr));

var person = {
    name: "Loki",
    age: 31,
    company: "xyz",
};

console.log({ ...person, name: "Justin" }); //Spread operator can be used in the given way to update properties of object 

console.log({ name: "James", company: "abc", ...person }); // This will print person as it is without overriding

//For/of loop - Looping over an Array 

var cars = ["BMW", "Volvo", "Skoda"];
var txt = "";
for (var x of cars) { //for of loop in JS 
    txt += x + " ";
}
console.log(txt);

//for/of loop another example

var nums = [2, 5, 9, 77, 0];
var sum = 0;
for (var x of nums) {
    sum += x;
}
console.log(sum);

// You can also loop over a string using for/of loop 
var str = "JavaScript";
var txt = "";
for (var x of str) {
    txt += x;
}
console.log(txt);

//Sets with JavaScript 

var mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet); // only displays unique values 

var arr = [1, 1, 2, 33, 3, 3, 4, 4, 5];
var newSet = [... new Set(arr)];
console.log(newSet);

//JS Classes 

class Cars {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
};

var car1 = new Cars("Ford", 2021);
var car2 = new Cars("Tata", 2003);

console.log(car1);
console.log(car2);

//String.includes()

var str = "This is a test snippet!";
console.log(str.includes("test"));

//String.startsWith()
console.log(str.startsWith("That"));
console.log(str.startsWith("This"));
console.log(str.startsWith("this"));

//String.endsWith()
console.log(str.endsWith("!"));
