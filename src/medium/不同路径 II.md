## 不同路径 II

[https://leetcode-cn.com/problems/unique-paths-ii/](https://leetcode-cn.com/problems/unique-paths-ii/)



一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？



网格中的障碍物和空位置分别用 `1` 和 `0` 来表示。



说明：m和 *n* 的值均不超过 100。



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



### 直接dfs (会超时)



```js
let path = 0;
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  dfs(0, 0, obstacleGrid);
  let finalPath = path
  path = 0 
  return finalPath
};

function dfs(x, y, obstacleGrid) {
  let m = obstacleGrid.length; // 行
  let n = obstacleGrid[0].length; // 列

  if (x == n - 1 && y == m - 1 && obstacleGrid[y][x] !== 1) {
    path++;
  }

  if (inArea(x, y, obstacleGrid) && obstacleGrid[y][x] !== 1) {
    // 在地图内 切 没有障碍物
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













------



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-paths-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。















































