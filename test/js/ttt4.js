// https://leetcode-cn.com/problems/unique-paths-ii/solution/bu-tong-lu-jing-ii-by-leetcode-solution-2/


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

  if (!inArea(x, y, obstacleGrid)) {
    return;
  }

  if (obstacleGrid[y][x] === 1) {
    return;
  }

  if (x == n - 1 && y == m - 1) {
    path++;
  }

  // 在地图内 切 没有障碍物
  dfs(x + 1, y, obstacleGrid);
  dfs(x, y + 1, obstacleGrid);
}

function inArea(x, y, obstacleGrid) {
  let m = obstacleGrid.length; // 行
  let n = obstacleGrid[0].length; // 列

  return x >= 0 && y >= 0 && x < n && y < m;
}

// const parma1 = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0],
// ];

const parma1 = [[1]];

const res = uniquePathsWithObstacles(parma1);
console.log("res", res);
