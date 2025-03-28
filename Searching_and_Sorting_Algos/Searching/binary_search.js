function BinarySearch(arr, key) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] != key && start <= end) {
        if (key <= arr[middle]) {
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === key ? middle : -1;
}

var arr = [1, 2, 3, 4, 5, 6, 33, 33, 45, 45, 77, -1];
arr = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(arr);
arr.sort((a, b) => a - b);
console.log(arr);
console.log(BinarySearch(arr, 33));
