// function passGame(names, num) {
//   let start = 1
//   // while (names.length > 1) {
//   //   const { arr, index } = deleteOne(names, num, start)
//   //   names = arr
//   //   start = start + 1
//   //   if (start >= names.length) {
//   //     start = 1
//   //   }
//   // }

//   let res = deleteOne(names, num, start)
//   console.log(res)
//   res = deleteOne(res.arr, num, res.index + 1)
//   console.log(res)
//   // names = arr
//   // start = index + 1
//   // const res =  deleteOne(names, num, start)
//   // names = res.arr
//   // console.log(names)
//   return names[0]
// }

// function deleteOne(names, num, start) {
//   if (start >= names.length) {
//     debugger
//     start = 1
//   }
//   let count = start
//   let item = names[start]
//   let cur = start
//   while (count <= num) {
//     cur = count % names.length
//     item = names[cur - 1]
//     count++
//   }

//   return {
//     arr: names.filter((i) => i !== item),
//     index: cur,
//     item,
//   }
// }

// const names = ['john', 'jack', 'camila', 'ingrid', 'carl']
// const num = 8
// const res = passGame(names, num)

// let arr = [1, 2, 3, 4, 5]
// const ddd =  arr.slice(0, 0)
// console.log(ddd)


function Foo() {
  Foo.a = function () {
    console.log(1)
  }

  // this.a = function () {
  //   console.log(2)
  // }
}

Foo.prototype.a = function () {
  console.log(3)
}

Foo.a = function () {
  console.log(4)
}



Foo.a()  //4 
let obj = new Foo()
obj.a() //3
Foo.a() //1