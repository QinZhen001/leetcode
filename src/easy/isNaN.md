## 实现一个isNaN



`NaN`属性是代表非数字值的特殊值，该属性用于指示某个值不是数字；

`NaN`是不等于`NaN`的，即`NaN === NaN`的结果是`false`；

使用`Object.is()`来比较两个`NaN`结果是`true`，即`Object.is(NaN, NaN)`的结果是`true`；

`typeof NaN`为`"number"`；

方法`parseInt()`和`parseFloat()`在不能解析指定的字符串时就返回这个值；

可以使用`isNaN`来判断一个变量是不是`NaN`，它是`JS`内置对象`Number`上的静态方法。


### 代码



```js
function isNaN(obj) {
  return typeof obj == "number" && obj !== obj;
}
```





### 测试



```js
let obj = NaN;
const res = isNaN(obj);
console.log(res);
```






