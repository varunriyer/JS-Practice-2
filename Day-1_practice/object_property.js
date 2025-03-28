let obj = { name: "Sam", age: 21, city: "New York" };

//Object Property Checking using in operator 

console.log("name" in obj);
console.log("roll no" in obj);

//Object Property Checking using hasOwnProperty() 

console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("roll no"));

