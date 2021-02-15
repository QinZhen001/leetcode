/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length;
  const arr = new Array(matrix.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(arr.length).fill(0);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      arr[j][len - i - 1] = matrix[i][j];
    }
  }
  matrix = arr;
  console.log(matrix);
};

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const res = rotate(arr);
console.log("res", res);
