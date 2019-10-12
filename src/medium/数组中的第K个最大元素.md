## 数组中的第K个最大元素

[https://leetcode-cn.com/problems/kth-largest-element-in-an-array/submissions/](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/submissions/)



在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

```

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
说明:

```

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。


### 代码

```javascript
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  var findKthLargest = function (nums, k) {
    nums = nums.sort((a, b) => b - a)
    return nums[k - 1]
  };
```


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
