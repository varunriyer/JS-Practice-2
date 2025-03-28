var arr = [13, 2, 7, 10, 12, 16, 4, 3, 17, 1];
var sum = 0;
if (arr.length > 1) {
    for (j = (arr.length - 1); j > 0; j--) {
        for (i = 0; i < j; i++) {
            if ((arr[j] - arr[i] > sum)) {
                sum = arr[j] - arr[i];
            }
        }
    }
}
else {
    console.log("Empty Array or only 1 element");
}
console.log(`The maximum profit is ${sum}`);
