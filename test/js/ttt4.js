/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
 debugger;
 let left = 0;
 let right = nums.length;
 let index = null;
 while (left <= right) {
  console.log("1111");
  let mid = parseInt((left + right) / 2);
  debugger;
  if (nums[mid] === target) {
   index = mid;
   break;
  } else if (nums[mid] > target) {
   right = mid - 1;
  } else {
   left = mid + 1;
  }
 }
 console.log(index);
};

const param1 = [5, 7, 7, 8, 8, 10];
const param2 = 8;
const res = searchRange(param1, param2);

console.log("res", res);
