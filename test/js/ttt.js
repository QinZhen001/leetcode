// https://leetcode-cn.com/problems/word-break/solution/dan-ci-chai-fen-by-leetcode/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let memo = new Array(s.length);
  return word_Break(s, wordDict, 0, memo);
};

function word_Break(s, wordDict, start, memo) {
  if (start === s.length) {
    return true;
  }

  if(typeof memo[start] == "boolean"){
    // 已经搜索过
    return memo[start]
  }

  for (let end = start + 1; end <= s.length; end++) {
    if (
      wordDict.indexOf(s.substring(start, end)) > -1 &&
      word_Break(s, wordDict, end)
    ) {
      return memo[start] = true;
    }
  }

  return memo[start] = false;
}

let s = "catsandog",
  wordDict = ["cats", "dog", "sand", "and", "cat"];
const res = wordBreak(s, wordDict);
console.log("res", res);
