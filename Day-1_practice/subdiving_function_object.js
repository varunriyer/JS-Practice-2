function greet() {
    console.log("Hello!");
}

let obj = { colour: "Red", model: "SUV" };

console.log(typeof (greet)); //This is working now - maybe in previous versions this could not identify this as a function 
console.log(typeof (obj));

console.log(typeof greet === "function");
console.log(typeof person === "function");

