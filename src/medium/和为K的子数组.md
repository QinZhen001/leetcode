## 和为K的子数组

[https://leetcode-cn.com/problems/subarray-sum-equals-k/](https://leetcode-cn.com/problems/subarray-sum-equals-k/)


给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

```
示例 1 :

输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
```

说明 :

* 数组的长度为 [1, 20,000]。
* 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。


### 代码



#### 动态规划

> 不通过 超出时间范围
>
> 时间复杂度：O(n^2) 


```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let dp = new Array(nums.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(nums.length)
    }
    for (let i = 0; i < nums.length; i++) {
        dp[i][i] = nums[i]
    }
    let total = 0
    // console.log(dp)
    for (let i = 0; i < dp.length; i++) {
        for (let j = i; j < dp.length; j++) {
            if (i !== j)
                dp[i][j] = dp[i][j - 1] + nums[j]
            if (dp[i][j] === k) {
                total++
            }
        }
    }
    // console.log(dp)
    return total
};

```

----



#### 累加和数组

> 不通过 超出时间范围
>
> 时间复杂度：O(n^2) 

[https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/he-wei-kde-zi-shu-zu-by-leetcode/](https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/he-wei-kde-zi-shu-zu-by-leetcode/)

这个实现是基于累加和数组


```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let totals = [] // totals[i] 记录 0 到 i-1 元素的和
    totals[0] = 0
    let res = 0
    for (let i = 1; i <= nums.length; i++) {
        totals[i] = totals[i - 1] + nums[i - 1]
    }
    // console.log(totals)
    for (let start = 0; start < nums.length; start++) {
        for (let end = start + 1; end <= nums.length; end++) {
            let num = totals[end] - totals[start]
            if (num === k) {
                res++
            }
        }
    }
    return res
};


```





#### 前缀和 + 哈希表优化

https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/he-wei-kde-zi-shu-zu-by-leetcode-solution/

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  if (!nums || !nums.length) {
    return 0
  }
  const map = new Map()
  // 为了 map.get(pre - k) => map.get(0) 的情况
  map.set(0, 1);

  let count = 0
  let pre = 0
  for (let x of nums) {
    pre += x
    if (map.has(pre - k)) {
      // 也就是说这个时候 pre为k
      count += map.get(pre - k)
    }
    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1)
    } else {
      map.set(pre, 1)
    }
  }

  // console.log(map)
  return count
}
```







### 测试

```js
const nums = [-1, -1, 1]
const k = 0
const res = subarraySum(nums, k)
console.log('res', res)
```













----

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subarray-sum-equals-k
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。