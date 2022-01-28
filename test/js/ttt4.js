/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  if (!board || !board.length || !board[0].length) {
    return false;
  }

  // 行
  for (let i = 0; i < board.length; i++) {
    if (!test(board[i])) {
      return false;
    }
  }

  // 列
  for (let i = 0; i < board[0].length; i++) {
    let arr = [];
    for (let j = 0; j < board.length; j++) {
      arr.push(board[j][i]);
    }
    if (!test(arr)) {
      return false;
    }
  }

  // 3*3
  for (let num = 0; num < 9; num++) {
    // 总共9个 3*3
    let arr = [];
    let startX = parseInt(num / 3) * 3;
    let startY = (num % 3) * 3;
    console.log(startX, startY);
    for (let i = startX; i < startX + 3; i++) {
      for (let j = startY; j < startY + 3; j++) {
        arr.push(board[i][j]);
      }
    }
    if (!test(arr)) {
      return false;
    }
  }

  return true;
};

function test(arr) {
  let obj = {};
  for (let item of arr) {
    if (item !== ".") {
      if (obj[item]) {
        return false;
      }
      obj[item] = 1;
    }
  }
  return true;
}

board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const res = isValidSudoku(board);
console.log("res", res);
