## 两个数组的交集 II

[https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)





给定两个数组，编写一个函数来计算它们的交集。

 

```
示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]


示例 2:

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
```






说明：

* 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
* 我们可以不考虑输出结果的顺序。

进阶：

* 如果给定的数组已经排好序呢？你将如何优化你的算法？
* 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
* 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？





### 代码



### 两次循环 

暴力破解

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    let target = nums1[i];
    let index = nums2.indexOf(target);
    if (index > -1) {
      res.push(target);
      nums1.splice(i, 1);
      nums2.splice(index, 1);
      i--;
    }
  }

  return res;
};
```



### hash

> 时间复杂度：O(m+n)

对较小的数组进行hash



```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let res = [];
  let map = null;
  if (nums1.length > nums2.length) {
    // nums2 进行hash
    map = hashArr(nums2);
    res = findResArr(map, nums1);
  } else {
    // nums1 进行hash
    map = hashArr(nums1);
    res = findResArr(map, nums2);
  }
  return res;
};

function hashArr(arr) {
  let map = new Map();
  for (let item of arr) {
    if (map.has(item)) {
      let num = map.get(item);
      map.set(item, ++num);
    } else {
      map.set(item, 1);
    }
  }
  return map;
}

function findResArr(map, arr) {
  let res = [];
  for (let item of arr) {
    if (map.has(item)) {
      let num = map.get(item);
      if (num) {
        res.push(item);
        map.set(item, --num);
      }
    }
  }
  return res;
}
```





## 补充





### 给定的数组已经排好序

使用双指针法



```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let res = [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return res;
};
```









----

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

