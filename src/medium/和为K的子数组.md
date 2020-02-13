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

解决：动态规划

这种办法在大数据下会超时

不通过


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

[https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/he-wei-kde-zi-shu-zu-by-leetcode/](https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/he-wei-kde-zi-shu-zu-by-leetcode/)

这个实现是基于累加和数组


通过

时间复杂度：O(n^2) 


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



----

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subarray-sum-equals-k
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。