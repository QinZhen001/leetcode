/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length / 2; i++) {
    let temp = matrix[i].slice();
    matrix[i] = matrix[matrix.length - i-1].slice()
    matrix[matrix.length - i-1] = temp
  }

  for(i=0;i<matrix.length;i++){
    for(let j=0;j<i;j++){
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  console.log(matrix)
};

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const res = rotate(arr);
console.log("res", res);
