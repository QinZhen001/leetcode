// https://leetcode-cn.com/problems/word-break/solution/dan-ci-chai-fen-by-leetcode/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.indexOf(s.substring(j, i)) > -1) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length]
};

let s = "catsandog",
  wordDict = ["cats", "dog", "sand", "and", "cat"];
const res = wordBreak(s, wordDict);
console.log("res111", res);
