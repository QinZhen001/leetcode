/**
 * @param {string[]} book
 */
var WordsFrequency = function (book) {
  this.book = book
  this.map = new Map()
  for (let i = 0; i < book.length; i++) {
    if (this.map.has(book[i])) {
      let num = this.map.get(book[i])
      this.map.set(book[i], num + 1)
    } else {
      this.map.set(book[i], 1)
    }
  }
}

/**
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function (word) {
  return this.map.get(word) || 0
}

let wordsFrequency = new WordsFrequency([
  'i',
  'have',
  'an',
  'apple',
  'he',
  'have',
  'a',
  'pen',
])
console.log(wordsFrequency)

let a1 = wordsFrequency.get('you') //返回0，"you"没有出现过
let a2 = wordsFrequency.get('have') //返回2，"have"出现2次
let a3 = wordsFrequency.get('an') //返回1
let a4 = wordsFrequency.get('apple') //返回1
let a5 = wordsFrequency.get('pen') //返回1

console.log(a1)

// console.log(a1,a2,a3,a4,a5)

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */
