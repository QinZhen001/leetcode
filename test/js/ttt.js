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
  // 走到最后 判断结束
  if (start == word.length - 1) {
    return board[i][j] == word[start];
  }

  if (board[i][j] == word[start]) {
    marked[i][j] = true;
    // 4个方向
    for (let k = 0; k < 4; k++) {
      let newX = i + direction[k][0];
      let newY = j + direction[k][1];
      if (inArea(newX, newY, board) && !marked[newX][newY]) {
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

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word1 = "ABCCED";
// let word2 = "SEE";
// let word3 = "ABCB";
const res1 = exist(board, word1);
// const res2 = exist(board, word2);
// const res3 = exist(board, word3);

console.log("res1", res1);
// console.log("res2", res2);
// console.log("res3", res3);
