## 实现一个可以用于new的bind

[https://juejin.im/post/5e88b054f265da47c35d7418?utm_source=gold_browser_extension](https://juejin.im/post/5e88b054f265da47c35d7418?utm_source=gold_browser_extension)




请手写实现 ES5 中 Function 原型的 bind（即手写下面代码块中的myBind） 方法，使得以下程序最后能输出 'success'。

```js
function Animal(name, color) {
  this.name = name;
  this.color = color;
}
Animal.prototype.say = function () {
  return `I'm a ${this.color} ${this.name}`;
};
const Cat = Animal.myBind(null, 'cat');
const cat = new Cat('white');
if (cat.say() === 'I\'m a white cat' &&
  cat instanceof Cat && cat instanceof Animal) {
  console.log('success');
}
```

### 代码



```js
// 实现myBind
Animal.myBind = function(){
  let fn = this 
  if(!fn){
    throw new Error("")
  }
  const args = [].slice.call(arguments)
  const context = args.shift()


  const newFn = function(...innerArgs) {
    // 要判断是否用 new 调用了这个函数
    const isNew = this instanceof newFn  // 如果不做这个判断 会找不到 name 和 color
    return fn.call(isNew ? this : context,...args,...innerArgs)
  }


  newFn.prototype = Object.create(fn.prototype) 
  newFn.prototype.constructor  = newFn


  return newFn
}
```







