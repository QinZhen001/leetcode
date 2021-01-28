/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // totals[i] 记录 0 到 i-1 元素的和
  let totals = [] 
  totals[0] = 0
  for (let i = 1; i <= nums.length; i++) {
    totals[i] = totals[i - 1] + nums[i - 1]
  }

  for (let start = 0; start < nums.length; start++) {
    for (let end = start + 1; end <= nums.length; end++) {
      // totals[end] - totals[start] => 可以知道 start到end位置的和
      let num = totals[end] - totals[start]

      // ....
    }
  }
  
  // ..
}
