// Simple Array 

arr = ["red", "blue", "green"];
console.log(arr);
arr = [8, 9, 10];
console.log(arr);

//Other Ways you can create an array 

arr = [
    "Car",
    "Bike",
    "Bus"
];
console.log(arr);

arr = [];
arr[0] = 3;
arr[1] = 4;
arr[2] = 5;
console.log(arr);

// You can use new keyword with Array() but it is not required and it is better to easily create it using the above methods
arr = new Array(1, 2, 3);
console.log(arr);

//Accessing an Array Element 
arr = ["dog", "cat", "fish"];
console.log(arr[1]); //cat

// Changing an Array Element 
arr[2] = "horse";
console.log(arr);

//Converting an Array to a String 
arr = ["Apple", "Orange", "Banana", "Grape"];
console.log(arr.toString()); //Output --> Apple,Orange,Banana,Grape

//Arrays are a special type of object 
arr = [1, 2, 3];
console.log(typeof (arr)); //returns object 

//Array Properties & Methods 
arr = [1, 2, 3, 10, 7];
console.log(arr.length); //returns length of array --> 5
console.log(arr.sort()); // sort in an array sorts the array with respect to strings 

//to sort numbers we need to create a function 
console.log(arr.sort(function (a, b) { return a - b })); //ascending order
console.log(arr.sort(function (a, b) { return b - a })); //descending order

//Math.min() and Math.max() on an Array 
function minArray(arr) {
    return Math.min.apply(null, arr);
}
console.log(minArray([1, 2, 3, -3, 99]));

function maxArray(arr) {
    return Math.max.apply(null, arr);
}
console.log(maxArray([9, 2, 1, 99, 101, -3]))

// Sorting an Array in Random Order 
arr = [1, 2, 3, 4, 5];
console.log(arr.sort(function () { return 0.5 - Math.random() }));

// Converting Array into String using join()
arr = ["Big", "Small", "Medium"];
console.log(arr.join("-->")); //joins the array elements and returns a string 

//Popping and Pushing Elements in an Array 
arr = [7, 8, 9, 10, 11];
console.log(arr.pop()); // 11
arr.push(17);
console.log(arr); //[7,8,9,10,17]

//shift() and unshift() methods 
arr = [3, 4, 5, 6, 7];
console.log(arr.shift()); //.shift() displays the element which is removed from the array
console.log(arr); //shift removes the first element of the array and shifts all other elements to a lower index

arr = [2, 3, 4, 5];
console.log(arr.unshift(1)); //this displays the leftmost element
console.log(arr); //unshift adds an element to the first index of the array and moves all the remaining elements to the right 


//Changing elements in an array 
arr = ["monday", "tuesday", "wednesday"];
console.log(arr[0]);
arr[0] = "sunday";
console.log(arr[0]);

//array.length
arr = ["hi", "bye", "thanks"];
console.log(arr);
arr[arr.length] = "welcome"; //easy way to append a new element to an array 
console.log(arr);

//Deleting elements from Array 
arr = [1, 2, 3, 4, 5];
delete arr[0];
console.log(arr); //using delete leaves undefined holes in the array - hence it is preferred to use pop() or shift() instead

//Merging Arrays 
arr1 = [0, 1, 2, 3, 4];
arr2 = [5, 6, 7, 8, 9];
arr3 = [-1];
console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1, arr3)); //You can also pass a string as an argument to concat instead of an array

//copyWithin() function - copies array elements to another position in an array 
// This function overwrites the existing values, does not add items to the array, keeps the length the same

arr = ["a", "b", "c", "d", "e"];
console.log(arr.copyWithin(2, 0)); // Copy to index 2, all elements from index 0 ; Output - [ 'a', 'b', 'a', 'b', 'c' ]
arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr.copyWithin(2, 0, 3)); // Copy to index 2, the elements from index 0 to 2(3-1) ; Output - [ 'a', 'b', 'a', 'b', 'c', 'f' ]

//flat() function - to reduce the dimensionality of an array
arr = [[1, 2], [3, 4], [5, 6]]
console.log(arr.flat()); // flattens the array and returns output - [1,2,3,4,5,6]

//flatMap() - maps all elements of an array and then creates a new array by flattening the array 
arr = [1, 2, 3, 4, 5];
console.log(arr.flatMap(x => [x, x * 10])); //Output - [1,10,2,20,3,30,4,40,5,50];


//Splicing and Slicing Arrays 

//Splice()
arr = ["Apple", "Orange", "Banana", "Kiwi"];
console.log(arr.splice(2, 0, "Lemon", "Guava")); //Splice() can be used to add elements to an array. 2 indicates the position where the new elements need to be added, 0 indicates the number of elements to be deleted. Splice returns the array with deleted elements
console.log(arr); //After above splice(), Output - [ 'Apple', 'Orange', 'Lemon', 'Guava', 'Banana', 'Kiwi' ]

console.log(arr.splice(1, 2, "Lychee")); // Deleted elements, Output - [ 'Orange', 'Lemon' ]
console.log(arr); // [ 'Apple', 'Lychee', 'Guava', 'Banana', 'Kiwi' ] 

console.log(arr.splice(0, 2)); //Splice() can be used to remove elements ; Removes - [ 'Apple', 'Lychee' ]
console.log(arr); //Output - [ 'Guava', 'Banana', 'Kiwi' ]

//toSpliced()

arr = [1, 2, 3, 4, 5];
new_arr = arr.splice(2, 1); //The slice() fucntion slices out a piece of the original array into a new array but the orignal array is changed 
console.log(new_arr);
console.log(arr); //The original array is changed 

arr = [1, 2, 3, 4, 5];
new_arr = arr.toSpliced(2, 1); //The toSliced() fucntion removes the element and returns the new array without affecting the original array 
console.log(new_arr);
console.log(arr); //The original array is unchanged 

//slice() - slices out a piece of an array into a new array 
arr = [1, 2, 3, 4, 5];
new_arr = arr.slice(2);
console.log(new_arr); //slices out elements in index 0,1 and returns output - [ 3, 4, 5 ]
console.log(arr); //original array is not affected; Output - [ 1, 2, 3, 4, 5 ]

arr = [9, 8, 7, 6, 5];
console.log(arr.slice(2, 4)); //returns elements from index 2 to 3(4-1) ; Output - [7,6]
console.log(arr); //Original array unaffected

// toString() - converts an array to a comma separated string

arr = ["Jam", "Butter", "Honey"];
console.log(arr.toString()); // Output - Jam,Butter,Honey

// Array Searching 

//Array indexOf() - searches an array for an element value and returns its position 
arr = [1, 3, 5, 7, 9, 3];
console.log(arr.indexOf(3)); // returns 1 (1st index)
console.log(arr.indexOf(3) + 1); // returns 2 (we can add +1 for the position as array index starts count from 0 )
console.log(arr.indexOf(3, 3)); // returns 5 ( we have specfied to start searching the element from the 3rd index)
console.log(arr.indexOf(2)); // returns -1 (element is not present in the array)

//Array lastIndexOf() - similar to indexOf but used for last occurence
arr = [0, 2, 4, 6, 8, 4];
console.log(arr.lastIndexOf(4)) // returns 5
console.log(arr.lastIndexOf(4, -2)); // returns 2 (we have specifed to start searching the element from -2 index i.e 8)

// Array includes() function - used to check if an element is present in an array (including NaN, unlike indexOf)
arr = [1, 2, 3, 4, 5, NaN];
console.log(arr.includes(3)); //returns true
console.log(arr.includes(10)); //returns false
console.log(arr.includes(NaN)); //returns true
console.log(arr.indexOf(NaN)); //returns -1 even though NaN is present in the array 

//Array find() function - returns the value of the first array element that passes a test function 
arr = [4, 5, 6, 7, 8, 21];
console.log(arr.find(great5));

function great5(value, index, array) {
    return value > 5;
}

//findIndex() - returns the index of the first array element that passes a test function 
arr = [1, 2, 3, 4, 5];
console.log(arr.findIndex(even)); // returns 1 as the first index (2) is the first even number

function even(value, index, arr) {
    return value % 2 == 0;
}

//findLast() and findLastIndex() - similar to above 

temp = [27, 28, 30, 40, 42, 35, 30];
console.log(temp.findLast(x => x > 40)); // returns 42 

console.log(temp.findLastIndex(x => x > 40)); // returns 4 as it is the last index which satisifies the condition of the function

// Sorting an Array 

fruits = ["Banana", "Orange", "Kiwi", "Papaya", "Apple"];
console.log(fruits.sort()); //sort() method sorts an array alphabetically
arr = [5, 4, 3, 2, 1];
console.log(arr.reverse()); // reverses the array 

fruits = ["Banana", "Orange", "Kiwi", "Papaya", "Apple"];
console.log(fruits.toSorted()); // does not change the original array 
console.log(fruits);

arr = [5, 4, 3, 2, 1];
console.log(arr.toReversed()); //similar to above
console.log(arr);

//Numeric Sort

arr = [3, 7, 1, -3, 8, 14, 19, 22, 12];
console.log(arr.sort(function (a, b) { return a - b })); //returns sorted array in ascending order
console.log(arr.sort(function (a, b) { return b - a })); // returns sorted array in descending order 



