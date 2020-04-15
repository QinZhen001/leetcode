/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < nums.length) {
    if (nums[start] < nums[start + 1]) {
      start++;
    } else {
      break;
    }
  }
  while (end - 1 >= 0) {
    if (nums[end - 1] < nums[end]) {
      end--;
    } else {
      break;
    }
  }
  if (start >= end) {
    // 原数组已经是一个升序数组
    return 0;
  }
  console.log("start", start);
  console.log("end", end);
  debugger
  return end - start + 1;
};

let param1 = [1,2,3,3,3];
const res = findUnsortedSubarray(param1);
console.log("res", res);
