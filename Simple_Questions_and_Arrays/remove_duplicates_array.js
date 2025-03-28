//Using Set Method ( we convet into a set and then convert it back into an array )
var arr = [1, 1, 1, "1", "1", 2, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7, 7, 7];
var set = new Set(arr);
var new_arr = [...set]; //... converts array into a set and back to array
console.log(new_arr);

//Using filter() methdod
var arr = [3, 3, 3, 4, 4, 4, 1, 2, 3, 0];
new_arr = arr.filter((item, index) => arr.indexOf(item) === index); // Can also create this a function and then pass the original array then will not have to create a new array 
console.log(new_arr);

//Using forEach with includes
var a = [10, 20, 20, 30, 40, 50, 50];
var a1 = [];
a.forEach(element => {
    if (a1.includes(element) == false) {
        a1.push(element);
    }
});

console.log(a1);

//Using reduce() with includes 
var a = [10, 20, 20, 30, 40, 50, 50];
var a1 = a.reduce(function (acc, curr) {
    if (!acc.includes(curr)) { // Same as writing == false
        acc.push(curr);
    }

    return acc;
}, []);

console.log(a1)
