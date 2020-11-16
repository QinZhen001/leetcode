const obj = {
  foo: {
    name: 'foo',
    bar: {
      name: 'bar',
      baz: {
        name: 'baz',
        aChild: null, //待会让它指向obj.foo
      },
    },
  },
}
obj.foo.bar.baz.aChild = obj.foo
// foo->bar->baz->aChild->foo 形成环


function deepClone(obj,map = new WeakMap()){
  if(typeof obj !== 'object') {
    return obj
  }  
  if(map.get(obj)){
    return map.get(obj)
  }
  let cloneObj =  Array.isArray(obj) ? [] : {} 
  map.set(obj,cloneObj)
  for(let key in obj){
    cloneObj[key] = deepClone(obj[key],map)
  }
  return cloneObj
}


let res  = deepClone(obj)
console.log(res)
console.log(res)
console.log(res)
console.log(res)




// TypeError: cyclic object value
// let res =  JSON.parse(JSON.stringify(obj))

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
// 解决：

// const seen = [] 
// let res = JSON.parse(
//   JSON.stringify(obj, (key, value) => {
//     if (typeof value === 'object' && value !== null) {
//       if (seen.indexOf(value) !== -1) {
//         // 已存在 变为空指针
//         return null
//       }
//       seen.push(value);
//     }
//     return value
//   })
// )
// console.log(res)


console.log("master 分支向前推进")
