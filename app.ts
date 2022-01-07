function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'  //literal type, will only be this.
) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const numbers = combine(5, 9, 'as-number');
console.log(numbers);

const combinedStringAges = combine('5', '9', 'as-number');
console.log(combinedStringAges)

const words = combine("this ", "that", 'as-text');
console.log(words);
