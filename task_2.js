// ### Task - 2
// Take a number if the number is odd multiply it by 2 and return the result.
// If the number is even divide it by two and return the result.

function number(num1) {
    if (num1 % 2 === 1) {
        const num = num1 * 2;
        console.log("The Number is Odd");
        return num;
    }
    else {
        const num = num1 / 2;
        console.log("The Number is Even");
        return num;
    }

}
const result = number(3);
console.log("The result is :", result);