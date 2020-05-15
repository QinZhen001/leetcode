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





class Yideng {
  str = "京城一等"
  static aaa="aaa"
}

const obj = new Yideng()
console.log(obj.aaa) // undefined
console.log(obj.constructor.aaa) //aaa
console.log(Yideng.aaa) //aaa
console.log(obj.constructor == Yideng) // true
console.log(obj.__proto__ == Yideng.prototype) // true 
debugger




console.log(obj.str)
console.log(obj.aaa)
console.log(Yideng.aaa)
console.log("obj.constructor.aaa",obj.constructor)
