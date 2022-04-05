/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) {
    return null;
  }
  let map = new Map();
  let visited = new Set();

  // 将每一个节点parent记录到map
  const dfs = (node) => {
    if (node.left) {
      map.set(node.left, node);
      dfs(node.left)
    }
    if (node.right) {
      map.set(node.right, node);
      dfs(node.right)
    }
  };

  dfs(root);

  while(p){
    // tip: p自己也是路径上的
    visited.add(p)
    let parent = map.get(p)
    p = parent
  }

  while(q){
    if(visited.has(q)){
      return q
    }
    let parent = map.get(q)
    q = parent
  }

  return null
};
