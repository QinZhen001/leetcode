// https://leetcode-cn.com/problems/binary-search-tree-iterator/

class TreeNode {
  left;
  right;

  constructor(value) {
    this.val = value;
  }
}

//搜索二叉树
class BinarySearchTree {
  constructor(root) {
    if (typeof root === "number") {
      root = new TreeNode(root);
    }
    this.root = root;
  }

  insert(key) {
    if (!key) {
      // key 为 null
      return;
    }
    if (typeof key === "number") {
      key = new TreeNode(key);
    }
    if (!this.root) {
      this.root = key;
    } else {
      this._insertNode(this.root, key);
    }
  }

  _insertNode(root, node) {
    if (node.val < root.val) {
      // node的值小 往左边插入
      if (root.left) {
        this._insertNode(root.left, node);
      } else {
        root.left = node;
      }
    } else {
      // node的值大 往右边插入
      if (root.right) {
        this._insertNode(root.right, node);
      } else {
        root.right = node;
      }
    }
  }
}

// ------------------------------------------------

// 我们拿一个数组来测试二叉搜索树
let arr = [5, 3, 6, 2, 4, 2, 3, 1];
let root = new BinarySearchTree();

for (let item of arr) {
  root.insert(item);
}

// console.log("root",root);
// console.log("root",root.root.val);
// debugger;

function inorder(node, list) {
  if (node) {
    inorder(node.left, list);
    list.push(node.val);
    inorder(node.right, list);
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  let list = [];
  inorder(root, list);
  this.list = list;
  this.index = 0
  console.log(this.list)
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (this.hasNext()) {
    return this.list[this.index++]
  }
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.index < this.list.length
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

var obj = new BSTIterator(root.root);
console.log("obj", obj);
