function CountOccurences(arr, key) {
    var len = arr.length;
    for (i = 0; i < len; i++) {
        if (arr[i] === key) {
            console.log(`${key} is present in ${i}th position of the array`);
        }
    }
}