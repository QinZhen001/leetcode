/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = (nums.length + 1) * nums.length / 2
    let actualSum = 0
    for (let num of nums) {
        actualSum += num
    }
     // console.log(sum, actualSum)
    return sum - actualSum
};


let arg1 = [18, 45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14]
let arg2 = 100
let res = missingNumber(arg1)
console.log("res", res)