var str = "aabbbccdeeffghd";
var new_str = "";

for (i = 0; i < str.length; i++) {
    let check = 0;
    for (j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
            check = check + 1;
        }
    }
    if (check > 1) {
        new_str += str[i];
    }
    else {
        new_str += str[i];
        break;
    }
}
console.log(`Result is : ${new_str}`);