// https://leetcode-cn.com/problems/circus-tower-lcci/solution/c-dong-tai-gui-hua-yu-er-fen-cha-zhao-shi-er-xing-/

/**
 * @param {number[]} height
 * @param {number[]} weight
 * @return {number}
 */
var bestSeqAtIndex = function (height, weight) {
  let peoples = [];
  for (let i = 0; i < height.length; i++) {
    peoples.push({
      height: height[i],
      weight: weight[i],
    });
  }

  // 第一维度升序排序 第二维度降序排序  (height升序 weight降序)
  // 为了后面的动态规划做准备
  peoples.sort((a, b) => {
    if (a.height == b.height) {
      return b.weight - a.weight;
    }
    return a.height - b.height;
  });

  // console.log(peoples);

  // dp[i] 前i个元素 最长升序子序列 (以第二维度判断)
  let dp = new Array(height.length).fill(0);
  dp[0] = 1;
  let maxWeight = peoples[0].weight;
  let maxNum = 0;

  for (let i = 1; i < dp.length; i++) {
    if (peoples[i].weight > maxWeight) {
      dp[i] = dp[i - 1] + 1;
      maxWeight = peoples[i].weight;
    } else {
      dp[i] = 1;
    }

    if (dp[i] > maxNum) {
      maxNum = dp[i];
    }
  }
  // console.log(dp);
  return maxNum;
};

let param1 = [2868, 5485, 1356, 1306, 6017, 8941, 7535, 4941, 6331, 6181];
let param2 = [5042, 3995, 7985, 1651, 5991, 7036, 9391, 428, 7561, 8594];
const res = bestSeqAtIndex(param1, param2);
console.log("res", res);
