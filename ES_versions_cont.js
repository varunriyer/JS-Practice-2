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

//Array find() - returns value of first element satisifying the condition
{
    let arr = [9, 8, 7, 6, 5, 21, 47];
    let first = arr.find(first_occ);
    function first_occ(value, index, arr) {
        return value > 18
    }
    console.log(first); //21
}

//Array findIndex() - returns first index satisifying the condition 
{
    let arr = [9, 8, 7, 6, 5, 21, 47];
    let first = arr.findIndex(first_occ);
    function first_occ(value, index, arr) {
        return value > 18
    }
    console.log(first); //5
}

//New Math methods
{
    //Math.trunc - integer part of a value
    console.log(Math.trunc(3.14)); //3
    console.log(Math.trunc(-3.14)); //-3
    console.log(Math.trunc(3.74)); //3


}