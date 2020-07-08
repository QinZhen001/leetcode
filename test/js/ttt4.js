let record = [];
/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  let arr = [shorter, longer];
  for (let i = 0; i < arr.length; i++) {
    dfs(arr[i], 1, arr, k);
  }
  let finalRecord = record.slice();
  record = [];
  return finalRecord;
};

function dfs(len, index, arr, targetIndex) {
  // targetIndex 可能为0 也就是0块木板
  if (index > targetIndex) {
    return;
  }

  if (index === targetIndex) {
    // 已经取了k块木板了
    if (record.indexOf(len) === -1) {
      // 还未记录
      record.push(len);
    }
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    dfs(len + arr[i], index + 1, arr, targetIndex);
  }
}

const parma1 = 1;
const parma2 = 1;
const parma3 = 100000;

const res = divingBoard(parma1, parma2, parma3);
console.log("res", res);
