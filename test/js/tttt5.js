window.addEventListener('error', function (e) {
  const { message, filename, lineno, colno, error } = e
  debugger
})

window.addEventListener('unhandledrejection', (e) => {
  console.log(e)
})

const res = function () {
  return new Promise((resolve, reject) => {
    reject(111)
  })
}

res().then(res=>{
  console.log(111,res)
})
