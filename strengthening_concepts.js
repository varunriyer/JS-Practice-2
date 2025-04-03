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

//map() method - provides the new array and maps the condition provided to each value of the array. It does not modify the original array.
//Convert an array with temp in C to F 
{
    let temps = [18, 43, -4, 23, 5];
    console.log(temps.map(c => (c * 9 / 5) + 32));
    temps.forEach(c => console.log((c * 9 / 5) + 32)); //how forEach would work for the same question
}

//Use map to calculate the cube of all the numbers in the array 
{
    let nums = [1, 2, 3, 4, 5];
    console.log(nums.map(cube => cube ** 3));
}

// Create an array of strings in the format "Name: [name], Age: [age] from objects"
{
    let person = [{ name: "Varun", age: 22 }, { name: "Samuel", age: 43 }];
    console.log(person.map(user => `${user.name} - ${user.age} years old`));
}

//reduce() method - it reduces all the values of an array into a single value. It does not change the original array.
//Calculate the total amount of a shopping cart 
{
    let cart = [{ item: "Milk", price: 40 }, { item: "Bread", price: 52 }];
    console.log(cart.reduce((total, x) => total + x.price, 0));
}

// Group words by their length into an object
{
    let words = ["apple", "banana", "kiwi", "mango"];
    let grouped = words.reduce((acc, word) => {
        let length = word.length;
        acc[length] = acc[length] || [];
        acc[length].push(word);
        return acc;
    }, {});
    console.log(grouped);
}

