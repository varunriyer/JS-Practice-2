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
        if (x === 0) return "falsy";
        else return "truthy";
    }
    console.log(checkTruthyFalsy(0));
}

