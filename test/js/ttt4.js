// class myPromise{
//   constructor(fn){
//     this
//   }

//   then(){

//   }

//   finally(){

//   }
// }

// const test = () => new Promise((resolve,reject)=>{
//   resolve(111)
// })

// let p =  test()
// p.then(res=>{
//   console.log(res)
// }).finally(()=>{
//   console.log('finally')
// })

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let temp = nums.slice()
  nums.sort((a, b) => a - b)
  let map = new Map()
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i]
    if (!map.has(item)) {
      map.set(item,i)
    }
  }
  for(let item of temp){
    res.push(map.get(item))
  }

  return res
}

const nums = [6, 5, 4, 8]
const res =  smallerNumbersThanCurrent(nums)
console.log(res)

// let arr = [1, 10, 111, 43, 20, 30, 22]
// arr.sort((a, b) => a - b)
// console.log(arr)
