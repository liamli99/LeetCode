# 链表 (Linked List)

- 不同于数组，链表不用按照线性的顺序存储数据，而是在每一个节点(node)里存储到下一个节点的指针！由于不必按顺序存储，插入和删除的复杂度为O(1)！但是查看一个节点的时间复杂度为O(n)！

- 单链表 (Singly Linked List)
  - 每个节点包含当前节点的值(val)和指向下一个节点的指针(next)！
  - 链表的第一个节点是头节点(head node)，最后一个节点指向空值(None)
  - 当我们使用node.next或node.val时，必须检查node是否为None！
  
  ```python
  class ListNode:
      def __init__(self, val=0, next=None):
          self.val = val
          self.next = next
  ```