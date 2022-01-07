var add = function (n1, n2) {
    return n1 + n2;
};
var multiply = function (n1, n2) {
    return n1 * n2;
};
function printResult(num) {
    console.log("result: " + num);
}
// printResult(add(5,2));
// let combinedValues: Function;
var combinedValues;
combinedValues = add;
console.log(combinedValues(10, 5), " :add");
combinedValues = multiply;
// combinedValues = printResult;
console.log(combinedValues(10, 5), " :multiply");
