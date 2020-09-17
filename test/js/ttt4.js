/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let arr1 = changeArr(headA)
  let arr2 = changeArr(headB)
  return findFirstMix(arr1, arr2)
}

function changeArr(node) {
  let arr = []
  while (node) {
    arr.push(node.val)
    node = node.next
  }
  return arr
}

function findFirstMix(arr1, arr2) {
  for (let item of arr1) {
    if (arr2.incudes(item)) {
    }
  }
}
