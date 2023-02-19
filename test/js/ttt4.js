/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums || !nums.length) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }

  let dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2;i < nums.length;i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  let max = dp[0]
  for (let i = 1;i < dp.length;i++) {
    if (dp[i] > max) {
      max = dp[i]
    }
  }

  return max 
};


const nums = [2, 7, -8, 12, 1]
const res = rob(nums)

console.log("res", res)

