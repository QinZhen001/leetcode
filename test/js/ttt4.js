/**
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function(n) {
  // dp[i][j] 掷i骰子点数j出现的次数
  let dp = new Array(n+1).fill(0)
  for(let i=0;i<=n;i++){
    dp[i] = new Array(n * 6).fill(0)
  }

  // dp 初始化 
  for(let i=1;i<=6;i++){
    dp[1][i] = 1 
  }

  for(let i=2;i<=n;i++){
    for(let j=i;j<=6*i;j++){
      dp[i][j] += dp[i-1][j-]
    }
  }
};