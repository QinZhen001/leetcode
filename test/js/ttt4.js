/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head
  }

  let pre = head
  let current = pre.next
  pre.next = null
  while (current.next) {
    const temp = current.next
    current.next = pre
    current = temp
    pre = current
  }
  current.next = console.log('head', current)
}

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

function creatList(arr = []) {
  const head = new ListNode(arr[0])
  let current = head
  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i])
    current.next = node
    current = current.next
  }

  return head
}

const arr = [1, 2, 3, 4, 5]
const head = creatList(arr)
const res = reverseList(head)
console.log('res', res)
