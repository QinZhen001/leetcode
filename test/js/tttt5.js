/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  nums.sort((a, b) => {
    //x+y>y+x
    let num1 = '' + a + b
    let num2 = '' + b + a
    return num1 - num2
  })

  return nums.join('')
}

let nums = [3, 30, 34, 5, 9]
const res = minNumber(nums)

console.log('res', res)
