/* Question 1: Case Conversion
Write a function convertCase that:
Takes a string as input.
Converts the string to uppercase using .toUpperCase().
Converts the string to lowercase using .toLowerCase().
Returns both conversions as an object.*/
{
    function convertCase(str) {
        return {
            upperCase: str.toUpperCase(),
            lowerCase: str.toLowerCase()
        }
    };
    console.log(convertCase("Hello World!"));
}