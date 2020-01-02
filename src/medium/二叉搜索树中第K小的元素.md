## 二叉搜索树中第K小的元素

[https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/)

给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。

说明：
你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。

```

示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 1


示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 3
```


进阶：
如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化 kthSmallest 函数？



### 代码


```javascript
function inorder(root, list) {
    if (root) {
      inorder(root.left, list)
      list.push(root.val)
      inorder(root.right, list)
    }
  }

  /**
   * Definition for a binary tree node.
   * function TreeNode(val) {
   *     this.val = val;
   *     this.left = this.right = null;
   * }
   */
  /**
   * @param {TreeNode} root
   * @param {number} k
   * @return {number}
   */
  var kthSmallest = function (root, k) {
    // root = tree.root
    // 中序遍历
    let list = []
    inorder(root, list)
    return list[k - 1]
  };
```


---------------


上面的解法遍历了整棵树

其实并不需要

我们使用非递归遍历



```javascript

  /**
   * 非递归遍历没必要传递路径数组
   */
  function inorderTree(root, k) {
    // 栈
    let stack = []
    // 路径
    let list = []
    while (root || stack.length) {
      while (root) {
        stack.push(root);
        root = root.left;
      }
      if (stack.length) {
        let node = stack.pop()
        list.push(node.val)
        if (list[k - 1]) {
          return list[k - 1]
        }
        if (node.right) {
          root = node.right;
        }
      }
    }
    return null
  }


  /**
   * Definition for a binary tree node.
   * function TreeNode(val) {
   *     this.val = val;
   *     this.left = this.right = null;
   * }
   */
  /**
   * @param {TreeNode} root
   * @param {number} k
   * @return {number}
   */
  var kthSmallest = function (root, k) {
    // 中序遍历
    return inorderTree(root, k)
  };


```


----------------------


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
·

