/**
 *
 * @param {*} matrix  矩阵
 * @param {*} str 剩余的字符串
 * @param {*} i x坐标
 * @param {*} j y坐标
 * @param {*} map 走过的路径坐标
 */
function dfsFind(matrix, str, i, j, map) {
  if (!str.length) {
    console.log(map);
    return true;
  }

  if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) {
    return false;
  }

  if (matrix[i][j] !== str[0]) {
    return false;
  }

  if (map[i][j]) {
    return false;
  }

  // 走当前地点
  map[i][j] = true;

  // 上 下 左 右 有一个能走就行
  return (
    dfsFind(matrix, str.slice(1), i - 1, j, map) ||
    dfsFind(matrix, str.slice(1), i + 1, j, map) ||
    dfsFind(matrix, str.slice(1), i, j + 1, map) ||
    dfsFind(matrix, str.slice(1), i, j - 1, map)
  );
}

function test(matrix, str) {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return false;
  }

  // 记录下走过的点
  let map = new Array(matrix.length);
  for (let i = 0; i < map.length; i++) {
    map[i] = new Array(matrix[0].length).fill(false);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === str[0]) {
        let flag = dfsFind(matrix, str, i, j, map);
        if (flag) {
          return true;
        }
      }
    }
  }

  return false;
}

const str = "abbbb";
const matrix = [
  ["*", "*", "*", "*", "b", "*"],
  ["*", "*", "a", "b", "b", "*"],
  ["*", "*", "*", "*", "b", "*"],
  ["*", "*", "*", "*", "b", "*"],
];
const res = test(matrix, str);
console.log("res", res);
