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