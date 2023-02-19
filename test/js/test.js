function getNumArr(arr) {
  let numArr = []

  for (let i = 0;i < arr.length;i++) {
    if (numArr.indexOf(arr[i]) === -1) {
      numArr.push(arr[i])
    }
  }

  return numArr
}

arr.array.forEach(element => {
  
});

function solution(a) {

  const numArr = getNumArr(a)
  let min = a.length

  for (let start = 0;start < a.length;start++) {
    for (let end = start + numArr.length;end < a.length;end++) {
      const curArr = a.slice(start, end)
      const finalArr = getNumArr(curArr)
      if (finalArr.length >= numArr.length) {
        if ((end - start) < min) {
          min = end - start
        }
      }
    }
  }

  return min
}


const res = solution([7, 3, 7, 3, 1, 3, 4, 1])

console.log("res", res)
