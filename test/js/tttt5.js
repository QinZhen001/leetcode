/**
实现洗牌算法函数shuffle，给定一个数组[0,1,2,3,4,5,6]，每次随机抽选数组的n个值，连续抽选不重复已经抽选的值，直到数组抽完，再进行下一轮循环。

示例1：
var random = shuffle([0,1,2,3,4,5,6]);
random(1); // [1]
random(1); // [0]
random(1); // [2]
random(1); // [3]
random(1); // [5]
random(1); // [4]
random(1); // [6]
random(1); // [3]

示例2：
var random = shuffle([0,1,2,3,4,5,6]);
random(1); // [1]
random(2); // [0,6]
random(1); // [2]
random(4); // [3,4,5,2]
**/



// 二题
var data = [
  {
      parentId: 0,
      id: 1,
      value: '1'
  },
  {
      parentId: 3,
      id: 2,
      value: '2'
  },
  {
      parentId: 0,
      id: 3,
      value: '3'
  },
  {
      parentId: 1,
      id: 4,
      value: '4'
  },
  {
      parentId: 1,
      id: 5,
      value: '5'
  },
];

// 请完成toTree函数将该数据整理为树状结构, 该树每个节点的结构如下,
// node: Node = {
//     children: Node[],
//     parentId,
//     id,
//     value,
// }




// 插件体制设计实现
// 
// electorn 视频渲染
// 
// 
// 



