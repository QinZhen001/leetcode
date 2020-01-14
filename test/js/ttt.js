function dfs(adjacency, flags, i) {
  if (flags[i] == 1) return false;
  if (flags[i] == -1) return true;
  flags[i] = 1;
  for (let j = 0; j < adjacency.length; j++) {
    if (adjacency[i][j] == 1 && !dfs(adjacency, flags, j)) return false;
  }
  flags[i] = -1;
  return true;
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let adjacency = new Array(numCourses)
  for (let i = 0; i < adjacency.length; i++) {
    adjacency[i] = new Array(numCourses).fill(0)
  }
  // 标志位
  let flags = new Array(numCourses).fill(0)

  for (let item of prerequisites) {
    // [1] 是 [0] 的前置课
    adjacency[item[1]][item[0]] = 1
  }
  console.log("adjacency", adjacency)
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(adjacency, flags, i)) {
      return false
    }
  }
  return true

  // console.log("adjacency", adjacency)
};

let arr1 =
  // [0, 0, 1]
  4
// [2,3,-2,4]
let arr2 = [[0, 1], [3, 1], [1, 3], [3, 2]]
let res = canFinish(arr1, arr2)
console.log("res", res)
