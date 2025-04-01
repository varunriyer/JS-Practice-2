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

