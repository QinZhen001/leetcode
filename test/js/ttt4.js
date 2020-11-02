function swap(arr,i,j){
  [arr[i],arr[j]] = [arr[j],arr[i]] 
}


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
  for(let i=0;i<k;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        swap(arr,i,j)
      }
    }
  }
  return arr.slice(0,k)
};

let  arr = [1,3,5,7,2,4,6,8], k = 4
const res =  smallestK(arr,k)
console.log("res",res)


// let arr = [1,2,3,4,5]
// swap(arr,2,3)
// console.log("arr",arr)
