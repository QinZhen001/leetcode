/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let dp = new Array(triangle.length);
  let maxLen = triangle[triangle.length - 1].length;
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(triangle[i].length).fill(0);
  }
  // 设dp[i][j] 为到(i,j)位置的最短路径
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j == 0) {
        // 每行的第一个元素
        dp[i][0] = triangle[i][0] + dp[i - 1][0];
      } else if (j == i) {
        // 每行的最后一个元素
        dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
      } else {
        // 每行的中间元素
        dp[i][j] =
          triangle[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }

  // console.log(dp);
  // debugger;

  let min = Number.MAX_SAFE_INTEGER;
  for (item of dp[dp.length - 1]) {
    if (item < min) {
      min = item;
    }
  }
  return min;
};

const parma1 = 
[[2],[3,4],[6,5,7],[4,1,8,3]]
const parma2 = [2, 2];
const parma3 = 3;

const res = minimumTotal(parma1, parma2, parma3);
console.log("res", res);
