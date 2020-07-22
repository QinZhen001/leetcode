/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let pivot = left + ~~((right - left) / 2);
    if (numbers[pivot] < numbers[right]) {
      right = pivot;
    } else if (numbers[pivot] > numbers[right]) {
      left = pivot + 1;
    } else {
      right -= 1;
    }
  }
  return numbers[left];
};

const parma1 = [3,1];
const parma2 = 1;
const parma3 = 3;

const res = minArray(parma1, parma2, parma3);
console.log("res", res);
