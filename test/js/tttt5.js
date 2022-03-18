/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0
  }

  let stack = []
  stack.push(root)
  let total = 1

  while (stack.length) {
    const currentLevelSize = stack.length
    for (let i = 0; i < currentLevelSize; i++) {
      let node = stack.shift()
      if (node.left) {
        stack.push(node.left)
      }
      if (node.right) {
        stack.push(node.right)
      }
    }
    total++
  }
}
