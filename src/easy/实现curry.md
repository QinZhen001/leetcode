## 实现 curry

[https://lucifer.ren/fe-interview/#/./topics/algorthimn/curry](https://lucifer.ren/fe-interview/#/./topics/algorthimn/curry)

### 题目描述

实现函数 curry，该函数接受一个多元（多个参数）的函数作为参数，然后一个新的函数，这个函数 可以一次执行，也可以分多次执行。

```javascript
// test
eg: function test(a, b, c) {
  console.log(a, b, c);
}

const f1 = curry(test)(1);
const f2 = f1(2);
f2(3);
```

curry 的意义在于能够在不完全指定函数参数的情况下运行函数，实际意义呢？ 其实 curry 需要和 compose 等配合来有效果，比如 配合写出 pointfree 的代码。

### 代码

```javascript
function curry(fn) {
  const ctx = this;
  function inner(...args) {
    if (args.length === fn.length) return fn.call(ctx, ...args);
    return (...innerArgs) => inner.call(ctx, ...args, ...innerArgs);
  }

  return inner;
}

// test
function test(a, b, c) {
  console.log(a, b, c);
}

const f1 = curry(test)(1);
const f2 = f1(2);
f2(3);
```
