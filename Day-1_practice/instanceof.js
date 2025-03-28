let arr = [1, 2, 3, 4];
let obj = { name: "Varun", age: 22 };

console.log(arr instanceof Array);
console.log(obj instanceof Object);
console.log(arr instanceof Object);

console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

// Applying .call() to Object.prototype.toString:
let a = 5;
let b = true;
let c = "Varun";
let d = [1, 2, 3];
let e = { name: "Varun", age: 22 };
let f = function () {
    console.log("Varun");
};

console.log(Object.prototype.toString.call(a));
console.log(Object.prototype.toString.call(b));
console.log(Object.prototype.toString.call(c));
console.log(Object.prototype.toString.call(d));
console.log(Object.prototype.toString.call(e));
console.log(Object.prototype.toString.call(f));


