/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  if (!A || !A.length || A.length < 3) {
    return false
  }
  let maxIndex = 0
  let maxValue = A[0]
  for (let i = 0; i < A.length; i++) {
    if (A[i] > maxValue) {
      maxValue = A[i]
      maxIndex = i
    }
  }
  // console.log(maxIndex,maxValue)

  // 最大值在数组最后 或 最开始 
  // 这种情况不是山脉
  if(maxIndex == 0 || maxIndex == A.length-1){
    return false
  }

  // 上升阶段
  for (let i = 0; i < maxIndex; i++) {
    if (A[i] >= A[i + 1]) {
      return false
    }
  }
  // 下降阶段
  for (let i = maxIndex; i < A.length - 1; i++) {
    if (A[i] <= A[i + 1]) {
      return false
    }
  }

  return true
}

let arr = [3, 5, 5]
const res = validMountainArray(arr)
console.log('res', res)
