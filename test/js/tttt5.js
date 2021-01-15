function promiseAny(arr) {
  return new Promise(async (resolve,reject)=>{
    const results = []
    for (let i = 0; i < arr.length; i++) {
      try{
        const res = await arr[i]()
        return resolve(res) 
      }catch(err){
        results.push(err)
        if(results.length === arr.length){
          return reject(results)
        }
      }
    }
  })
}

var p1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, 'one')
})
var p2 = new Promise(function (resolve, reject) {
  setTimeout(reject, 600, 'two')
})
promiseAny([p1, p2])
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.log(error)
  })
