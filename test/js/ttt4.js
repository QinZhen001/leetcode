/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  return binarySearch(nums, 0, nums.length - 1)
}

function binarySearch(nums, l, r) {
  let mid = Math.round((l + r) / 2)
  if (mid == l || mid == r) {
    // 递归终止的标志
    // 峰值肯定在 l 或 r 中的较大的那个
    return nums[l] > nums[r] ? l : r
  }
  if (nums[mid] > nums[mid + 1]) {
    // mid 处于局部下降序列
    // 峰值在 mid 左边
    return binarySearch(nums, l, mid)
  } else {
    return binarySearch(nums, mid, r)
  }
}

// [2,1]

const params = [2, 1]
const res = findPeakElement(params)
console.log(res)
