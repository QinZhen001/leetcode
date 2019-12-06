# tree

### 数组转二叉树


```javascript
class TreeNode {
    value
    left
    right

    constructor(value) {
      this.value = value
    }

    set(value) {
      this.value = value
    }
  }


  var createTree = function (nums, index) {
    let tn = null
    if (index < nums.length) {   
      let value = nums[index]
      if (!value) {
        return null
      }
      tn = new TreeNode(value)
      tn.left = createTree(nums, 2 * index + 1)
      tn.right = createTree(nums, 2 * index + 2)
      return tn
    }
    return tn
  };

  let param1 =  [3, 9, 20, null, null, 15, 7]
  let res = createTree(param1, 0)
```

### 二叉树转数组
```javascript
  /**
   * Definition for a binary tree node.
   * function TreeNode(val) {
   *     this.val = val;
   *     this.left = this.right = null;
   * }
   */
```
利用先序遍历

```javascript
  function printTree(root, arr, i) {
    if (root) {
      // 利用js对象的扩展性
      arr[i] = root.val
      printTree(root.left, arr, i * 2 + 1)
      printTree(root.right, arr, i * 2 + 2)
    }
  }
  
  
   let res = []
   printTree(root, res, 0)
```



### 从上到下打印二叉树 (BFC)


```javascript
  function printTreeTopToBottom(root) {
    let queue = []
    let list = []

    if (!root) {
      return list
    }

    queue.push(root)

    while (queue.length) {
      let temp = queue.shift()
      list.push(temp.value)
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }

    return list
  }
```


### 打印二叉树某个节点的查找路径


这个相当于在问，二叉树中查找值为x的结点，打印x结点的全部祖先

```javascript
  let arr = []
  /**
   * @param {TreeNode} root
   * target 目标节点的值
   */
  function findPath(root, target) {
    if (!root) {
      return false
    }
    if (root.val === target.val) {
      arr.push(root.val)  // (选择)
      return true
    }
    if (root) {
      // 如果子树中可以找到匹配值 那么此节点肯定是祖先结点
      if (findPath(root.left, target) || findPath(root.right, target)) {
        console.log(root.val)
        arr.push(root.val)
        return true
      }
    }
  }
```

调用findPath后arr里面就是target的所有祖先节点

如果要得的查找路径

只需要将arr反转即可


### 前缀树 (Trie)









```javascript

  /**
   * Initialize your data structure here.
   */
  var Trie = function () {
    this.end = false
    this.links = new Array(26)
  };

  Trie.prototype.isEnd = function () {
    return this.end
  }

  Trie.prototype.setEnd = function () {
    this.end = true
  }

  Trie.prototype.put = function (ch, node) {
    let index = ch.charCodeAt() - "a".charCodeAt()
    this.links[index] = node;
  }

  Trie.prototype.get = function (ch) {
    let index = ch.charCodeAt() - "a".charCodeAt()
    return this.links[index]
  }

  Trie.prototype.containsKey = function (ch) {
    let index = ch.charCodeAt() - "a".charCodeAt()
    return this.links[index] != null
  }


  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  Trie.prototype.insert = function (word) {
    let node = this
    for (let i = 0; i < word.length; i++) {
      let cur = word[i]
      if (!node.containsKey(cur)) {
        node.put(cur, new Trie())
      }
      node = node.get(cur)
    }
    node.setEnd()
  };

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  Trie.prototype.search = function (word) {
    let node = this.searchPrefix(word);
    return node != null && node.isEnd()
  };

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  Trie.prototype.startsWith = function (prefix) {
    let node = this.searchPrefix(prefix)
    return node != null
  };


  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  Trie.prototype.searchPrefix = function (prefix) {
    let node = this
    for (let i = 0; i < prefix.length; i++) {
      let cur = prefix[i]
      if (node.containsKey(cur)) {
        node = node.get(cur)
      } else {
        return null
      }
    }
    return node
  };

  /**
   * Your Trie object will be instantiated and called as such:
   * var obj = new Trie()
   * obj.insert(word)
   * var param_2 = obj.search(word)
   * var param_3 = obj.startsWith(prefix)
   */

  let trie = new Trie()
  trie.insert("apple")
  console.log("trie", trie)

  let res1 = trie.search("app");
  console.log("search app", res1)

  let res2 = trie.startsWith("app");
  console.log("startsWith app", res2)

  let res3 = trie.search("apple")
  console.log("search apple", res3)

  trie.insert("sdfshlf");
  trie.insert("app");
  let res4 = trie.search("app");
  console.log("search app", res4)


  console.log("final trie", trie)
```


















