/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let max = 1;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] == 1) {
      count++;
    } else if (nums[i] == nums[i - 1]) {
      // 前后元素相等
      continue;
    } else {
      max = Math.max(max, count);
      count = 1;
    }
  }
  console.log(arr);
  max = Math.max(max, count);
  return max;
};

// const arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// const arr = [100, 4, 200, 1, 3, 2];
const arr = [1, 2, 0, 1];
const res = longestConsecutive(arr);
console.log("res", res);
