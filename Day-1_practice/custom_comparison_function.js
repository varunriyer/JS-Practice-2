function compareObjects(obj1, obj2) {
    if (obj1.a < obj2.a) {
        return -1;
    }
    if (obj1.a > obj2.a) {
        return 1;
    }
    else {
        return 0;
    }
}
let obj1 = { a: 1 };
let obj2 = { a: 2 };
let obj3 = { a: 3 };
let obj4 = { a: "test" };
console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj3, obj2));
console.log(compareObjects(obj3, obj4));
console.log(compareObjects(obj1, obj1));



