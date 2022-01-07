function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var numbers = combine(5, 9, 'as-number');
console.log(numbers);
var combinedStringAges = combine('5', '9', 'as-number');
console.log(combinedStringAges);
var words = combine("this ", "that", 'as-text');
console.log(words);
