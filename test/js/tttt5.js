const paths = []

function test(arr) {
  arr.sort((a,b)=>b-a)
  dfs(0, arr.length, [], [], arr);
  console.log(paths)
}

/**
 * 
 * @param {*} start 
 * @param {*} end 
 * @param {*} visited 
 * @param {*} path 
 * @param {*} arr 
 */
function dfs(start,end,visited,path,arr){
  if(start == end){
    paths.push(
      path.slice()
    )
    return
  }

  for(let i=0;i<arr.length;i++){
    if(!visited[i]){
      visited[i] = true 
      path.push(arr[i])
      dfs(start+1,end,visited,path,arr)
      visited[i] = false
      path.pop()
    }
  }

}

const arr = [1, 2, 3];
const res = test(arr);
console.log("res", res);
