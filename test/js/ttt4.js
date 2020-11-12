// 请实现以下的 LazyArray ，使下列的代码调用正确
// 实现LazyArray中的 map / filter / delay / forEach

function promiseFy(fn, num = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = fn()
      resolve(resizeBy)
    }, num)
  })
}

class LazyArray {
  constructor(arr) {
    this.arr = arr
    this.taskList = []
    this.num = null
  }

  filter(fn) {
    let finalFn = () => {
      this.arr = this.arr.filter(fn)
      return null
    }
    this.taskList.push(finalFn)
    return this
  }
  map(fn) {
    console.log(this.arr.length)
    for (let i = 0; i < this.arr.length; i++) {
      let finalFn = () => {
        console.log(11111, this.arr, i)
        let item = this.arr[i]
        if (item !== null && item !== undefined && !isNaN(item)) {
          this.arr[i] = fn(item)
          return this.arr[i]
        }
      }
      this.taskList.push(finalFn)
    }
    return this
  }

  async forEach(fn) {
    while (this.taskList.length) {
      let task = this.taskList.shift()
      let res = task()
      if (res !== null && res !== undefined && !isNaN(res)) {
        if (this.num) {
          // 存在延时
          await promiseFy(() => fn(res), this.num)
        } else {
          fn(res)
        }
      }
    }
    return this
  }
  delay(num) {
    this.num = num
    return this
  }
}

const lazy1 = new LazyArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

const lazy2 = lazy1
  .filter((v) => v % 2 === 0)
  .map((v) => {
    console.log(`map ${v} to ${v * 5}`)
    return v * 5
  })
// 上一条语句执行时，不进行任何输出

// lazy2.forEach((v) => {
//   console.log('consume lazy2', v)
// })

// 上一条语句执行时，输出以下内容:
//  map 0 to 0
//  consume lazy2 0
//  map 2 to 10
//  consume lazy2 10
//  ......

// 进阶题目：

const lazy3 = lazy2.delay(500)
lazy3.forEach((v) => {
  console.log('consume lazy3', v)
})

// 上一条语句执行时，不会立刻产生「consume lazy3 ...」这样的输出
// 所有「consume lazy3 ...」这样的输出将在 500 毫秒之后产生
