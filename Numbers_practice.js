/* Question 1: Number Conversion and Validation

Write a function convertToNumber that:

Accepts a string input (e.g., "123.45", "100px", "NaN").
Converts it to a number using Number(), parseInt(), and parseFloat().
Returns an object with the results of all three methods.
Checks if the input is a valid number using isNaN() and Number.isFinite(). */

{
    function convertToNumber(str) {
        let number = Number(str);
        let number_int = parseInt(str);
        let number_float = parseFloat(str);
        let number_NaN = isNaN(number);
        let number_finite = isFinite(number);

        return {
            Number: number,
            parseInt: number_int,
            parseFloat: number_float,
            isNaN: number_NaN,
            isFinite: number_finite
        };
    };
    console.log(convertToNumber("4.231"));
}

/* Question 2: Precision Handling
Write a function formatNumber that:

Takes a number and rounds it to 2 decimal places using .toFixed().

Converts it to exponential notation with 3 decimal places using .toExponential().

Returns the sum of these two formatted values as a number. */
{
    function formatNumber(num) {
        let rounded_num = num.toFixed(2);
        let exponential_num = num.toExponential(3);
        console.log(`${Number(rounded_num)} + ${Number(exponential_num)} = ${(Number(rounded_num) + Number(exponential_num)).toFixed(2)}`);
    };
    formatNumber(123.4567);
}

/*Question 3: Floating-Point Precision
Create a function fixPrecision that:
Accepts two numbers (like 0.1 and 0.2).
Returns their sum after fixing floating-point precision errors (e.g., 0.1 + 0.2 should return 0.3). */

{
    function fixPrecision(num1, num2) {
        let sum = num1 + num2;
        console.log(sum.toFixed(1));
    }
    fixPrecision(0.1, 0.2);
}

/* Question 4: Mathematical Operations
Write a function mathOperations that:
Takes a number n and returns an object with:
Square root (Math.sqrt())
Cube root (Math.cbrt())
Power of 3 (Math.pow(n, 3))
Logarithm (Math.log10(n))
Throws an error if n is negative. */
{
    function mathOperations(n) {
        if (n < 0) {
            return `${n} is a negative number`;
        }
        else {
            const n_sqrt = Math.sqrt(n);
            const n_cbrt = Math.cbrt(n);
            const n_pow = Math.pow(n, 3);
            const n_log = Math.log10(n);
            return {
                sqrt: n_sqrt,
                cbrt: n_cbrt,
                pow: n_pow,
                log: n_log
            };
        }
    };
    console.log(mathOperations(-3));
    console.log(mathOperations(64));
}