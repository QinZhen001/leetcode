var canJump = function (nums) {
  let lastPos = nums.length - 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastPos) {
      lastPos = i
    }
  }
  return lastPos === 0
};


let arr1 =
  [2, 3, 1, 1, 4]
let res = canJump(arr1)
console.log("res", res)
