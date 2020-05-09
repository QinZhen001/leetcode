 // 获取所有数组的交集
 function getIntersection(arrays){
  const othLength = arrays.length
  const result = []

  let maxLength = Number.MAX_VALUE
  let othIndex = othLength

  // 找到maxLength可能的最大值
  while(othIndex--){
    let array = arrays[othIndex]
    maxLength = Math.min(array.length, maxLength)
  }

  const length = arrays[0].length
  let array = arrays[0]
  let index = -1

  outer:
  while(++index < length && result.length < maxLength){
    // 将第一个数组每一项依次取出
    let value = array[index]
    if(!result.includes(value)){
      othIndex = othLength
      while(--othIndex){
        if(!arrs[othIndex].includes(value)){
          // 其中有一个数组不存在value
          continue outer
        }
      }
      result.push(value)
    }
  }

  return result
}

let arr1 = [1,2,3,4,5,6,7,8,9,10]
let arr2 = [1,3,31,45,5,6,7,8,95,100]
let arr3 = [1,2,13,4,5,62,7,8,9,101]

let arrs  = [arr1,arr2,arr3]
let res = getIntersection(arrs)
console .log("res",res)



// let promiseArr = []

// (this.selectedRowKeys).forEach(item => {
//   param.recordId = item
//   console.log('param', param)
//  .then(res => {
//   this.reloadList(false)
//   this.handleSuccess(res)
//   this.handleErrorMsg(res)
//   })
//   })

  // for(let i =0;i<this.selectedRowKeys.length;i++){
  //    let item = selectedRowKeys[i]
  //    let params = {recordId:item}
  //    try{
  //     let res = await delRecord(param)
  //     // 串行执行
  //     // ....
  //    }catch(e){
  //       // 有错误
  //       // 处理错误
  //       // return 这样就不会执行到刷新逻辑
  //       return
  //    }
  //    if(i===this.selectedRowKeys.length-1){
  //      // 执行到最后一项
  //      // 刷新
  //    }
  // }




// function test() {
//   try {
//     console.log("try")
//     throw new Error("aaa")
//   } catch (e) {
//     console.log("catch",e)
//     return
//   }

//    console.log("会执行吗")
// }

// test();





// function delRecord({index,...args}){
//     // index 索引
//     // args 其他参数
//     return new Promise((resolve,reject)=>{
//       resolve({
//         index:index,
//         // data 是请求的返回的data
//         data:[]
//       })
//     })
// }

// let promiseArr = [
//   // index 是标记的索引 代表第几条数据
//   delRecord({index:1}),
//   delRecord({index:2}),
//   delRecord({index:3})
// ]


// Promise.all(promiseArr).then(res=>{
//   res.forEach(item=>{
//     console.log(`我是第 ${item.index} 条数据, 我的值是：${item.data}` )
//   })
// })