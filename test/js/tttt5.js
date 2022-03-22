function adjust(array,target,len){
  for(let i=2*target+1;i<len;)
}

// 构建大顶堆
function creatHeap(array) {
  const len = array.length
  const start = parseInt(len / 2) - 1
  for (let i = start; i >= 0; i--) {
      adjust(array,i,len)
  }
}

function heapSort(array) {
  creatHeap(array)
  console.log(array)
}

let nums = [3, 2, 1, 5, 6, 4]
const res = mergeSort(nums)
console.log('res', res)
