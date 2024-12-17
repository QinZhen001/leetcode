## 手写 bind

[https://lucifer.ren/fe-interview/#/./topics/algorthimn/bind](https://lucifer.ren/fe-interview/#/./topics/algorthimn/bind)

写一个函数，实现 Function.prototype.bind 的功能。

### 代码

```javascript
Function.prototype.myBind = function (ctx, ...args) {
  return (...innerArgs) => this.call(ctx, ...args, ...innerArgs);
};

// test
const a = {
  name: 'name of a',
};
function test(...msg) {
  console.log(this.name);
  console.log(...msg);
}
const t = test.myBind(a, 'hello');
t('world');
```
