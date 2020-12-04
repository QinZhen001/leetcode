const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const list = []
  if (!matrix || !matrix.length) {
    return list
  }
  // 行
  const rows = matrix.length
  // 列
  const columns = matrix[0].length
  const total = rows * columns
  const visited = new Array(rows) // 记录已经走过的路径
  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(columns).fill(false)
  }
  let row = 0
  let column = 0
  // 关键点
  let directionIndex = 0

  for (let i = 0; i < total; i++) {
    list.push(matrix[row][column])
    visited[row][column] = true
    let nextRow = row + directions[directionIndex][0]
    let nextColumn = column + directions[directionIndex][1]
    if (
      nextRow < 0 ||
      nextRow >= rows ||
      nextColumn < 0 ||
      nextColumn >= columns ||
      visited[nextRow][nextColumn] // 
    ) {
      console.log(row,column)
      debugger
      directionIndex = (directionIndex + 1) % 4
    }
    row = row + directions[directionIndex][0]
    column = column + directions[directionIndex][1]
  }
  // console.log('list', list)
  return list
}

let parmas = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
const res = spiralOrder(parmas)
console.log('res', res)
