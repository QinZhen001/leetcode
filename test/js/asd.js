// let arr = [3, 6, 9, 2];
// bucketSort(arr);

// function bucketSort(arr) {
//   let min = Number.MAX_VALUE;
//   let max = Number.MIN_VALUE;
//   for (let item of arr) {
//     if (item > max) {
//       max = item;
//     }
//     if (item < min) {
//       min = item;
//     }
//   }
//   if (min == max) {
//     return 0;
//   }
//   // console.log(max, min);
//   let buckets = new Array(max - min + 1).fill(0);

//   for (let item of arr) {
//     buckets[item - min]++;
//   }
//   console.log("buckets",buckets)
// }

// function rid(str) {
//   return str.replace(/a+/g,'a').replace(/c+/g,'c').replace("b","")
// }

// let res1 =  rid('aacbd')
// let res2 =  rid('aabcd')
// let res3 =  rid('aaabbccc')

// console.log('res1',res1)
// console.log('res2',res2)
// console.log('res3',res3)


function run(gen){
  return new Promise((resolve,reject)=>{
    if(typeof gen == 'function'){
      gen = gen()
    }

    if(!gen || typeof gen.next !== function){
      // gen 不是迭代器
      return resolve(gen)
    }

    onFullfilled()

    function onFullfilled(res){
      let ret 
      try {
        ret = gen.next(res)
      } catch (error) {
        return reject(error)
      }
      next(ret)
    }

    function onRejected(err){
      let ret 
      try {
        reject = gen.throw(err)
      } catch (error) {
        return  reject(error)
      }
      next(ret)
    }

    function next(ret){
      if(ret.done){
        return resolve(ret.value)
      }

      let value = toPromise(ret.value)
      if(value && isPromise(value)){
        return lue.then(onFulfilled, onRejected);
      }
      return onRejected(new Error('You may only yield a function'))
    }

  })
}



    class Node {
      constructor(element) {
        this.element = element
        this.next = null
      }
    }


