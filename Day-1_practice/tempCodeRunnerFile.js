function checkName(object1, object2) {
    return object1.name === object2.name;
}
let hero1 = { name: "Batman" };
let hero2 = { name: "Superman" };
let hero3 = { name: "Batman" };

console.log(checkName(hero1, hero2));
console.log(checkName(hero1, hero3));

console.log(5+3+"hi");