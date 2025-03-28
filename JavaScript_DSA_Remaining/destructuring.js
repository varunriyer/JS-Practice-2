//basic working 

var arr = [1, 2, 3];
var [one, two, three] = arr;
console.log(one);

var arr = ["red", "orange", "green"];
var [r, o, g] = arr;
console.log(o);

var arr = [9, 8, 7];
var [nine, ...rem] = arr;
console.log(rem);

var arr = [undefined, "Sam", "Smith"];
var [initial = "Mr.", firstName, lastName] = arr;
console.log(initial + " " + firstName + " " + lastName);

//Destructuring to Swap 2 variables 
var a = 7;
var b = 11;
[a, b] = [b, a];
console.log(a);
console.log(b);

//Destructuring to Swap 2 elements in an array 
var colors = ["red", "green", "blue"];
[colors[0], colors[2]] = [colors[2], colors[0]];
console.log(colors);

//Assigning values from array to variables
var colors = ["red", "blue", "green", "black", "white"];
var [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// Extract Values from Objects 

const Person1 = {
    firstName: "John",
    lastName: "Jones",
    age: 40,
    job: "Fighter",
}
const Person2 = {
    firstName: "Tom",
    lastName: "Aspinal",
    age: 23,
}

var { firstName, lastName, age, job } = Person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

var { firstName, lastName, age, job = "Unemployed" } = Person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//Destructure in Function Parameters 
function displayPerson({ firstName, lastName, age, job = "unemployed" }) { //can set default property 
    console.log(`The name is ${firstName} ${lastName}. I am ${age} years old and my job is ${job}`);
}

displayPerson(Person1);
displayPerson(Person2);
