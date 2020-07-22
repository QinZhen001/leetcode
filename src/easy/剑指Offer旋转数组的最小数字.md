## 剑指Offer旋转数组的最小数字



把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

```
示例 1：

输入：[3,4,5,1,2]
输出：1


示例 2：

输入：[2,2,2,0,1]
输出：0
```



> 注意：本题与主站 154 题相同：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/



## 代码





### 暴力破解

直接循环找到最小值



```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let i = 1;
  while (i < numbers.length) {
    if (numbers[i] < numbers[i-1]) {
      return numbers[i]
    }
    i++
  }
  return numbers[0]
};
```





### 双指针法

减少循环时间

```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] <= numbers[left + 1]) {
      left++;
    } else {
      return numbers[left + 1];
    }
    if (numbers[right - 1] <= numbers[right]) {
      right--;
    } else {
      return numbers[right];
    }
  }
  // 默认值数组第一位 (升序数组)
  return numbers[0]
};
```







### 二分查找



```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let pivot = left + ~~((right - left) / 2);
    if (numbers[pivot] < numbers[right]) {
      right = pivot;
    } else if (numbers[pivot] > numbers[right]) {
      left = pivot + 1;
    } else {
      right -= 1;
    }
  }
  return numbers[left];
};
```





---

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。