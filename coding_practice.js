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