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

