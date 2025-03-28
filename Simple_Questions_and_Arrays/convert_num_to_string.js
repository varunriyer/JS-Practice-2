// Using tostring() 
var num = 5
console.log(typeof (num));
var numstring = num.toString();
console.log(typeof (numstring));

// Without using tostring()
var new_string = "" + num;
console.log(typeof (new_string));
console.log(typeof (String(num)));