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

