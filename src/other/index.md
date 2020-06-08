## 面试题

记录一些和算法有关的面试小题


### 每三个数字一个逗号

"1234567890" =>  1,234,567,890



![](https://s1.ax1x.com/2020/06/08/tfJ6tU.jpg)




```js
function divide(str) {
  let arr = str.split("").reverse();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
    if ((i + 1) % 3 === 0) {
      // 是三的倍数
      res.push(",");
    }
  }
  return res.reverse().join("")
}

let str = "1234567890";
let res = divide(str)

console.log(res);  // 1,234,567,890
```





### safeGet



![](https://s1.ax1x.com/2020/06/08/tf0fwd.png)



```js
function safeGet(data, str) {
  let arr = str.split("").filter((item) => item !== ".");
  let res;
  let index = 0;
  while (index < arr.length) {
    let name = arr[index];
    if (!data[name]) {
      res = undefined
      break;
    }
    res = data[name];
    data = data[name];
    index++;
  }
  return res;
}

```





```js
var data = {
  a: {
    b: {
      c: "yideng",
    },
  },
};

let res1 = safeGet(data, "a.b.c");
let res2 = safeGet(data, "a.b");
let res3 = safeGet(data, "a.b.d");
let res4 = safeGet(data, "a.b.d.e");

console.log(res1) // yideng
console.log(res2) // {c: "yideng"}
console.log(res3) // undefined
console.log(res4) // undefined

```





