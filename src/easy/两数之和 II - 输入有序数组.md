## [两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

[https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)



给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。



说明:

* 返回的下标值（index1 和 index2）不是从零开始的。

* 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。

  

  ```
  示例:
  
  输入: numbers = [2, 7, 11, 15], target = 9
  输出: [1,2]
  解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
  ```

  



## 代码



### 暴力解决 （会超时）

> 时间复杂度 O(n^2)

相当于两次循环

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let one = numbers[i];
    let newTarget = target - one;
    if (newTarget < one) {
      // 升序排列 后面的值无法满足条件
      break;
    }
    let arr = numbers.slice(i + 1);
    let res = arr.indexOf(newTarget);
    if (res !== -1) {
      let index1 = i + 1;
      let index2 = index1 + 1 + res;
      return [index1, index2];
    }
  }
  return [];
};

```







### 暴力优化

> 时间复杂度 O(n^2)

观察超时情况，发现：

**[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,......]**

超时情况的输入数组会有多个重复的值



也就是说，数组当前值等于数组上一个值的时候可以跳过当次循环,做这一个优化



```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let temp = null 

  for (let i = 0; i < numbers.length-1; i++) {
    let one = numbers[i];
    if(temp === one){
      // 数组当前值 等于 数组前一项的值 
      // 跳过此次循环
      continue
    }
    temp = one
    let newTarget = target - one;
    if (newTarget < one) {
      // 升序排列 后面的值无法满足条件
      break;
    }

    let arr = numbers.slice(i + 1);
    let res = arr.indexOf(newTarget);
    if (res !== -1) {
      let index1 = i + 1;
      let index2 = index1 + 1 + res;
      return [index1, index2];
    } 
  }
  return [];
};
```







### 双指针法

> 时间复杂度 O(n)





---

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。