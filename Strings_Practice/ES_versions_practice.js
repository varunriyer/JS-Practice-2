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