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

/* Question 2: String Search
Write a function searchSubstring that:
Takes a string and a substring as inputs.
Checks if the substring exists in the string using .includes().
Finds the starting index of the substring using .indexOf().
Returns an object with the results.*/
{
    function searchSubstring(str, search_str) {
        return {
            exists: str.includes(search_str),
            index: str.indexOf(search_str)
        }
    };
    console.log(searchSubstring("JavaScript is awesome", "awesome"));
}