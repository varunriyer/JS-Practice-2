function count_letters(str) {
    test_str = str.trim();
    test_str = test_str.toLowerCase();
    vowel = 0;
    consonant = 0;
    for (i = 0; i < test_str.length; i++) {
        console.log(test_str[i]);
        if (test_str.charCodeAt(i) >= 97 && test_str.charCodeAt(i) <= 122) {
            if (test_str[i] == 'a' || test_str[i] == 'e' || test_str[i] == 'i' || test_str[i] == 'o' || test_str[i] == 'u') {
                vowel++;
            }
            else {
                consonant++;
            }
        }
    }
    return `Number of vowels are = ${vowel} & Number of consonants are = ${consonant}`;
}

console.log(count_letters("Hello World!!!!"));
