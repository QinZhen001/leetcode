## [Sqrt(x)](https://leetcode-cn.com/problems/sqrtx/)

给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

 ```
示例 1：
输入：x = 4
输出：2

示例 2：
输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 ```






提示：

* 0 <= x <= 231 - 1



### 代码





#### 二分查找法

> 关键点：答案在left的那边

```tsx
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let last = x;
  let start = 0;
  let ans = 0;
  while (start <= last) {
    let mid = start + Math.floor((last - start) / 2);
    if (mid * mid <= x) {
      ans = mid;
      start = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return ans;
};
```













来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sqrtx
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。