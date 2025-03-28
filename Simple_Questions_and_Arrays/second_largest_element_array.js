function secondLargest(arr) {
    var max, second_max;
    if (arr.length === 0) {
        console.log("Empty Array");
        return;
    }
    if (arr.length === 1) {
        console.log("Only 1 element, hence no second largest");
    }
    max = arr[0];
    second_max = arr[1];
    if (arr.length >= 2) {
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];


            }
            if (arr[i] < max && arr[i] > second_max) {
                second_max = arr[i];

            }
        }
        console.log(`The second largest element in ${arr} is = ${second_max}`);
    }
}
var arr1 = [];
var arr2 = [1];
var arr3 = [2, 1];
var arr4 = [9, 8, 33, 12, -1, 0];
var arr5 = [1, 2, 3, 3, 4, 6, 6, 7, 7];
var arr6 = [-1, 3, 9, 11, 0, 4, 6, 8, 10];
secondLargest(arr1);
secondLargest(arr2);
secondLargest(arr3);
secondLargest(arr4);
secondLargest(arr5);
secondLargest(arr6);
