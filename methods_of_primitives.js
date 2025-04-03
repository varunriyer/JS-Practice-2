//Methods of Primitives 
//Input a string and convert it to uppercase, check if it includes the word "Javascript" and also trim any extra spaces from the start to end
{
    let str = "I love JavaScript!"
    let new_str = str.toUpperCase();
    new_str = new_str.trim();
    console.log(new_str.toLowerCase().includes('javascript'));
    console.log(new_str);
}

//Input a number and provide the number rounded to 2 decimal points and convert the number to exponentiation format 
{
    let num = 3.14109231;
    let new_num = num.toFixed(2); //toFixed converts into a string
    console.log(typeof (new_num));
    console.log((Number(new_num)).toExponential());
}

//Boolean wrapper in JS 
{
    function checkTruthyFalsy(x) {
        return x ? "truthy" : "falsy";
    }
    console.log(checkTruthyFalsy("test"));
    console.log(checkTruthyFalsy(0));
    console.log(checkTruthyFalsy(NaN));
    console.log(checkTruthyFalsy(7));
    console.log(checkTruthyFalsy(undefined));
}

//Wrapper Object Behaviour 
{
    let str = "hello";
    str.test = "world"; // A temporary wrapper object is created, and 'test' is set on it.
    console.log(str.test); // A new temporary wrapper object is created, but 'test' does not exist, so undefined is returned.     
}

// Chaining Methods 
{
    //Write a function that takes a string of comma-seperated numbers, split it into an array, convert each number to it's square and convert it back to string seperated by commas
    function update_str(str) {
        // let arr = str.split(",");
        // arr = arr.map(x => x ** 2);
        // let new_str = arr.toString();
        // return new_str;
        let arr = str.split(",").map(x => Number(x) ** 2); //Optimal way to write using chaining methods
        return arr.toString();
    }
    console.log(update_str(`1,2,3,4,5,hi,"4"`));
}