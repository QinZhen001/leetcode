/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let len1 = word1.length;
  let len2 = word2.length;
  let dp = new Array(len1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(len2).fill(0);
  }
  // dp[i][j] =>  word1[0, ...i] 变为 word2[0,...j] 所需要的步骤

  // init
  for (let i = 0; i < len1; i++) {
    dp[i][0] = i;
  }
  for (let i = 0; i < len2.length; i++) {
    dp[0][i] = i;
  }

  for (let i = 0; i < len1; i++) {
    for (let j = i; j < len2; j++) {
      if (word1[i] == word2[j]) {
        if (i == 0 || j == 0) {
          continue;
        } else {
          dp[i][j] = dp[i - 1][j - 1];
        }
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[len1 - 1][len2 - 1];
};

let word1 = "horse";
let word2 = "ros";
const res = minDistance(word1, word2);
console.log("res", res, map);
