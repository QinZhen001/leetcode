// function allPermute(nums, curSize, visited, record, path) {
//   if (curSize === nums.length) {
//     // path是引用型数据 要拷贝出来 不然path或变动 
//     path = path.slice()
//     record.push(path);
//     return;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (!visited[i]) {
//       path.push(nums[i]);
//       visited[i] = true;
//       allPermute(nums, curSize + 1, visited, record, path);
//       // 回溯状态重置
//       path.pop();
//       visited[i] = false;
//     }
//   }
// }

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permute = function (nums) {
//   let result = [];
//   let len = nums.length;
//   let visited = new Array(nums.length).fill(false);
//   let path = [];
//   let record = [];
//   let curSize = 0;
//   allPermute(nums, curSize, visited, record, path);
//   return record;
// };

// let param1 = [1, 2, 3];
// let param2 = 2;
// const res = permute(param1);
// console.log("res", res);


let arr  = []
arr.push(1,2,3,4,5)
console.log(arr)