class Tree {
  constructor(node) {
    this.root = node;
  }

  // 根据名字找到对应的节点
  find(name) {
    return this._find(this.root, name);
  }

  _find(node, name) {
    if (!node) {
      return;
    }
    if (node.name == name) {
      return node;
    }
    const children = node.children || [];
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      let node = this._find(child, name);
      if (node) {
        return node;
      }
    }
  }

  death(name) {
    let node = this.find(name);
    node = null;
  }

  print() {
    let res = [];
    this.successor(this.root, res);
    console.log("print", res);
    return res;
  }

  successor(node, res) {
    if (!node) {
      return;
    }
    if (!res.includes(node.name)) {
      res.push(node.name);
    }
    const children = node.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      this.successor(child, res);
    }
  }
}

class Node {
  constructor({ name, children = [], parent }) {
    this.name = name;
    this.children = children;
    this.parent = parent;
  }

  addChild(node) {
    this.children.push(node);
  }
}

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  if (k == 1) {
    return s.length
  }
  let dp = new Array(s.length)
  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array(s.length).fill(0)
  }

  // dp[i][j]  i位置开头j位置结尾
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      dp[i][j] = getMap(s.slice(i, j + 1))
    }
  }

  // console.log(dp)
  let max = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let map = dp[i][j]
      const list = Object.keys(map)
      console.log(list)
      // console.log(map)
      let flag = list.every((key) => map[key] >= k)
      // console.log(i, j, flag)
      if (flag) {
        let num = j - i + 1
        if (num > max) {
          max = num
        }
      }
    }
  }
  return max
}

function getMap(str) {
  let obj = {}
  for (let key of str) {
    if (!obj[key]) {
      obj[key] = 1
    } else {
      obj[key]++
    }
  }
  return obj
}

const s = 'ababbc',
  k = 2
const res = longestSubstring(s, k)
console.log('res', res)
