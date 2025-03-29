var text = "Hello World!";

//Length of String
console.log(text.length);

//Extracting String Characters - 4 different methods 
console.log(text.at(3)); // returns 'l'
console.log(text.charAt(1)); // returns 'e'
console.log(text.charCodeAt(0)); // returns 72 (ASCII value of 'H')
console.log(text[4]); //returns 'o'

//Extracting String Parts 
console.log(text.slice(0, 5)); // returns 'hello' 0 is counted in slicing 5 is not counted (basically (0,5) --> indicated first 5 characters)
console.log(text.slice(6)); //returns 'World!' as end is not mentioned
console.log(text.slice(-5)); //returns 'orld!' --> negative counts from the back

//UpperCase and LowerCase
console.log(text.toUpperCase());
console.log(text.toLowerCase());

//Concatenation 
var text2 = "Today";
console.log(text.concat(" ", text2));
console.log(text + " " + text2); //Both the statements fucntion in the same way 

//Trim
var text3 = "       joke haha       ";
console.log(text3.trim());
console.log(text3.trim() + " " + " haha"); //trim removes whitespace from both sides of the string 

console.log(text3.trimStart() + " " + "haha"); //trimStart removes whitespace only at the start of the string
console.log(text3.trimEnd() + " " + "haha"); //similar to above

//String Padding 
var text = "5";
var padded = text.padStart(4, "0"); //pads 0 until it reaches the length 4
console.log(padded); // prints "0005"

var padded = text.padStart(4, "x");
console.log(padded); //prints "xxx5";

var num = 7;
var text = num.toString(); //padStart() is a string function so have to convert number to string
console.log(text.padStart(6, "o"));

var text = "jack";
console.log(text.padEnd(7, "x")); //similar to padStart() but till it reaches the end

//Replacing String 

var text = "Today is a good day!";
console.log(text.replace("good", "bad")); //prints 'Today is a bad day!'
console.log(text.replace("Good", "bad")); //prints 'Today is a good day!' (.replace() is case-sensitive)

console.log(text.replace(/GOOD/i, "bad")); //you can use /i flag to make it insensitive 

console.log(text.replace(/day/g, "night")); //you can use /g flag to make it global match 

var text = "Cats are animals. cats are pets";
console.log(text.replaceAll(/Cats/gi, "Dogs"));

//Converting string to an array 
var text = "1,2,3,4,5"
console.log(text.split(","));
console.log(text[2]);

var text = "A E I O U"
console.log(text.split(" "));

var text = "Hello";
console.log(text.split(""));

//String Search 
var text = "Today is 1 fine day!"
console.log(text.indexOf("is")); //returns first index of the string (Output: 6)
console.log(text.indexOf("bad")); // returns -1 if not found 

console.log(text.indexOf("day")); //returns first index (2)
console.log(text.lastIndexOf("day")); //returns last index (16)

console.log(text.indexOf("day", 10)); //we can provide the starting point from where it has to seach the index as well 

console.log(text.indexOf(/Day/i)); // returns -1 (indecOf() cannot be used to search regular expressions)
console.log(text.search(/DAY/i)); // returns 2 and hence is used with regular expressions [but search cannot take the second value parameter to specify from where to start searching]

var text = "Rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/gi));



