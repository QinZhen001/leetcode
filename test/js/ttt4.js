// function myPromise(executor) {
//   let self = this
//   self.status = 'pending'
//   self.success = undefined
//   self.error = undefined

//   self.onSuccessCallbacks = []
//   self.onErrorCallbacks = []

//   function resolve(success) {
//     if (self.status == 'pending') {
//       self.status = 'resolved'
//       self.success = success
//       self.onSuccessCallbacks.forEach((element) => {
//         element()
//       })
//     }

//     function reject(error) {
//       if (self.status == 'pending') {
//         self.status = 'rejected'
//         self.error = error
//         self.onErrorCallbacks.forEach((element) => element())
//       }
//     }

//     try {
//       executor(resolve, reject)
//     } catch (err) {
//       reject(err)
//     }
//   }
// }

// myPromise.prototype.then = function (onResolved, onRejected) {
//   let self = this
//   let promseAgain = new myPromise((resolve, reject) => {
//     if (self.status == 'pending') {
//       self.onSuccessCallbacks.push(() => {
//         let x = onResolved(self.success)
//         resolvePromise(promseAgain, x, resolve, reject)
//       })
//       self.onErrorCallbacks.push(() => {
//         let x = onRejected(self.error)
//         resolvePromise(promseAgain, x, resolve, reject)
//       })
//     }

//     if (self.status === 'resolved') {
//       let x = onResolved(self.success)
//       resolvePromise(promseAgain, x, resolve, reject)
//     }
//     if (self.status === 'rejected') {
//       let x = onRejected(self.error)
//       resolvePromise(promseAgain, x, resolve, reject)
//     }
//   })
//   return promiseAgain
// }

// function resolvePromise(promseAgain, x, resolve, reject) {
//   if (promseAgain === x) {
//     return reject(new Error('循环调用'))
//   }
//   if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
//     try {
//       let then = x.then
//       if (typeof then === 'function') {
//         then.call(
//           x,
//           (y) => {
//             resolvePromise(promiseAgain, y, resolve, reject)
//           },
//           (e) => {
//             reject(e)
//           }
//         )
//       } else {
//         resolve(x)
//       }
//     } catch (err) {
//       reject(err)
//     }
//   }
// }

function isPromise(ret) {
  return (ret && typeof ret.then === 'function' && typeof ret.catch === "function")
}


function registerActionHandle(fn){
  debugger
  let ret = fn.apply(this)
  if(isPromise(fn)){
    return fn.catch(customHandleError)
  }else{
    return fn
  }
}

function customHandleError(err){
  debugger
  console.log('我是一个自定义错误处理机器',err)
}

// -------------  test -------------

// test未捕获错误
function test(){
  return new Promise((resolve,reject)=>{
    throw Error("err") 
  })
}

// newTest 捕获了错误
const newTest =  registerActionHandle(test)
newTest()

