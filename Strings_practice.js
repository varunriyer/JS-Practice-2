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

/* Question 3: Replace and Split
Write a function processString that:
Takes a string as input.
Replaces all occurrences of "JS" with "JavaScript" using .replace() or .replaceAll().
Splits the string into an array of words using .split(). */
{
    function processString(str) {
        return {
            replacedString: str.replace("JS", "JavaScript"),
            wordsArray: str.split(" ")
        }
    };
    console.log(processString("Learning JS is fun!"));
}

/*Question 5: Substring and Slice
Write a function extractSubstring that:
Takes a string and two indices (start, end) as inputs.
Extracts a substring using .substring() and .slice().
Returns both results as an object. */
{
    function extractSubstring(str, start, end) {
        return {
            substringResult: str.substring(start, end),
            sliceResult: str.slice(start, end)
        }
    };
    console.log(extractSubstring("JavaScript is powerful", 0, 10));
}