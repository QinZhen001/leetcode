/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums || !nums.length) {
    return 0
  }
  // 去重
  let set = new Set(nums)
  let cur = 1
  let max = 1
  for (let item of nums) {
    if (set.has(item - 1)) {
      // 存在item-1
      // item肯定不是起点
    } else {
      cur = calcLongest(item, set)
      max = Math.max(cur, max)
    }
  }
  return max
}

/**
 * 以start为起点计算
 * @param {*} start
 * @param {*} set
 */
function calcLongest(start, set) {
  let num = 0
  while (set.has(start)) {
    start++
    num++
  }
  return num
}

// const arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// const arr = [100, 4, 200, 1, 3, 2];
const arr = [1, 2, 0, 1]
const res = longestConsecutive(arr)
console.log('res', res)
