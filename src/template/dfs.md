## 深度搜索(dfs)

dfs多用于地图搜索

我们以一道经典题目为例子

[https://leetcode-cn.com/problems/word-search/](https://leetcode-cn.com/problems/word-search/)


```js
// 定义方向
const direction = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // 行长度
  let m = board.length;
  // 列长度
  let n = board[0].length;
  // 记录路径数组
  let marked = new Array(m);
  for (let i = 0; i < marked.length; i++) {
    marked[i] = new Array(n).fill(false);
  }

  // 地图上的每一个位置进行深度搜索
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0, board, word, marked)) {
        return true;
      }
    }
  }

  return false;
};

function dfs(i, j, start, board, word, marked) {
  // 注意 return判断放到函数最开始
  // 走到最后 判断结束 
  if (start == word.length - 1) {
    return board[i][j] == word[start];
  }

  if (board[i][j] == word[start]) {
    // 当前(i,j)坐标位置满足
    marked[i][j] = true;
    // 4个方向 (这里是核心)
    for (let k = 0; k < 4; k++) {
      let newX = i + direction[k][0];
      let newY = j + direction[k][1];
      if (inArea(newX, newY, board) && !marked[newX][newY]) {
        // 在地图中 且 未搜索过
        if (dfs(newX, newY, start + 1, board, word, marked)) {
          return true;
        }
      }
    }
    marked[i][j] = false;
  }

  return false;
}

function inArea(x, y, board) {
  let m = board.length;
  let n = board[0].length;
  return x >= 0 && x < m && y >= 0 && y < n;
}
```



### 注意点

* 方向的定义 (一般dfs中会有4个方向可搜索 for 4)
* 递归时元素的坐标是否超过边界
* 递归时元素是否已经搜索过 (marked数组)
* dfs(i, j, start, board, word, marked)  
  * start 当前搜索进度
  * board 地图
  * word 要搜索的东西
  * marked 记录数组








