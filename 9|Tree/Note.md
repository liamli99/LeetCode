# 二叉树(Binary tree)
- 二叉树(Binary Tree)：(1) 空树 (2) 根节点(root)及其左子树和右子树，左子树和右子树都是二叉树！

- 满二叉树(Full Binary Tree)：一个二叉树的节点要么是叶子节点(leaf)，即没有子节点，要么有两个左右子节点！
  - 第i层有`2 ^ (i - 1)`个节点，1 <= i <= k
  - 一共有`2 ^ k - 1`个节点

- 完全二叉树(Complete Binary Tree)：一个二叉树的最底层的节点从左往右排序，其他层的节点达到最大值！
  - 满二叉树是一种特殊的完全二叉树

- 二叉搜索树(Binary Search Tree)：对于一个二叉树，如果它的左子树不为空，那么左子树所有节点的值均小于根节点的值；如果它的右子树不为空，那么右子树所有节点的值均大于根节点的值！左右子树也是二叉搜索树！

- 二叉树的存储方式
  1. 顺序存储：用数组
  根节点存储在`arr[0]`, 对于存储在`arr[i]`的节点，其左子节点存储在`arr[2i + 1]`，右子节点存储在`arr[2i + 2]`
  
  2. 链式存储：用指针
  ```python
  class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
  ```

- 二叉树的遍历方式
  - 深度优先搜索(DFS)：迭代法要利用stack
    1. 前序遍历(preorder traversal)：中 -> 左 -> 右
    2. 中序遍历()：左 -> 中 -> 右
    3. 后序遍历()：左 -> 右 -> 中
  
  - 广度优先搜索(BFS)：迭代法要利用queue