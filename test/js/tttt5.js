/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if (len1 < len2) {
    a = a.padStart(len2, "0");
  } else {
    b = b.padStart(len1, "0");
  }

  a = a.split("");
  b = b.split("");

  let carry = 0;
  let arr = [];
  for (let i = a.length - 1; i >= 0; i--) {
    let num = +a[i] + +b[i] + carry;
    if (num >= 2) {
      num = num % 2;
      carry = 1;
    } else {
      carry = 0;
    }
    arr[i] = num;
  }
  if (carry) {
    arr.unshift(1);
  }
  return arr.join("");
};

// const a = "1010";
// const b = "1011";

const a = "11";
const b = "1";

const ddd = addBinary(a, b);
console.log("dddd", ddd);
