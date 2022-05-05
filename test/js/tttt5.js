/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.w = w;
  this.pre = new Array(w.length).fill(0);
  this.pre[0] = w[0];
  for (let i = 1; i < w.length; i++) {
    this.pre[i] = this.pre[i - 1] + w[i];
  }
  this.sum = this.w.reduce((total, cur) => total + cur, 0);
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let target = null;
  let x = Math.floor(Math.random() * this.sum) + 1;
  let left = 0;
  let right = this.w.length - 1;
  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left;
    if (this.pre[mid] - this.w[mid] + 1 >= x && x <= this.pre[mid]) {
      left = mid;
      break;
    } else if (this.pre[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  target = left;
  return target;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

let solution = new Solution([1, 3]);
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());

// 前缀和 + 二分查找
