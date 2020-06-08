/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  // 目标值的绝对值 超过 所有和的绝对值 无法达到
  if (Math.abs(S) > Math.abs(sum)) {
    return 0;
  }

  let len = nums.length;
  let t = sum * 2 + 1;
  let dp = new Array(len);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(t).fill(0);
  }

  // 初始化
  if (nums[0] == 0) {
    dp[0][sum] = 2;
  } else {
    dp[0][sum + nums[0]] = 1;
    dp[0][sum - nums[0]] = 1;
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < t; j++) {
      // 注意判断是否越界
      let L = j - nums[i] >= 0 ? j - nums[i] : 0;
      let R = j + nums[i] < t ? j + nums[i] : 0;
      dp[i][j] = dp[i - 1][L] + dp[i - 1][R];
    }
  }

  console.log(dp);

  // 结束的目标格子在 sum + S  (画出dp二维图可以知道)
  return dp[len - 1][sum + S];
};

const nums = [1, 1, 1, 1, 1];
const S = 3;
let res = findTargetSumWays(nums, S);
console.log("res", res);
