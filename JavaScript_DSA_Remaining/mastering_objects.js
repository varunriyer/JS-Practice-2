let person = {
    firstName: "William",
    lastName: "Butcher",
    age: 52,
    job: "Spy",
    fullName: function () {     //Methods (functions inside object)
        return this.firstName + " " + this.lastName;

    }
};
console.log(person.fullName()); //executes function
console.log(person.fullName); // returns function defintion 
person.nationality = "British"; //You can add properties later as well
console.log(person.nationality);
person.eyecolor = "blue";
console.log(person.eyecolor);
delete person["eyecolor"]; // You can delete properties as well
console.log(person)

let animal = {
    legs: 4,
    color: {    // Objects can have objects inside them (nested objects)
        color1: "red",
        color2: "blue",
        color3: "green",
    },
};

console.log(animal.color.color2);

//Displaying Properites in a Loop
var Car = {
    type: "Sedan",
    color: "black",
    price: 3000000,
};

var text = "";
for (let x in Car) {
    text += Car[x] + " ";
};

console.log(text);

//Using Object.values() - creates an array from property values
var myArray = Object.values(Car);
console.log(myArray);

//Using Object.entries() - makes it simple to use objects in loops
var fruits = { Bananas: 300, Oranges: 200, Apples: 500 };
var text = "";
for (let [fruit, value] of Object.entries(fruits)) {
    text += fruit + ": " + value + "\n";
}
console.log(text);

//JSON.stringify() - objects can be converted to a string 
var myString = JSON.stringify(Car);
console.log(myString);


//Creating & Using Constructor
function Hero(name, can_fly, color, identity) {
    this.name = name;
    this.can_fly = can_fly;
    this.color = color;
    this.identity = "Hero" // Can set a default value for a property
    this.toy = function () { // Constructor can also have methods
        return this.color + " " + this.identity;
    }
};

var hero1 = new Hero("Superman", true, "Red");
var hero2 = new Hero("Batman", false, "Black");
console.log(hero1);
console.log(hero2);
hero1.weakness = "Kryptonite";
console.log(hero1); // You can add a property to an object 

Hero.prototype.friends = "None";
console.log(hero2); // this does not show the friends property even though it has been added to the constructor as it was not defined intitially
console.log(hero2.friends); // we can still access it like this however

//Accessing function inside constructor
console.log(hero1.toy());

