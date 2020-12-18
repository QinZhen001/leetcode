/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  s = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
  t = t.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())

  for(let i=0;i<t.length;i++){
    if(s[i] !== t[i]){
      return t[i]
    }
  }

}

const param1 = 'abcd'
const param2 = 'abcde'
const res = findTheDifference(param1, param2)
console.log('res', res)
