## 打乱数组

[https://leetcode-cn.com/problems/shuffle-an-array/](https://leetcode-cn.com/problems/shuffle-an-array/)

打乱一个没有重复元素的数组。

```
示例:

// 以数字集合 1, 2 和 3 初始化数组。
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
solution.shuffle();

// 重设数组到它的初始状态[1,2,3]。
solution.reset();

// 随机返回数组[1,2,3]打乱后的结果。
solution.shuffle();
```


### 代码


```js
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.initNums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.initNums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let nums = this.initNums.slice()
  let m = nums.length;
  while (m > 1) {
    let index = Math.floor(Math.random() * m--);
    swap(nums, m, index);
  }

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return nums
};
```



-----

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shuffle-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。