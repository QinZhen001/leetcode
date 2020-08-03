/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((num1, num2) => {
    num1 = num1.toString();
    num2 = num2.toString();

    let res1 = Number(num1 + num2);
    let res2 = Number(num2 + num1);

    return res1 > res2 ? -1 : 1;
  });

  // debugger
  // console.log(nums);

  // 或者以0开头的话就返回0
  // if(nums[0] == 0){
  //   return '0'
  // }

  // 处理[0,0,...]的情况 (有多个0的情况)
  nums = nums.join("");
  return nums.replace(/^0+/, "0");
};

const parma1 = 
[824, 938, 1399, 5607, 6973, 5703, 9609, 4398, 8247];;
const parma2 = 8;
const parma3 = 3;

const res = largestNumber(parma1, parma2, parma3);
console.log("res", res, typeof res);

// let aaa = [0,1,0,0]
// if(aaa[1]){
//   console.log(111)
//   debugger
// }
