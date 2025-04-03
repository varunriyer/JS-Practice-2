//Checking if a function is a typeof of object
{
    function greet(name) {
        return `Yooo ${name}`;
    }
    console.log(greet("Jeremy"));
    console.log(typeof (greet)); //returns function 
}

//implementing switch-case as have not used it with javascript
{
    //Check if a color is part of RGB or not
    let color = "blue";
    switch (color) {
        case "red":
            console.log(`${color} is part of RGB`);
            break;
        case "green":
            console.log(`${color} is part of RGB`);
            break;
        case "blue":
            console.log(`${color} is part of RGB`);
            break;
        default:
            console.log(`${color} is not part of RGB`);
            break;
    }
}

//Reverse a string while keeping the words intact - practising this question as I just remembered about it 
{
    let str = "Hello World !!";
    let result = str.split(" ").reverse().join(" ");
    console.log(result);
}

//Mastering Arrow functions 
{
    //Use arrow function to create a function which calculates area
    let calcArea = (length, width) => length * width;
    console.log(calcArea(5, 2));

}

//Double the values of an array (use map and arrow functions)
{
    let arr = [1, 2, 3, 4, 0, 7];
    let double = arr.map(x => x * 2);
    console.log(double);
}