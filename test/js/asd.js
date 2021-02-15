// 编程题: 给一个数组，数组里的值是 0~9 之间的，
// 选取其中的一些数，组合成一个能被3整除的最大的数。

let max = [];
let paths = [];

/**
 * 是否能被三整除
 * @param {*} arr 
 */
function isDivisionThree(arr){
  let total = 0 
  arr.forEach(item => {
    total += item
  });
  return total % 3 === 0 
}


function calc(arr) {
  arr.sort((a, b) => b - a);
  dfs(0, arr.length, [], [], arr);
  console.log("max",max)
}

function dfs(start, end, path, visited, arr) {
  if (start == end) {
    console.log(1111)
    if(isDivisionThree(path.slice())){
      debugger
      // 注意：当我们找到最大值之后就停止dfs
       max = path.slice()
       console.log(max)
    }
    return;
  }

  if(max && max.length){
    return
  }
  


  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      path.push(arr[i]);
      dfs(start + 1, end, path, visited, arr);
      visited[i] = false;
      path.pop();
    }
  }
}

const arr = [3, 0, 1, 5, 6];
const res = calc(arr);
console.log("res", res);
