// public class Solution {
//   public int maxProfit(int prices[]) {
//       int minprice = Integer.MAX_VALUE;
//       int maxprofit = 0;
//       for (int i = 0; i < prices.length; i++) {
//           if (prices[i] < minprice) {
//               minprice = prices[i];
//           } else if (prices[i] - minprice > maxprofit) {
//               maxprofit = prices[i] - minprice;
//           }
//       }
//       return maxprofit;
//   }
// }



/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Number.MAX_VALUE
  let maxProfit = 0
  for (let i = 0;i < prices.length;i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice
    }
  }

  return maxProfit
};


const arr = [7,1,5,3,6,4]
const res = maxProfit(arr)
console.log(res)
