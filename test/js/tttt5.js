/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) {
    return null;
  }
  let temp = {};
  let head = temp;
  let node1 = l1;
  let node2 = l2;
  while (node1 || node2) {
    if(!node1){

    }else 
    if (node1.val < node2.val) {
      temp.next = node1;
      node1 = node1.next;
      temp = temp.next;
    } else {
      temp.next = node2;
      node2 = node2.next;
      temp = temp.next;
    }
  }

  return head.next;
};
