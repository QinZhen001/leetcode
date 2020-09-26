/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  if (k == 1) {
    return s.length
  }
  let dp = new Array(s.length)
  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array(s.length).fill(0)
  }

  // dp[i][j]  i位置开头j位置结尾
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      dp[i][j] = getMap(s.slice(i, j + 1))
    }
  }

  // console.log(dp)
  let max = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let map = dp[i][j]
      const list = Object.keys(map)
      console.log(list)
      // console.log(map)
      let flag = list.every((key) => map[key] >= k)
      // console.log(i, j, flag)
      if (flag) {
        let num = j - i + 1
        if (num > max) {
          max = num
        }
      }
    }
  }
  return max
}

function getMap(str) {
  let obj = {}
  for (let key of str) {
    if (!obj[key]) {
      obj[key] = 1
    } else {
      obj[key]++
    }
  }
  return obj
}

const s = 'ababbc',
  k = 2
const res = longestSubstring(s, k)
console.log('res', res)
