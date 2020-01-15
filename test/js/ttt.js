/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let maxIndex = 0
  let max = height[0]
  for (let i = 1; i < height.length; i++) {
    if (height[i] > max) {
      max = height[i]
      maxIndex = i
    }
  }
  let flag = new Array(height.length).fill(false)

  for (let i = 1; i < maxIndex; i++) {
    if (height[i] < height[i - 1]) {
      // i位置可以接到雨水
      flag[i] = true
    } else if (height[i] === height[i - 1]) {
      flag[i] = true
    }
  }

  for (let i = height.length - 1; i > maxIndex; i--) {
    if (height[i - 1] < height[i]) {
      // i位置可以接到雨水
      flag[i] = true
    } else if (height[i - 1] === height[i]) {
      flag[i] = true
    }
  }

  console.log("maxIndex", maxIndex)
  console.log("max", max)
  console.log("flag", flag)
};


let arr1 =
  // [0, 0, 1]
  [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// [2,3,-2,4]
let arr2 = [[0, 1], [3, 1], [1, 3], [3, 2]]
let res = trap(arr1)
console.log("res", res)
