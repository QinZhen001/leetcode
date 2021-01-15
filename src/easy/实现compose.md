## 实现compose

[https://lucifer.ren/fe-interview/#/./topics/algorthimn/compose](https://lucifer.ren/fe-interview/#/./topics/algorthimn/compose)

### 题目描述
实现函数compose，compose接受多个函数作为参数，并返回一个新的函数，新的函数会从右向左依次执行原函数， 并且上一次结果的返回值将会作为下一个函数的参数。

>因此compose函数有一个限制，就是被compose的函数是单元的，即只有一个参数，如果不这样的话，就只能返回数组了。 因为在JS中参数其实就是一个类数组。

### 代码

> 这太牛逼了

```javascript
function compose(...fns) {
  return (...args) => fns.reduceRight((acc, cur) => cur(acc), ...args);
}

function a(msg) {
  return msg + "a";
}
function b(msg) {
  return msg + "b";
}
function c(msg) {
  return msg + "c";
}

const f = compose(
  a,
  b,
  c
);
console.log(f("hello"));

```

我们换一种常人可以理解的实现方式：

```js
function compose(...fns) {
  return function (args) {
    let len = fns.length - 1
    let innnerArgs = args
    console.log(fns)
    while (len >= 0) {
      innnerArgs = fns[len].call(null, innnerArgs)
      len--
    }
    return innnerArgs
  }
}
```

测试

```js
const greeting = (name) => {
  console.log('greeting', this)
  return `hello ${name}`
}
const toUpper = (str) => {
  console.log('toUpper', this)
  return str.toUpperCase()
}

const fn = compose(toUpper, greeting)
console.log(fn('yideng')) // HELLO YIDENG
```






















