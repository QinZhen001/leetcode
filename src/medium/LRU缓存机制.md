## LRU缓存机制

[https://leetcode-cn.com/problems/lru-cache/](https://leetcode-cn.com/problems/lru-cache/)


运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥已经存在，则变更其数据值；如果密钥不存在，则插入该组「密钥/数据值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。




进阶:

你是否可以在 O(1) 时间复杂度内完成这两种操作？

 
```
示例:

LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
```

### 错误思路

一开始我想使用this.operation作为一个标记数，每次get和put操作,都将操作数+1,以为这样就可以区分哪些是最新的操作


```js
let cache = new LRUCache(2)
cache.get(2)
cache.put(2,6)
cache.get(1)
cache.put(1,5)
// 这里再次put key为1的时候 我错误地删除了 key为2的数据 导致最后get(2)不能正确获取数据
// 所以不能单纯用operation操作数 记录操作
cache.put(1,2)
cache.get(1)
let reds = cache.get(2)
console.log(reds)  // 这里错了
```

### 代码

[https://leetcode-cn.com/problems/lru-cache/solution/ping-zi-jun-qian-duan-jin-jie-suan-fa-lru-shi-xian/](https://leetcode-cn.com/problems/lru-cache/solution/ping-zi-jun-qian-duan-jin-jie-suan-fa-lru-shi-xian/)

解法： 用一个数组keys来记录操作,用一个object来存储数据

```javascript
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  if (typeof capacity !== "number") {
    throw new Error("need a number");
  }
   this.keys = []
   this.cache = Object.create(null)
   this.capacity = capacity
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if(this.cache[key]){
    // 调整位置
    update(this.keys,key)
    return this.cache[key]
  }
  return -1 
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if(this.cache[key]){
    // 存在即更新
    this.cache[key] = value
    update(this.keys,key)
  }else{
    // 不存在即加入
    this.keys.push(key)
    this.cache[key] = value 
    if(this.keys.length>this.capacity){
      const lastKey = this.keys[0]
      delete this.cache[lastKey]
      remove(this.keys,lastKey)
    }
  }
};

function update(arr, key){
  remove(arr, key)
  arr.push(key)
}

function remove(arr, key){
  if(arr.length){
    const index = arr.indexOf(key)
    if(index>-1){
      return arr.splice(index, 1)
    }
  }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```


----


解法:利用 Map 既能保存键值对，并且能够记住键的原始插入顺序




```javascript
var LRUCache = function (capacity) {
  if (typeof capacity !== "number") {
    throw new Error("need a number");
  }
  this.cache = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if(this.cache.has(key)){
    // 存在更新操作
    let temp = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, temp)
    return temp
  }
  return -1
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if(this.cache.has(key)){
    // 存在 删除后加入
    this.cache.delete(key)
  }else {
    // 不存在
    // 缓存超出最大值，则移除最近没有使用的
    if(this.cache.size >= this.capacity){
      let firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }
  }
  this.cache.set(key, value)
};
```



----

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lru-cache
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。