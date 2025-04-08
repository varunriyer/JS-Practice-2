function areBracketsBalanced(str) {
    let cleaned_arr = str.trim().split("");
    let check_arr = [];
    for (let x of cleaned_arr) {
        if (x === '[' || x === '{' || x === '(') {
            check_arr.push(x);
        }
        else if (x === ']' || x === '}' || x === ')') {
            let last = check_arr.pop();
            if ((x === ']' && last !== '[') || (x === '}' && last !== '{') || (x === ')' && last !== '(')) {
                return false;
            }
        }
    }
    return check_arr.length === 0;
}
console.log(areBracketsBalanced("[a{b(c)d}e]a"));
{
    let a = 1;
    let b = true;
    console.log(a == b);
}

{
    let obj = {
        name: "Joe",
        marks: {
            science: 90,
            english: 30,
            math: 100
        }
    };
    let marks = Object.values(obj.marks);
    let average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
    console.log(`Average marks of subjects = ${average}`);
}
{
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) { console.log(i) }
    }
}
{
    //Sum of digits of a given number 
    function sum_of_digits(num) {
        let temp_num = num;
        let sum = 0;
        while (temp_num > 0) {
            let digit = temp_num % 10;
            temp_num = Math.floor(temp_num / 10);
            sum += digit;
        }
        console.log(`Sum of digits of ${num} is equal to ${sum}`);
    }
    sum_of_digits(123);
    sum_of_digits(560);
}
{
    //Print all prime number upto n 
    function prime_print(n) {

        for (let i = 2; i <= n; i++) {
            let isPrime = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) { console.log(i); }
        }
    }
    prime_print(10);
}
{
    //Fibonacci upto n
    fibonacci_print(7);

    function fibonacci_print(n) {
        let a = 0, b = 1;
        if (a <= n) console.log(a);
        if (b <= n) console.log(b);
        while (true) {
            let c = a + b;
            if (c > n) break;
            console.log(c);
            a = b;
            b = c;
        }
    }
}
{
    //Function to check if 2 numbers are divisble by each other 

}
{
    function countAndDisplayDigitFrequency(arr) {
        const frequency = {};

        // Loop through array of objects
        for (let obj of arr) {
            // Get the digit value (e.g., '1', '4', '7') from the object
            const digit = Object.values(obj)[0];

            // Count frequency
            if (frequency[digit]) {
                frequency[digit]++;
            } else {
                frequency[digit] = 1;
            }
        }

        // Display formatted output
        for (let digit in frequency) {
            const count = frequency[digit];
            const label = count === 1 ? 'occurrence' : 'occurrences';
            console.log(`${digit} --> ${count} ${label}`);
        }
    }

    const data = [
        { 0: '1' },
        { 1: '4' },
        { 2: '7' },
        { 3: '1' },
        { 4: '4' },
        { 5: '7' },
        { 6: '1' },
        { 7: '0' }
    ];
    countAndDisplayDigitFrequency(data);

}