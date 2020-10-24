
class myPromise{
  constructor(fn){
    this
  }

  then(){

  }

  finally(){
    
  }
}


const test = () => new Promise((resolve,reject)=>{
  resolve(111)
})

let p =  test()
p.then(res=>{
  console.log(res)
}).finally(()=>{
  console.log('finally')
})