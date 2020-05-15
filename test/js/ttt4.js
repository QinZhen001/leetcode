function flatten(arr) {
  return arr.reduce((total, cur) => {
    return total.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}

// function dealArr(arr) {
//   // 扁平化
//   let flaternArr = flatten(arr);
//   // 去重 (set)
//   let setArr = Array.from(new Set(flaternArr));
//   // 排序 (注意sort函数)
//   setArr.sort((a, b) => a - b);
//   return setArr
// }

// let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// let res = dealArr(arr);
// console.log("res", res);



let obj = {
  name:"asd",
  father:"ddd",
  mother:"rrr",
  list:[1,2,3,5]
}

let newObj = {...obj,list:[8,8,8,8,8,8]}

console.log("newObj",newObj)


