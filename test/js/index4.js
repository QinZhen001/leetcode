function deepEqual(item1, item2) {
  if (item1 instanceof Array && item2 instanceof Array) {
    // 数组
    if (item1.length != item2.length) {
      return false;
    }
    return item1.every((item, index) => {
      return deepEqual(item, item2[index]);
    });
  } else if (item1 instanceof Object && item2 instanceof Object) {
    // 对象
    if (Object.keys(item1).length != Object.keys(item2).length) {
      return false;
    }
    return Object.keys(item1).every((key) => {
      return deepEqual(item1[key], item2[key]);
    });
  } else {
    // 简单数据
    return item1 == item2;
  }
}

function removeDuplicate(arr1, arr2) {
  let res = [];
  for (let item1 of arr1) {
    if (typeof item1 == 'object' && item1 != null) {
      // 复杂数据
      for (let item2 of arr2) {
        if (typeof item2 == 'object' && item2 != null) {
          if (deepEqual(item1, item2)) {
            res.push(item1);
            break;
          }
        }
      }
    } else {
      // 简单数据
      if (!arr2.includes(item1)) {
        res.push(item1);
      }
    }
  }

  return res;
}

const arr1 = [
  1,
  2,
  {
    aa: 'aaa',
    bb: [2, 4, 5],
    cc: {
      dd: 'dd',
    },
  },
  [4, 5, [6, 7]],
  8,
];

const arr2 = [
  3,
  2,
  {
    aa: 'aaa',
    bb: [2, 4, 5],
    cc: {
      dd: 'dd',
    },
  },
  [4, 5, [8, 7]],
  7,
];

const res = removeDuplicate(arr1, arr2);

console.log('res', res);
