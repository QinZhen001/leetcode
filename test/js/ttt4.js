/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i == 0) {
      // 到了第一位
      if (digits.length == 1) {
        // 只有一位数
        digits[i]++
      }
      if (digits[i] == 10) {
        // 进位
        digits[i] = 0
        digits.unshift(1)
        break
      }
    } else if (i == digits.length - 1) {
      // 到了最后一位
      digits[i]++
      if (digits[i] == 10) {
        // 进位
        digits[i] = 0
        digits[i - 1] = digits[i - 1] + 1
      }
    } else {
      if (digits[i] == 10) {
        // 进位
        digits[i] = 0
        digits[i - 1] = digits[i - 1] + 1
      }
    }
  }
  return digits
}

const nums = [9]
const res = plusOne(nums)
console.log('res', res)
