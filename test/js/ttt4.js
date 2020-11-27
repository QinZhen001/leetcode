/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let zeroLen = nums1.length - m
  nums1.splice(m, zeroLen)
  // debugger
  let copyNums1 = nums1.slice()
  let i = 0
  let j = 0
  let index = 0
  while (i < copyNums1.length || j < nums2.length) {
    if (i >= copyNums1.length) {
      nums1[index++] = nums2[j++]
      continue
    }

    if (j >= nums2.length) {
      nums1[index++] = copyNums1[i++]
      continue
    }

    if (copyNums1[i] < nums2[j]) {
      nums1[index++] = copyNums1[i++]
    } else {
      nums1[index++] = nums2[j++]
    }
    // index ++
  }
  console.log(nums1)
}

let nums1 = [1]
let m = 1
let nums2 = []
let n = 0
const res = merge(nums1, m, nums2, n)
console.log('res', res)

// ----------
// let aaa = []
// let bbb = [1]
// console.log(aaa[0])
// console.log(aaa[0] < bbb[0])
