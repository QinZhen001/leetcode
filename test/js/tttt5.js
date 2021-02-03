// 代码片段一：是否存在堆栈溢出错误?
// function foo() {
//   console.log(111)
//   setTimeout(foo, 0);
// }


// foo();




// 代码片段二:如果在控制台中运行以下函数，页面(选项卡)的 UI 是否仍然响应?
function foo() {
  return Promise.resolve().then(foo);
}
foo();