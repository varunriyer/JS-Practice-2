var arr = [1, 2, 3];
var string = "Hello";
var num = 5;
var obj = { name: "Varun" };

//Check if array using Array.isArray()
console.log(Array.isArray(arr));
console.log(Array.isArray(string));
console.log(Array.isArray(num));
console.log(Array.isArray(obj));

//Using instanceof (not as reliable as above method)
console.log(arr instanceof Array);
console.log(string instanceof Array);
console.log(num instanceof Array);
console.log(obj instanceof Array);