## N皇后

[https://leetcode-cn.com/problems/n-queens/](https://leetcode-cn.com/problems/n-queens/)



n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。



上图为 8 皇后问题的一种解法。

给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

```

示例:

输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。
```


### 代码

```javascript
  let ans = []
  let list = []
  /**
   * @param {number} n
   * @return {string[][]}
   */
  var solveNQueens = function (n) {
    if (n === 1) {
      return [["Q"]]
    }
    let param = new Map()
    for (let i = 0; i < n; i++) {
      let arr = []
      for (let j = 0; j < n; j++) {
        if (j === i) {
          arr.push("Q")
        } else {
          arr.push(".")
        }
      }
      param.set(i, arr)
    }
    queens(n, new Array(n), new Array(2 * n - 1), new Array(2 * n - 1), param, 0)
    // 拷贝一份 清空原来全局数据  (防止多次调用程序出错)
    let resList = list
    list = []
    return resList
  };

  function queens(n, y, w, wc, param, i) {
    if (ans.length === n) {
      // 拷贝出来 (js引用问题)
      let arr = [...ans]
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].join("")
      }
      list.push(arr)
    } else {
      for (let j = 0; j < n; j++) {
        // 判断当前位置是否可用  (列 主对角线 次对角线)
        if (y[j] || w[n - 1 - i + j] || wc[i + j])
          continue
        // 可用 (标记)
        y[j] = true
        w[n - 1 - i + j] = true
        wc[i + j] = true
        ans.push(param.get(j));
        //递归下一行是否可以放置皇后，直到所有皇后都放到对应的位置或者该行无法放置皇后则结束
        queens(n, y, w, wc, param, i + 1);
        // 递归完恢复现场
        ans.pop()
        y[j] = false;
        wc[i + j] = false;
        w[n - 1 - i + j] = false;
      }
    }
  }

```


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/n-queens
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
