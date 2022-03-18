/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  if (s == '') {
    return true
  }

  if (s.length == 1) {
    return s[0] == '*'
  }

  if (s.length == 2) {
    return s == '()' || s == '(*' || s == '*)' || s == '**'
  }

  // dp[i][j] =>  字符串i-j
  let dp = new Array(s.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s.length).fill(false)
  }
  // dp 初始化

  // 一位的情况
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '*') {
      dp[i][i] = true
    }
  }

  // 两位的情况
  for (let i = 1; i < s.length; i++) {
    const c1 = s[i - 1]
    const c2 = s[i]
    dp[i - 1][i] = (c1 === '(' || c1 === '*') && (c2 === ')' || c2 === '*')
  }

  // 从后往前 最少长度3
  for (let i = s.length - 3; i >= 0; i--) {
    const c1 = s[i]
    for (let j = i + 2; j < s.length; j++) {
      const c2 = s[j]
      if ((c1 === '(' || c1 === '*') && (c2 === ')' || c2 === '*')) {
        dp[i][j] = dp[i + 1][j - 1]
      }
      // 存在k 将dp[i][j]分割成两个子字符串
      // 如果两个子字符串满足规则 那么dp[i][j] 也满足规则
      for (let k = i; k < j; k++) {
        if (dp[i][k] && dp[k + 1][j]) {
          dp[i][j] = true
          break
        }
      }
    }
  }
  return dp[0][s.length - 1]
}

let str = '(*'
const res = checkValidString(str)
console.log('res', res)
