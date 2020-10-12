## [路径总和 II](https://leetcode-cn.com/problems/path-sum-ii/)

[https://leetcode-cn.com/problems/path-sum-ii/](https://leetcode-cn.com/problems/path-sum-ii/)


给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

**说明:** 叶子节点是指没有子节点的节点。

**示例:**
给定如下二叉树，以及目标和 `sum = 22`，

```
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
```

返回:

```
[
   [5,4,11,2],
   [5,8,4,5]
]
```





### 代码



#### dfs

```js
let paths = []

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  if (!root) {
    return []
  }
  // 深度搜索
  dfs(root, sum, [])
  // (注意：这里要进行拷贝)  
  const res = paths.slice()
  paths = []
  return res
}

function dfs(node, sum, path) {
  if (!node) {
    return
  }

  path.push(node.val)
  sum = sum - node.val

  if (sum === 0 && !node.left && !node.right) {
    //叶子节点  (注意：这里要进行拷贝)
    const res = path.slice()
    paths.push(res)
  }

  dfs(node.left, sum, path)
  dfs(node.right, sum, path)
  path.pop()
}


```





