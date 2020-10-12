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

const str1 = "2018-08";
const str2 = "2018-12";
const res = printMonths(str1, str2);
console.log("res", res);


const str11 = "2016-08";
const str22 = "2018-11";
const res2 = printMonths(str11, str22);
console.log("res2", res2);