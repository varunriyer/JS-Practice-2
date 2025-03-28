//Using for loop (manually)
var arr = [1, 2, 3, 4, 5];
var sum = 0;
for (i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

//Create a function 
function arraySum(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(arraySum([1, 3, 5, 7]));

//Using Reduce()
var arr = [1, 1, 1, 23];
var sum = arr.reduce(function (x, y) {
    return x + y;
}, 0);
console.log(sum);

//Using forEach()
var arr = [9, 8, 7, 6];
var sum = 0;
arr.forEach(x => {
    sum += x;
});
console.log(sum);

//Using Recursion 
var arr = [2, 4, 6, 8, 10];
function SumArray(arr, i) {
    if (i === arr.length) {
        return 0;
    }
    return arr[i] + SumArray(arr, i + 1);
}
console.log(SumArray(arr, 0));