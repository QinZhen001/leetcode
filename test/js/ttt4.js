/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) {
    return null
  }
  if(!head.next){
     // 如果只存在一个节点
    return head
  }
  let arr = []
  let node = head
  while (node) {
    arr.push(node)
    node = node.next
  }
  arr.sort((a, b) => a.val - b.val)
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1]
  }
  arr[arr.length - 1].next = null
  return arr[0]
}

// ------------ test ----------------
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const arr = [4, 2, 1, 3]
const nodeArr = arr.map((item) => new Node(item))
console.log(nodeArr)
for (let i = 0; i < nodeArr.length - 1; i++) {
  nodeArr[i].next = nodeArr[i + 1]
}
const head = nodeArr[0]

const res = sortList(head)
console.log('res', res)
