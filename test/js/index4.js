/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) {
    return 0;
  }
  if (nums.length == 1) {
    return nums[0];
  }
  if (nums.length == 2) {
    return nums[0] > nums[1] ? nums[0] : nums[1];
  }
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];
  for (let i = 2; i < nums.length; i++) {
    let curSolution = dp[i - 2] + nums[i];
    let preSolution = dp[i - 1];
    dp[i] = curSolution > preSolution ? curSolution : preSolution;
  }

  return Math.max(...dp);
};

const res = rob([2, 7, 9, 3, 1]);
console.log('res', res);
