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

