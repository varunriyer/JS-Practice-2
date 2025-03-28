function BubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 1; j < len; j++); {
            if (arr[i] > arr[j]) {
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
var arr = [2, 12, 9, -3, 11, 0, 11];
console.log(arr);
console.log(BubbleSort(arr));