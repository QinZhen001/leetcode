/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
  let len = sentence.length;
  let dp = new Array(len + 1).fill(0);
  dictionary = new Set(dictionary)


  for (let i = 1; i <= len; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let idx = 0; idx < i; idx++) {
      if (dictionary.has(sentence.slice(idx, i))) {
        dp[i] = Math.min(dp[i], dp[idx]);
      }
    }
  }

  return dp[len]
};

const parma1 = ["looked", "just", "like", "her", "brother"];
const parma2 = "jesslookedjustliketimherbrother";
const parma3 = 3;

const res = respace(parma1, parma2, parma3);
console.log("res", res);

// let parma = "jesslookedjustliketimherbrother";
// let rrr =  parma.split("")
// rrr.splice(-7)
// rrr = rrr.join("")
// console.log(rrr)
// debugger
// console.log("res",rrr)
