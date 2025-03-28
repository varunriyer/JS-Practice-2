let arr = [1, 2, "bread", 3, "jam", 4, "butter", 5];
let sum = arr.reduce((PartialSum, currentValue) => {
    if (typeof currentValue === `number`) {
        return PartialSum + currentValue;
    }
    else {
        console.error(`Skipping non-numeric value: ${currentValue}`);
        return PartialSum;
    }
}, 0);

console.log(sum);
