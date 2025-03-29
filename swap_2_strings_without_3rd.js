str1 = "hello";
str2 = "bye";
str1 = str1 + str2;
str2 = str1.slice(0, (str1.length - str2.length));
str1 = str1.slice(str2.length);
console.log(str1);
console.log(str2);