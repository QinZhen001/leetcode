## [删除链表的倒数第N个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

[删除链表的倒数第N个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)



给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

```
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```


说明：

* 给定的 n 保证是有效的。

进阶：

* 你能尝试使用一趟扫描实现吗？





### 代码





#### 建立pre指针

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let preNode = head
  let curNode = head.next
  while (curNode) {
    curNode.pre = preNode
    preNode = curNode
    curNode = curNode.next
  }

  let lastNode = preNode

  while (n > 1) {
    lastNode = lastNode.pre
    n--
  }

  let targetNode = lastNode

  if(!targetNode.pre){
    // 目标节点不存在 在头节点前面
    if(head.next){
      // 存在头节点的下一个节点 删除头节点
      return head.next
    }
    return null 
  }

  targetNode.pre.next = targetNode.next

  return head
}
```





#### 计算链表长度

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
   
  let total = 0 

  // 第一次扫描
  let node = head
  while(node){
    total++
    node = node.next
  }

  // 从头开始计算 要删除第几个节点
  n = total - n -1 
  if(n== -1){
    // 删除的头结点
    if(head.next){
      return head.next
    }
    return null 
  }

  // 第二次遍历
  node = head
  while(n){
    node = node.next
    n--
  }

  node.next = node.next.next

  return head
}

```







#### 栈实现

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  
  let stack = []

  let node = head 
  while(node){
    stack.push(node)
    node = node.next 
  }

  // 有了stack栈之后
  // ...


  return head
}

```









-----

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

