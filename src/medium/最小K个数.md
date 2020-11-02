## [最小K个数](https://leetcode-cn.com/problems/smallest-k-lcci/)

[https://leetcode-cn.com/problems/smallest-k-lcci/](https://leetcode-cn.com/problems/smallest-k-lcci/)




设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。

**示例：**

```
输入： arr = [1,3,5,7,2,4,6,8], k = 4
输出： [1,2,3,4]
```

**提示：**

- `0 <= len(arr) <= 100000`
- `0 <= k <= min(100000, len(arr))`



### 代码



#### 冒泡排序前k位



```js
function swap(arr,i,j){
  [arr[i],arr[j]] = [arr[j],arr[i]] 
}


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
  for(let i=0;i<k;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        swap(arr,i,j)
      }
    }
  }
  return arr.slice(0,k)
};
```

