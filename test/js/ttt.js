// https://leetcode-cn.com/problems/compress-string-lcci/
// TODO: 要考虑字母前面出现过 后面接着出现的情况

/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let newStr = "";
  let newObj = {};
  let newArr = [];
  for (let i = 0; i < S.length; i++) {
    let item = S[i];
    if (!newObj[item]) {
      // 还没有出现过该字母
      newArr.push(item);
      newObj[item] = 1;
    } else {
      // 已经出现过该字母
      newObj[item] = newObj[item] + 1;
    }
  }
  console.log(newObj, newArr);
};

let param1 = "aabcccccaaa";
let param2 = 2;
const res = compressString(param1, param2);
console.log("res", res);
