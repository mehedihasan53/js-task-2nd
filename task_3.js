// ### Task-3
// Write a function called make_avg() which will take an array of integers and the
//  size of that array and return the average of those values.

function make_avg(number1) {
    let sum = 0;
    for (const num of number1) {
        sum = sum + num;
    }
    const ave = sum / number1.length;
    return ave;
}

const result = make_avg([5, 54, 53, 534, 5]);
console.log(result);