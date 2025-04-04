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