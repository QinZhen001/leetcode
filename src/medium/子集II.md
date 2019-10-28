## 子集 II

[https://leetcode-cn.com/problems/subsets-ii/](https://leetcode-cn.com/problems/subsets-ii/)



给定一个**可能包含重复元素**的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

```

示例:

输入: [1,2,2]
输出:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
```


### 代码


```javascript

  function backtrack(i, nums, res, tmp) {
    let t = Array.isArray(tmp) ? [...tmp] : [tmp]
    res.push(t)
    for (let j = i; j < nums.length; j++) {
      if (j > i && nums[j] === nums[j - 1]) {
        continue
      }
      tmp.push(nums[j])
      backtrack(j + 1, nums, res, tmp);
      tmp.pop();
    }
  }

  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  var subsetsWithDup = function (nums) {
    let res = []
    nums.sort()
    console.log("nums", nums)
    backtrack(0, nums, res, [])
    return res
  };
```


### 思路


回溯 + 剪枝


------------




来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subsets-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



