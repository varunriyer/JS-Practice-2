//without using toUpperCase()

function toUpper(string) {
    var new_string = "";
    var len = string.length;
    for (var i = 0; i < len; i++) {
        if (string.charCodeAt(i) > 65 && string.charCodeAt(i) > 90) {
            new_string += string[i]
        }
        else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            new_string += (string[i] - 32);
        }
        else {
            new_string += string[i];
        }
    }
    console.log(new_string);
}
var string1 = "Hello World!";
var string2 = "HII $$ete$$";
toUpper(string1);
toUpper(string2);


console.log("Hello!");

//Using toUpperCase()

console.log(string1.toUpperCase());
console.log(string2.toUpperCase());