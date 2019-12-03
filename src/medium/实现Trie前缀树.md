## 实现 Trie (前缀树)

[https://leetcode-cn.com/problems/implement-trie-prefix-tree/](https://leetcode-cn.com/problems/implement-trie-prefix-tree/)



实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

```

示例:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");   
trie.search("app");     // 返回 true
```

说明:

你可以假设所有的输入都是由小写字母 a-z 构成的。
保证所有输入均为非空字符串。

## 模板

```javascript
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```



## 代码



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




来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-trie-prefix-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
