const add = (n1: number, n2: number) => {
    return n1 + n2;
};

const multiply = (n1: number, n2: number) => {
    return n1 * n2;
};

function printResult(num: number) {
    console.log("result: " + num);
}

// printResult(add(5,2));
// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number; //type function (<parameter types>) => <return type>

combinedValues = add;
console.log(combinedValues(10, 5), " :add");

combinedValues = multiply;
// combinedValues = printResult;

console.log(combinedValues(10, 5), " :multiply");
