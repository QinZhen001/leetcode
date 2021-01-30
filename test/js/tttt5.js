// 3.请使用原生代码实现一个Events模块，可以实现自定义事件的订阅、触发、移除功能
/*
const fn1 = (... args)=>console.log('I want sleep1', ... args)
const fn2 = (... args)=>console.log('I want sleep2', ... args)
const event = new Events();
event.on('sleep', fn1, 1, 2, 3);
event.on('sleep', fn2, 1, 2, 3);
event.fire('sleep', 4, 5, 6);
// I want sleep1 1 2 3 4 5 6
// I want sleep2 1 2 3 4 5 6
event.off('sleep', fn1);
event.once('sleep', ()=>console.log('I want sleep));
event.fire('sleep');
*/

class Events {
  constructor() {
    this.map = new Map()
  }

  on(name, fn, ...args) {
    if (this.map.has(name)) {
      const arr = this.map.get(name)
      arr.push({
        fn,
        args,
      })
      this.map.set(name, arr)
    } else {
      this.map.set(name, [
        {
          fn,
          args,
        },
      ])
    }
  }

  fire(name, ...args) {
    if (this.map.has(name)) {
      const arr = this.map.get(name)
      arr.forEach((item) => {
        // 判断是否有once标记
        item.fn(...item.args, ...args)
      })
    }
  }

  off(name, fn) {
    if (this.map.has(name)) {
      if (fn) {
        const arr = this.map.get(name)
        arr = arr.filter((item) => item.fn != fn)
        this.map.set(name, arr)
      } else {
        this.map.delete(name)
      }
    }
  }

  once() {
    // 打上一个once标记
  }
}

const fn1 = (...args) => console.log('I want sleep1', ...args)
const fn2 = (...args) => console.log('I want sleep2', ...args)

const event = new Events()
event.on('sleep', fn1, 1, 2, 3)
event.on('sleep', fn2, 1, 2, 3)
event.fire('sleep', 4, 5, 6)
