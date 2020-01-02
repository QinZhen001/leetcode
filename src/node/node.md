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



