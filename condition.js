function resultEvenOrOdd(num1, num2) {
    const result = num1 + num2;
    if (result % 2 === 0) {
        console.log("The result is Even");

    }
    else {
        console.log("The result is Odd");
    }
    return result;
}

const result = resultEvenOrOdd(23, 34);
console.log("The final result is :", result);

console.log("-----------------------");
const result2 = resultEvenOrOdd(2323434, 34332);
console.log("The final result2 is :", result2);
