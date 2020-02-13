## 前 K 个高频元素

[https://leetcode-cn.com/problems/top-k-frequent-elements/](https://leetcode-cn.com/problems/top-k-frequent-elements/)


给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

```
示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]


示例 2:

输入: nums = [1], k = 1
输出: [1]
```


说明：

* 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
* 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。


### 代码


```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let res = {}
    for (let i = 0; i < nums.length; i++) {
        let name = nums[i]
        if (res[name]) {
            res[name]++
        } else {
            res[name] = 1
        }
    }
    // console.log(res)
    let list = Object.keys(res)
    let arr = []
    for (let i = 0; i < list.length; i++) {
        let key = list[i]
        let value = res[key]
        arr.push([key, value])
    }
    arr.sort((a, b) => {
        return b[1] - a[1]
    })
    // console.log(arr)
    let fin = []
    for (let i = 0; i < k; i++) {
        let item = arr[i]
        fin[i] = Number(item[0])
    }
    // console.log(fin)
    return fin
};
```



----


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/top-k-frequent-elements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。