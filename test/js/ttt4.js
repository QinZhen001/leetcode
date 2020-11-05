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

// wordsFrequency.get('you') //返回0，"you"没有出现过
// wordsFrequency.get('have') //返回2，"have"出现2次
// wordsFrequency.get('an') //返回1
// wordsFrequency.get('apple') //返回1
// wordsFrequency.get('pen') //返回1

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */
