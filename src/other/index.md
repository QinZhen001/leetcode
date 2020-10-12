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





### {}字符串解析

```js
var a = {
  b: 123,
  c: "456",
  e: "789",
};
var str = `a{a.b}aa{a.c}aa {a.d}aaaa`;
// => 'a123aa456aa {a.d}aaaa'

transform(str, a);


// --------------------------------------------------------------------

function transform(str, obj) {
  let flag = false;
  let arr = [];
  let module = "";
  for (let item of str) {
    if (item == "}") {
      arr.push(module);
      module = "";
      flag = false;
    }
    if (flag) {
      module += item;
    }
    if (item == "{") {
      flag = true;
    }
  }

  arr = arr.map((item) => {
    item = item.split(".").slice(1);
    let res = ''
    let copy = obj 
    item.forEach(key => {
      res = copy[key]
    });
    return res 
  });

  let index = 0 
  str =  str.replace(/{\S+?}/g,(match)=>{
    if(arr[index]){
      return arr[index++]
    }
    return ''
  })
  console.log(str)
  return str
}

```



### 给定起止日期返回中间所有日期

![](https://s1.ax1x.com/2020/10/12/0Rsop6.png)

```js
function resolve(str) {
  const arr = str.split("-");
  return {
    year: parseInt(arr[0]),
    month: parseInt(arr[1]),
  };
}

function calc(obj1, obj2) {
  let arr = [];
  if (obj1.year === obj2.year) {
    for (let i = obj1.month + 1; i < obj2.month; i++) {
      arr.push(`${obj1.year}-${i}`);
    }
  } else {
    let curYear = obj1.year;
    let curMonth = obj1.month + 1;
    while (curYear <= obj2.year) {
      for (
        let i = curMonth;
        curYear === obj2.year ? i < obj2.month : i <= 12;
        i++
      ) {
        arr.push(`${curYear}-${i}`);
      }
      curYear++;
      curMonth = 1;
    }
  }

  return arr;
}

function printMonths(str1, str2) {
  const obj1 = resolve(str1);
  const obj2 = resolve(str2);
  return calc(obj1, obj2);
}

```

测试：

```js
const str1 = "2018-08";
const str2 = "2018-12";
const res = printMonths(str1, str2);
console.log("res", res);


const str11 = "2016-08";
const str22 = "2018-11";
const res2 = printMonths(str11, str22);
console.log("res2", res2);
```







