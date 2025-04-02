//Array entries 
{
    let arr = ["Red", "Blue", "Green"];
    let iterator = arr.entries();

    for (let [index, color] of iterator) {
        console.log(`Index is ${index} and color is ${color}`);
    }
}

//Array.from()

console.log(Array.from("ABCDEFG"));
console.log(Array.from(`123,ere,test`));

//Array keys() - returns an array iterator object with the keys of an array
{
    let arr = ["Apple", "Banana", "Pineapple"];
    let keys = arr.keys();

    let txt = "";
    for (let x of keys) {
        txt += x + " ";
    }
    console.log(txt);
}
