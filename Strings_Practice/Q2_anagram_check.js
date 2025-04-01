function check_anagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    str1 = str1.trim();
    str2 = str2.trim();
    sum1 = 0;
    sum2 = 0;
    for (i = 0; i < str1.length; i++) {
        sum1 += str1.charCodeAt(i)
    }
    for (i = 0; i < str2.length; i++) {
        sum2 += str2.charCodeAt(i)
    }
    if (sum1 == sum2) {
        return "are Anagrams";
    }
    else { return "are not Anagrams"; }
}

str1 = " god";
str2 = "Dog";
console.log(`${str1} and ${str2} ${check_anagram(str1, str2)}`);