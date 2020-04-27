/**
 * @param {number} capacity
 */
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
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// const param1 = [5, 7, 7, 8, 8, 10];
// const param2 = 8;
// const res = searchRange(param1, param2);

// console.log("res", res);

// cache.put(1, 1);
// cache.put(2, 2);
// let res1 = cache.get(1);
// console.log("res1",res1)
// cache.put(3, 3);
// const res2 =  cache.get(2)
// console.log("res2",res2)

// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// const res3 = cache.get(1);       // 返回 -1 (未找到)
// console.log("res3",res3)
// const res4 = cache.get(3);       // 返回  3
// console.log("res4",res4)
// const res5 =  cache.get(4);       // 返回  4
// console.log("res5",res5)

let cache = new LRUCache(2);
cache.get(2); // -1
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);
cache.put(3, 3);
console.log(cache);
debugger;
const res = cache.get(2);
console.log(cache);
console.log(res);
