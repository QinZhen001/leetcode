/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let l = nums.length - 1;
  let r = 0;
  let max = nums[i];
  let min = nums[nums.length - 1];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    } else {
      
    }
  }
};

let param1 = [2, 6, 4, 8, 10, 9, 15];
const res = findUnsortedSubarray(param1);
console.log("res", res);
