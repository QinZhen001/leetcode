将一个字符串转换为回文字符串的最小代价
转换操作包括三种：add， delete， replace 一个字符
比如将"abcdef" 转换成“abccba”最少需要3步

DP, 状态方程 f[i][j] 表示将以i开始j结尾的字符串转换为回文字符串的最小代价
如果  str[i] == str[j] , 那么只需考虑，f[i+1][j-1]的情况
如果  str[i] != str[j], 那么考虑三种操作，
1） delete str[j],  加上将[i, j-1] 字符转换为回文串的最小代价
2） delete str[i],   加上将[i+1, j] 字符转换为回文串的最小代价
3） replace str[i] with str[j] (or vice verse), 加上将[i+1, j-1] 字符转换为回文串的最小代价



function minPath(str) {
  if (str.length <= 1) {
    return 0
  }

  let dp = new Array(str.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(str.length).fill(0)
  }

  // 注意点： i从str.length - 2开始向前循环
  for (let i = str.length - 2; i >=0; i--) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        dp[i][j] = dp[i + 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i + 1][j - 1], dp[i + 1][j], dp[i][j - 1]) + 1
      }
    }
  }

  console.log(dp)
  return dp[0][str.length-1]
}

// 0: (6) [0, 0, 0, 0, 0, 0]
// 1: (6) [0, 0, 0, 0, 0, 0]
// 2: (6) [0, 0, 0, 1, 1, 2]
// 3: (6) [0, 0, 0, 0, 1, 1]
// 4: (6) [0, 0, 0, 0, 0, 1]
// 5: (6) [0, 0, 0, 0, 0, 0]


let str = 'abcdef'
let res =  minPath(str)
console.log('res',res)


// Promise.myAll = function(arr){
//   const result = []
//   let isFail = false
//   let errInfo
//   let last = arr.length

//   for(let i=0;i<arr.length;i++){
//       if(isFail){
//         return Promise.reject(errInfo)
//       }
//       // 挨个运行promise
//       arr[i].then(res=>{
//         result.push(res)
//         // 多个promise并行行进 并不知道哪一个最后一个执行完
//         // 用last判断
//         last--
//         if(last==0){
//           debugger
//           return Promise.resolve(result)
//         }
//       }).catch(err=>{
//         errInfo = err
//         isFail = true
//       })
//   }
// }

// let aaa = new Promise((resolve,reject)=>{
//   resolve(true)
// })

// let bbb = new Promise((resolve,reject)=>{
//   resolve(true)
// })

// let arr  = [aaa, bbb]
// Promise.myAll(arr).then(rrr=>{
//   console.log(rrr)
// })
