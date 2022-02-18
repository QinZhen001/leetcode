/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n <= 3) {
    return n - 1;
  }
  // 当长度大于3时
  let dp = new Array(n + 1).fill(0); // tip: 记得赋初始值
  dp[1] = 1;
  dp[2] = 2; // tip: 经过切割后，长度剩2，没必要继续切
  dp[3] = 3; // tip: 经过切割后，长度剩3，没必要继续切

  for (let i = 4; i <= n; i++) {
    // i / 2 足够了 后面循环部分和前面重复
    // 但是注意 是 <=  (判断也可以是 j < i)
    for (let j = 1; j <= i / 2; j++) {
      dp[i] = Math.max(dp[i], dp[j] * dp[i - j]);
    }
  }

  return dp[n];
};

const res = cuttingRope(4);
console.log("res", res);
