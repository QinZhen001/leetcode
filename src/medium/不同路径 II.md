## 不同路径 II

[https://leetcode-cn.com/problems/unique-paths-ii/](https://leetcode-cn.com/problems/unique-paths-ii/)

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 `1` 和 `0` 来表示。

说明：m 和 _n_ 的值均不超过 100。

```
示例 1:

输入:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
输出: 2

解释:
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
```

### 代码

### 直接 dfs (会超时)

时间复杂度：O(n^m)

```js
let path = 0;
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  dfs(0, 0, obstacleGrid);
  let finalPath = path;
  path = 0;
  return finalPath;
};

function dfs(x, y, obstacleGrid) {
  let m = obstacleGrid.length; // 行
  let n = obstacleGrid[0].length; // 列

  if (x == n - 1 && y == m - 1 && obstacleGrid[y][x] !== 1) {
    return path++; 
  }

  if (inArea(x, y, obstacleGrid) && obstacleGrid[y][x] !== 1) {
    // 在地图内 且 没有障碍物
    dfs(x + 1, y, obstacleGrid);
    dfs(x, y + 1, obstacleGrid);
  }
}

function inArea(x, y, obstacleGrid) {
  let m = obstacleGrid.length; // 行
  let n = obstacleGrid[0].length; // 列

  return x >= 0 && y >= 0 && x < n && y < m;
}
```

### 动态规划

时间复杂度：O(nm)

注意：

- dp 默认值 0
- **初始化 dp 时候,我们需要初始化第一行和第一例，一旦遇到障碍物后面肯定是走不通的，也就是这条路径后面的位置对应的 dp 的值是 0**
- 开始位置存在障碍物时返回 0

```js
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length; // 行
  let n = obstacleGrid[0].length; // 列

  if (m === 0 || n == 0) {
    return 0;
  }

  if (obstacleGrid[0][0] === 1) {
    // 开始位置存在障碍物
    return 0;
  }

  // 初始化
  let dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }

  // 初始化第一列
  // 注意：一但出现障碍物后面的路就走不通了
  let mFlag = false;
  for (let i = 0; i < m; i++) {
    if (mFlag) {
      break;
    }
    if (obstacleGrid[i][0] === 0) {
      dp[i][0] = 1;
    } else {
      mFlag = true;
    }
  }

  // 初始化第一行
  // 注意：一但出现障碍物后面的路就走不通了
  let nFlag = false;
  for (let i = 0; i < n; i++) {
    if (nFlag) {
      break;
    }
    if (obstacleGrid[0][i] === 0) {
      dp[0][i] = 1;
    } else {
      nFlag = true;
    }
  }

  // 动态规划
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] == 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};
```

---

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-paths-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
