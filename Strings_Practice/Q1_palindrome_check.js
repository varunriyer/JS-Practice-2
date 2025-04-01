function palindrome_check(str) {
    rev = str.trim();
    rev = rev.toLowerCase();
    rev = rev.split("").reverse()
    rev = rev.join("");
    console.log(rev);
    if (str.toLowerCase() === rev) {
        return "palindrome";
    }
    else { return "not a palindrome"; }

}

str = "Mom mom";
console.log(`${str} is ${palindrome_check(str)}`);
