/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.nums = nums
  let total = 0
  this.nums.forEach(item => {
    total += item
  })
  this.total = total
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.total
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.nums)
}


const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"

