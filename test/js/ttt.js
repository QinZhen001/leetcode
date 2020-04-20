// 链表节点
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

// 链表
class linkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  // 追加元素
  append(element) {
    const node = new Node(element)
    let current = null
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  // 任意位置插入
  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element)
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        node.next = current
        this.head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      this.length++
      return true
    }
    return false
  }

  // 移除指定位置元素
  removeAt(position) {
    // 检查越界值
    if (position >= 0 && position < this.length) {
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        this.head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.length--
      return current
    }
    return null
  }

  // 寻找元素下标
  findIndex(element) {
    let current = this.head
    let index = -1
    while (current) {
      if (element === current.element) {
        return index + 1
      }
      index++
      current = current.next
    }
    return -1
  }

  // 删除指定元素
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }


  isEmpty() {
    return !this.length
  }
  size() {
    return this.length
  }

}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 快慢指针法 找到链表的中间node
function getEndOfHalf(head) {
  let fast = head
  let slow = head
  if (fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

// 翻转后半部分链表
function getReverseEndHalf(head) {
  if (head) {
    let pre = null
    let cur = head
    while (cur) {
      let next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
  }

  return null
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) {
    return true
  }
  let endOfHalf = getEndOfHalf(head)
  let reverseEndHalf = getReverseEndHalf(endOfHalf.next)

  let p1 = head
  // 后面会恢复后半部分链表 所以不能直接用reverseEndHalf
  let p2 = reverseEndHalf
  // 记录下结果 不能提前return 因为要恢复链表
  let result = true

  while (result && p2!=null) {
    if (p1.val != p2.val) {
      result = false
    }
    p1 = p1.next
    p2 = p2.next
  }

  // 恢复链表
  endOfHalf.next = getReverseEndHalf(reverseEndHalf)

  return result
};

// let param1 = [1, 2, 2, 1];
let param1 = [1, 2, 3, 4, 5];
let list = new linkedList()
for (let i = 0; i < param1.length; i++) {
  list.append(param1[i])
}
console.log(list)
const res = isPalindrome(list.head);
console.log("res", res);
