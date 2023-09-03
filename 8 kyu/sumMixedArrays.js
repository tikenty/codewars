/* ❓DESCRIPTION
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
    Return your answer as a number.
 */

/* ✅ SOLUTION */

function sumMix(x) {
    return x.reduce((sum, n) => sum + Number(n), 0);
}