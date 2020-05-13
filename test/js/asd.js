// let arr = [1, 2, 3, 4, 5];
// let res = Promise.then(arr);

// console.log(res);

// function delRecord(parameter) {
//   return axios({
//     url: api.delRecord,
//     method: "post",
//     params: parameter,
//   });
// }

// function DelRecordWithIndex(parameter) {
//   return new Promise((resolve, reject) => {
//     delRecord(parameter).then(
//       (res) => {
//         resolve({
//           ...res,
//           // 我们传入一个index 标记这条数据在原数组的位置
//           // 其实index也可以放到res里面
//           index: parameter.index,
//         });
//       },
//       (rej) => {
//         reject(rej);
//       }
//     );
//   });
// }

var data =
  "PCFET0NUWVBFIGh0bWw+DQo8aHRtbCBsYW5nPSJlbiI+DQo8aGVhZD4NCiAgPG1ldGEgY2hhcnNldD0iVVRGLTgiPg0KICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+DQogIDxtZXRhIGh0dHAtZXF1aXY9IlgtVUEtQ29tcGF0aWJsZSIgY29udGVudD0iaWU9ZWRnZSI+DQogIDx0aXRsZT7lvZXlhaXmqKHmnb88L3RpdGxlPg0KPC9oZWFkPg0KPGJvZHk+DQogIDxkaXYgY2xhc3M9ImVkaXRQYW5lbCI+DQogICAgMTExDQogIDwvZGl2Pg0KPC9ib2R5Pg0KPC9odG1sPg==";
var fileName = "test.html";
if (window.navigator && window.navigator.msSaveOrOpenBlob) {
  // IE workaround
  var byteCharacters = atob(data);
  var byteNumbers = new Array(byteCharacters.length);
  for (var i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  var byteArray = new Uint8Array(byteNumbers);
  var blob = new Blob([byteArray], { type: "text/html" });
  // 提供保存和打开按钮
  let res = window.navigator.msSaveOrOpenBlob(blob, fileName);
  console.log("res", res);
} else {
  // much easier if not IE
  // 直接open
  window.open("data:text/html;base64," + data, "", "height=600,width=800");
  // 或者 给iframe设置base64的src
  // ....
}
