/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  if (typeof capacity !== "number") {
    throw new Error("need a number");
  }
  this.capacity = capacity;
  this.map = new WeakMap();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let item = this.map.get(key);
  if (!item) {
    return -1;
  }
  if (!item.num) {
    item.num = 1;
  } else {
    item.num++;
  }
  return item.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let item = {
    value:value,
    num:0
  }
  if (this.map.size >= this.capacity) {
    // 满了
    let minNum = 999999;
    let minKey = "";
    for (let [key, value] of map.entries()) {
      if (value.num < minNum) {
        minNum = value.num;
        minKey = key
      }
    }
    this.map.delete(minKey)
    this.map.set(key,item)
  } else {
    // 未满
    debugger
    this.map.set(key,item)
  }
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


let cache = new LRUCache(2)
cache.put(1, 1);
cache.put(2, 2);
let res1 = cache.get(1); 
console.log("res1",res1)
cache.put(3, 3);
const res2 =  cache.get(2)
console.log("res2",res2)