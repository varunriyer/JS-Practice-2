{
    function maxArray(arr) {
        return Math.max(...arr);
    }
    console.log(maxArray([9, 2, 1, 99, 101, -3]));
}

{
    let arr = [1, 2, 3, 4];
    console.log();
}

{
    let arr = [1, 2, 3, 4, 5];
    let new_arr = arr.slice(2, 3);
    console.log(new_arr);

    let str = "Hello World How are you I am World ?";

    // let new_str = str.split(" ");
    // let index = new_str.lastIndexOf("World");
    // console.log(new_str.length, index)
    // console.log(new_str.splice(index, 1, "Life"));
    // console.log(new_str.join(" "));
    let new_str = str.replace
    console.log(new_str, str);
}
{
    let arr = [3, 4, 5, 6, 7];
    console.log(arr.shift()); //.shift() displays the element which is removed from the array
    console.log(arr); //shift removes the first element of the array and shifts all other elements to a lower index
}
{
    let arr = [1, 2, 3, 4];
    console.log(arr.pop());
    console.log(arr);
}
{
    const temp = [27, 28, 40, 42, 35, 30];
    let pos = temp.findLastIndex(x => x > 40);
    console.log(pos);
    console.log(temp.includes(42, -1));
}

/* Question 1: Split Sentences into Words
Write a function splitAllWords that:
Takes an array of sentences (strings).
Uses flatMap() to split each sentence into words and returns a single array of all words. */

{
    const splitAllWords = (sentences) => sentences.flatMap(sentence => sentence.split(" "));
    console.log(splitAllWords(["Hello World", "JavaScript is fun"]));
}

/* Question 2: Expand Numbers into Pairs
Write a function expandNumbers that:
Takes an array of numbers.
Uses flatMap() to return a new array where each number is replaced by itself and its square. */
{
    function expandNumbers(nums) {
        return nums.flatMap(x => [x, x ** 2]);

    };
    console.log(expandNumbers([1, 2, 3, 4, 5]));
}

{
    let str = "Hello,World";
    let arr1 = str.split(" ");
    let arr2 = Array.from(str);
    console.log(arr1);
    console.log(arr2);
    let pair = arr1.entries();
    for (let [index, value] of pair) {
        console.log(index, value);
    }
    let concat_arr = [...arr1, ...arr2]
    console.log(concat_arr);
}
{
    let num = 3.414;
    console.log(num.toFixed(2), num.toPrecision());
}
{
    let arr = [2, 3, 4, 5, 6];
    console.log(arr.fill(2));
    console.log(arr);
}
{
    let str = "hello,world";
    console.log(str.split("o"));
}
{
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.with(2, 1));
    console.log(arr);
    let str = "Hello";
    console.log(str.replaceAll("l", "w"));
}
{
    let name = "W3Schools";

    // Destructuring
    let [a1, , a2, , a3, , a4, , a5] = name;
    console.log(a1, a2, a3, a4, a5);

    let a = "Hello";
    let b = "World!";
    [a, b] = [b, a];
    console.log(a, b);
}
{
    a = 5;
    console.log(a);
    var a;
}
{
    let str = "Hello today i,s a good day";
    console.log(str.split(/[o, ]/));
}