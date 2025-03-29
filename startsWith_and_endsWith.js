
//String startWith()

var text = "Hello World Hello Again!";
console.log(text.startsWith("hello")); //false
console.log(text.startsWith("Hello")); //true
console.log(text.startsWith("Hello", 7)); //false
console.log(text.startsWith("Hello", 12)); //true

//String endsWith()

console.log(text.endsWith("Again!")); //true