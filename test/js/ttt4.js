/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
  return getAnswer(nums, 0, nums.length - 1);
};

function getAnswer(nums, left, right) {
 if(left > right){
   return -1 
 }

  let middle = left + parseInt((right - left) / 2);
  let leftAnswer  = getAnswer(nums, left, middle - 1)
  if(leftAnswer !== -1){
    // 在左边找到了答案
    return leftAnswer
  }else if(nums[middle] === middle){
    // 中间是答案
    return middle
  }
  return getAnswer(nums, middle + 1, right);
}

const parma1 = [0, 2, 3, 4, 5]
const parma2 = 1;
const parma3 = 3;

const res = findMagicIndex(parma1, parma2, parma3);
console.log("res", res);
