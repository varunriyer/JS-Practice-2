//Array entries 
{
    let arr = ["Red", "Blue", "Green"];
    let iterator = arr.entries();

    for (let [index, color] of iterator) {
        console.log(`Index is ${index} and color is ${color}`);
    }
}

