//forEach() method - forEach() method basically gives the values based on the function. It does not change the original array.
//Find the square of all numbers present in array
{
    let arr = [1, 2, 3, 4, 5];
    arr.forEach(num => console.log(num ** 2));
}

//Append '!' to each sring
{
    let str = ["Hello", "World"];
    str.forEach(x => console.log(x + "!"));
}

//filter() method - filter() method provides a new array based on the elements satisfying the condition provided. It does not change the original array
//Filter out all the odd numbers from an array 
{
    let nums = [1, 2, 3, 4, 5, 6, 7];
    console.log(nums.filter(num => num % 2 != 0));
}

//Filter out all the ages which are greater than or equal 18 
{
    let ages = [13, 15, 17, 21, 23, 49, 4, 9];
    console.log(ages.filter(age => age >= 18))
}