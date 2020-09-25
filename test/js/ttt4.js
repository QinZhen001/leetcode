/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] >= 0) {
      // 对当前dp[i]产生正影响 要
      dp[i] = dp[i - 1] + nums[i];
    } else {
      // 对当前dp[i]产生负影响 不要
      dp[i] = nums[i];
    }
  }
  let max = dp[0];
  for (let i = 1; i < dp.length; i++) {
    if (dp[i] > max) {
      max = dp[i]
    }
  }
  return max
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const res = maxSubArray(nums);
console.log("res", res);
