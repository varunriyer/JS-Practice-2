//Using For loop (manually)
var arr = [1, 2, 3, 4, 4, -1, -2, -2, 77];
var min, max;
if (arr.length === 0) {
    console.log("Empty Array");
}
if (arr.length === 1) {
    console.log(`Max and Min are = ${arr[0]}`);
}
if (arr.length > 1) {
    min = arr[0];
    max = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }
        if (arr[i] <= min) {
            min = arr[i];
        }
    }
    console.log(`The maximum number in ${arr} is ${max}`);
    console.log(`The minimum number in ${arr} is ${min}`);
}

//Using Sorting 
var arr = [1, 24, 5, 43, 21, -23, 0.5, 99, 101, 7];
arr.sort((a, b) => a - b);
min = arr[0]
console.log(`Minimum is ${min}`);

arr.sort((a, b) => b - a);
max = arr[0]
console.log(`Maximum is ${max}`);

arr = [1, 2, -1, -2, 77, 101, 3];
console.log(arr.sort()); // Cannot use sort alone as default sort() function sorts values as strings 