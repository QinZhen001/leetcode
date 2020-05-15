// class Yideng {
//   static str = "京程一灯"
//   // 赋值 会将其作为实例的属性
//   sayStr = () => {
//     throw new Error("Need to implement")
//   }
// }

// class Student extends Yideng {
//   constructor(){
//     super()
//   }

//   // 声明的属性 放在原型链上
//   sayStr(){
//     console.log(Student.str)
//   }
// }

// const laoyuan = new Student()
// console.log(Student.str) // 京程一灯

// // 先找实例的属性再去原型链找 (存在实例属性)
// laoyuan.sayStr()   // Error("Need to implement")

// class Yideng {
//   str = "京城一等"
//   static aaa="aaa"
// }

// const obj = new Yideng()
// console.log(obj.aaa) // undefined
// console.log(obj.constructor.aaa) //aaa
// console.log(Yideng.aaa) //aaa
// console.log(obj.constructor == Yideng) // true
// console.log(obj.__proto__ == Yideng.prototype) // true
// debugger

// console.log(obj.str)
// console.log(obj.aaa)
// console.log(Yideng.aaa)
// console.log("obj.constructor.aaa",obj.constructor)

// function test(...args) {
//   console.log(111, args);
//   console.log(222, ...args);
// }

// test(()=>{console.log(111)},()=>{console.log(2222)},123,3456)

// let arr = [`1`]

// if(arr.length){
//   console.log("asdasd")
// }

// 写一个函数只检查+0和-0，-0则返回true，+0返回false
// function isNegtiveZero(num){
//   return Object.is(num,-0)
// }

// let res1 = isNegtiveZero(-0)
// console.log("res1",res1) // true
// let res2 = isNegtiveZero(+0)
// console.log("res2",res2) // false

// let res = (1 / -0)
// console.log(typeof res)

// let arr = ["aa","bbb","ccc"]

// let res  = arr.reduce((ret,item)=>{
//   console.log("ret",ret)
//   console.log("item",item)
//   ret[item] = "111"
//   return ret
// },[])

function dispatch(...args) {
  // 这里的this指向midApi对象
  console.log("dispatch", this); 
  console.log("args", args);
}

const midApi = {
  getState: "...",
  dispatch: dispatch,
};


midApi.dispatch(1,2,3,4,5)