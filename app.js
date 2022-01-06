function add(n1, n2, showResult, resultPharas) {
    // if(typeof n1 !== 'number' || typeof n2 !== 'number' ) {
    //     throw new Error("Incorrect input!")
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
var answer = add(number1, number2, printResult, resultPhrase);
// console.log(answer, " :this is the answer");
