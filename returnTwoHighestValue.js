/*❓DESCRIPTION
In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
 */
/* ✅SOLUTION */
function twoHighest(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return [];
    } else if (arr.length === 1) {
        return arr;
    } else {
        let sortedArr = arr.sort((a, b) => a - b);
        let uniqueArr = [...new Set(sortedArr)];
        newArr.push(uniqueArr[uniqueArr.length - 1], uniqueArr[uniqueArr.length - 2]);
        return newArr;
    }
}