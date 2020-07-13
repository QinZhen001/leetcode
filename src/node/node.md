## node 

记录一下使用js刷算法的坑


### 数组的初始值

当我们不给数组赋初始值的时候，默认数组中的每一个元素都是undefined，所以这时候我们拿数组元素去加减乘除计算，都会得到NaN

```javascript
  let arr = new Array(5)
  console.log(arr[3])  // undefined
  arr[3]++
  console.log(arr[3])  // NaN
```

所以一定要记得给数组赋初始值

```javascript

  let arr = new Array(5).fill(0)
  console.log(arr[3])  // 0
  arr[3]++
  console.log(arr[3])  // 1
```



### new Array的问题


```javascript

  const matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ]

  let dp = new Array(matrix.length).fill(new Array(matrix[0].length).fill(0))
  console.log(dp)
  // 当我们改变 dp[2][3]时 其实我们是改变了dp[i][3]  (也就是每一行3下标的元素都改为了1)
  dp[2][3] = 1

```


要注意使用fill()给二维数组赋初始值



```javascript

  const matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ]

  let dp = new Array(matrix.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(matrix[0].length).fill(0)
  }
  console.log(dp)
  // 当我们改变 dp[2][3]时  只会改变dp[2][3]
  dp[2][3] = 1
  console.log(dp)
```







### 数组循环时删除元素



有时候我们在数组循环的时候去删除元素，可能导致部分元素没有循环到



所以，当我们在循环中删除元素后，要保持下标不变





```js
var intersect = function (nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    let target = nums1[i];
    let index = nums2.indexOf(target);
    if (index > -1) {
      res.push(target);
      nums1.splice(index, 1);
      nums2.splice(index, 1);
      // 注意这里  
      i--;
    }
  }

  return res;
};
```





