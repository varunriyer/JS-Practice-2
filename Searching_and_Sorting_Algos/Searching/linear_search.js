function LinearSearch(arr, key) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}
var arr = ["Sam", "Ram", "Sid", "Shyam", "Ram", 1];
console.log(LinearSearch(arr, "Joe"));
console.log(LinearSearch(arr, "Ram"));
console.log(LinearSearch(arr, 'Sid'));
console.log(LinearSearch(arr, 1));
console.log(LinearSearch(arr, "1"));