let obj1 = { a: 10, b: 20 };
let obj2 = { a: 10, b: 20 };
let obj3 = { a: 10, b: "20" };

console.log(obj1 == obj2);
console.log(obj1 === obj2);

console.log(obj1 == obj1);
console.log(obj1 === obj1);

let obj4 = { a: 1 };
let obj5 = { a: 1 };
console.log(Object.is(obj4, obj5)); //Object.is similar to === (handles NaN and -0 differently)  
console.log(Object.is(obj4, obj4));

//JSON.stringify() to convert objects into string and then comparing

let objx = { a: 5, b: 7 };
let objy = { a: 5, b: 7 };

console.log(JSON.stringify(objx) === JSON.stringify(objy));