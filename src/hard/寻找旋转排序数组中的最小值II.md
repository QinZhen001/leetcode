## 寻找旋转排序数组中的最小值 II

[https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/)




假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

请找出其中最小的元素。

注意数组中可能存在重复的元素。

```

示例 1：

输入: [1,3,5]
输出: 1
示例 2：

输入: [2,2,2,0,1]
输出: 0

```


### 代码


```javascript
  /**
   * @param {number[]} nums
   * @return {number}
   */
  var findMin = function (nums) {
    if (nums.length === 1) {
      return nums[0]
    }
    let left = 0
    let right = nums.length - 1
    if (nums[right] > nums[left]) {
      return nums[left]
    }
    while (left < right) {
      let mid = parseInt((left + right) / 2)
      if (nums[mid] > nums[right]) left = mid + 1;
      else if (nums[mid] < nums[right]) right = mid;
      else right = right - 1;
    }
    return nums[left];
  };

```






来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
