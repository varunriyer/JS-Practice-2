function maxofthree(n1, n2, n3) {
    var max;
    if (n1 >= n2 && n1 >= n3) {
        max = n1;
    }
    else if (n2 >= n1 && n2 >= n3) {
        max = n2;
    }
    else {
        max = n3;
    }
    return max;
}
var a = 13;
var b = 5;
var c = 11;
console.log(`The maximum of ${a}, ${b}, ${c} is ${maxofthree(a, b, c)}`);
