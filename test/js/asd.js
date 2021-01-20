let paths = []
/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function (obstacleGrid) {
  let n = obstacleGrid.length - 1
  let m = obstacleGrid[0].length - 1
  if (obstacleGrid[0][0] == 1 || obstacleGrid[n][m] == 1) {
    return []
  }

  // dp[i][j] = 0 该点位置在某一条路径上 （走得通）
  // do[i][j] = 1 该点位置不在任何一条路径上 或 在障碍物上 （走不通）
  const dp = JSON.parse(JSON.stringify(obstacleGrid))

  for (let i = n; i >= 0; i--) {
    for (let j = m; j >= 0; j--) {
      if (i == n && j == m) {
        // 处于右下角 （终点位置）
        continue
      }
      if (dp[i][j] == 1) {
        // 处于障碍物位置
        continue
      }
      if (i == n) {
        // 处于最后一行
        dp[i][j] = dp[i][j + 1]
      } else if (j == m) {
        // 处于最后一列
        dp[i][j] = dp[i + 1][j]
      } else {
        // 处于中间位置
        // 右 下 只要有一个位置走的通就走的通 => 只要存在一个0就是0 （0是走的通）
        dp[i][j] = dp[i][j + 1] && dp[i + 1][j]
      }
    }
  }

  if (dp[0][0] == 1) {
    // 走不通
    return []
  }

  // 深度搜索 找到答案
  dfs(dp, 0, 0)
  const result = JSON.parse(JSON.stringify(paths))
  paths = []
  return result
}

function dfs(dp, x, y) {
  let m = dp.length - 1
  let n = dp[0].length - 1
  paths.push([x, y])
  if (x == m && y == n) {
    return
  }
  // 我们只需要找到一条路径
  // 0的路径就是答案
  if (x < m && dp[x + 1][y] == 0) {
    dfs(dp, x + 1, y)
  } else if (y < n && dp[x][y + 1] == 0) {
    dfs(dp, x, y + 1)
  }
}

const arr = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]
// const arr = [[1]]
// const arr = [[1,0]]
// const arr = [[0], [0]]
const res = pathWithObstacles(arr)
console.log('res', res)
