//STEP 1
function halfNumber(input) {
    let output = input/2;
    console.log(`Half of ${input} is ${output}.`);
    return output;
}
//STEP 2
function squareNumber(input) {
    let output = input*input;
    console.log(`${input} squared is ${output}.`);
    return output;
}
//STEP 3
function percentOf(inputA, inputB) {
    let output = (100 * inputA / inputB).toFixed(2);
    console.log(`${inputA} is ${output}% of ${inputB}.`);
    return output;
}
//STEP 4
function findModulus(inputA, inputB) {
    let output = inputA % inputB;
    console.log(`${output} is the modulus of ${inputA} and ${inputB}.`);
    return output;
}
//STEP 5
halfNumber(7);
squareNumber(5);
percentOf(6.7, 15);
findModulus(15, 4);