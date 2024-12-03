/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let temp = 0;
  let decimal = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    temp += digits[i] * Math.pow(10, decimal);
    decimal++;
  }
  console.log(temp);
  debugger;
  let res = temp + 1 + '';

  return res.split('').map((item) => parseInt(item));
};

const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

const res = plusOne(digits);

console.log('res', res);
