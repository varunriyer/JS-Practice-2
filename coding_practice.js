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