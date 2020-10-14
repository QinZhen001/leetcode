/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0;
  }
  let n = s.length;
  let set = new Set();
  let right = 0;
  let ans = 0;
  for (let left = 0; left < n; left++) {
     if(left!=0){
      set.delete(s[left-1])
     }
    while (right < n && !set.has(s[right])) {
      set.add(s[right])
      right++;
    }
    ans = Math.max(ans,right-left)
  }
  return ans
};

const str = "abcabcbb";
const res = lengthOfLongestSubstring(str);
console.log("res", res);

let set = new Set(); // 激励
let left = 0; // 左指针
let right = 0; // 右指针
let ans = 0;
for (let left = 0; left < n; left++) {
  if (left != 0) {
    set.delete(s[left - 1]);
  }
  while()
}
