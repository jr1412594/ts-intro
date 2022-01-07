
type Combinable = number | string; // type keyword and types to use. 
type conversionDescriptor = 'as-number' | 'as-text';
// type aliases


function combine(
    // input1: number | string,
    // input2: number | string,
    input1: Combinable,
    input2: Combinable,
    resultConversion: conversionDescriptor
    // resultConversion: 'as-number' | 'as-text'  //literal type, will only be this.
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


//below will work because of union types.
type User = {name: string} | string;
let u1: User = {name: 'max'};
u1 = "michael";