- 刷题参考
  - [代码随想录](https://github.com/youngyangyang04/leetcode-master)
  - [知乎高频题分类刷题](https://zhuanlan.zhihu.com/p/349940945)
  - [NeetCode](https://neetcode.io/practice)
  - [Grind75](https://www.techinterviewhandbook.org/grind75)
  - [Hot100](https://leetcode.cn/problem-list/2cktkvj/)

- 答案参考
  - 代码随想录
  - NeetCode
  - Grandyang
  - 中文版LeetCode官方解答
  - https://algo.itcharge.cn/

- Complexity: 
  - Big O: upper bound (worst-case scenario)
  - Big Omega: lower bound (best-case scenario)
  - Big Theta: tight bound (average-case scenario)
  - [Time Complexity for Operations in Python](https://wiki.python.org/moin/TimeComplexity)

- 特殊算法：
  - [KMP](https://zh.wikipedia.org/wiki/KMP%E7%AE%97%E6%B3%95): 28
  - [Manacher马拉车](https://oi-wiki.org/string/manacher/): 5, 647


## Hash Table
- List:
  - 242 Valid Anagram
  - 383 Ransom Note
  - 1002 Find Common Characters
  - 299 Bulls and Cows
  - 350 Intersection of Two Arrays II
  
  - 705 Design HashSet
  - 706 Design HashMap

- Set:
  - 217 Contains Duplicate
  - 349 Intersection of Two Arrays
  - 202 Happy Number
  - 128 Longest Consecutive Sequence

- Dict:
  - 1 Two Sum
  - 454 4Sum II
  - 36 Valid Sudoku
  - 49 Group Anagrams
  - 409 Longest Palindrome
  - 2001 Number of Pairs of Interchangeable Rectangles
  - 554 Brick Wall
  
  - 205 Isomorphic Strings
  - 290 Word Pattern
  
  - 1396 Design Underground System
  - 380 Insert Delete GetRandom O(1)

- **Difficult Problems**: 205, 380


## Two Pointers
- Two pointers in Array and String, not Linked List!

- 不同物体同向:
  - 392 Is Subsequence
  - 953 Verifying an Alien Dictionary
  - 844 Backspace String Compare

- 同一物体同向:
  - 26 Remove Duplicates from Sorted Array
  - 80 Remove Duplicates from Sorted Array II
  - 27 Remove Element
  
  - 283 Move Zeros
  - 75 Sort Colors
  
  - 240 Search a 2D Matrix II

- 同一物体相向:
  - 125 Valid Palindrome
  - 680 Valid Palindrome II
  
  - 344 Reverse String
  - 541 Reverse String II
  - 151 Reverse Words in a String
  - 189 Rotate Array
  
  - 167 Two Sum II - Input Array Is Sorted
  - 15 3Sum
  - 16 3Sum Closest
  - 18 4Sum
  
  - 977 Squares of a Sorted Array
  - 11 Container With Most Water
  - 881 Boats to Save People
  - 1498 Number of Subsequences That Satisfy the Given Sum Condition
  - 1968 Array With Elements Not Equal to Average of Neighbours

- **Difficult Problems**: 844, 75, 16


## Binary Search
- Find Exact Target: 
  - 704 Binary Search
  - 35 Search Insert Position
  - 367 Valid Perfect Square
  - 74 Search a 2D Matrix
  - 33 Search in Rotated Sorted Array

- Find First and Last Position: 
  - 34 Find First and Last Position of Element in Sorted Array
  - 278 First Bad Version
  - 69 Sqrt(x)
  - 153 Find Minimum in Rotated Sorted Array
  - 1898 Maximum Number of Removable Characters
  - 2300 Successful Pairs of Spells and Potions
  - 1300 Sum of Mutated Array Closest to Target
  
  - 1011 Capacity To Ship Packages Within D Days
  - 410 Split Array Largest Sum
  - 875 Koko Eating Bananas

- Compare with Left and Right Ele: 
  - 162 Find Peak Element
  - 852 Peak Index in a Mountain Array
  - 1095 Find in Mountain Array
  - 540 Single Element in a Sorted Array

- **Difficult Problems**: 33, 1898, 1300

Remaining problems: 4(quick select?), 528 



## Sliding Window
- 类似同一物体同向的双指针，但是滑动窗口更在意两个指针之间(窗口)的元素，而双指针在意的是两个指针指向的元素！
- 固定长度：
  - 187 Repeated DNA Sequences
  - 1461 Check If a String Contains All Binary Codes of Size K
  - 28 Find the Index of the First Occurrence in a String
  - 438 Find All Anagrams in a String
  - 1423 Maximum Points You Can Obtain from Cards
  - 1031 Maximum Sum of Two Non-Overlapping Subarrays

- 不固定长度：
  - 209 Minimum Size Subarray Sum
  - 76 Minimum Window Substring
  - 904 Fruit Into Baskets

- **Difficult Problems**: 1031, 904, 76

Remaining problem: 1031, 76



## Queue Stack
- Stack:
  - 2390 Removing Stars From a String
  - 20 Valid Parentheses
  - 1249 Minimum Remove to Make Valid Parentheses
  - 1047 Remove All Adjacent Duplicates in String
  - 1209 Remove All Adjacent Duplicates in String II
  - 682 Baseball Game
  - 150 Evaluate Reverse Polish Notation
  - 71 Simplify Path
  - 394 Decode String
  
  - 735 Asteroid Collision
  - 946 Validate Stack Sequences
  
  - 232 Implement Queue using Stacks
  - 155 Min Stack

- Monotonic Stack
  - 739 Daily Temperatures
  - 496 Next Greater Element I
  - 503 Next Greater Element II
  
  - 42 Trapping Rain Water
  - 84 Largest Rectangle in Histogram

- Queue:
  - 225 Implement Stack using Queues

- Priority Queue (Heap)
  - 215 Kth Largest Element in an Array
  - 347 Top K Frequent Elements
  - 973 K Closest Points to Origin
  - 692 Top K Frequent Words

- **Difficult Problems**: 1249, 1209, 735, 42, 84, 692

Remaining Problems: 224, 1472
Remaining Problems: 84, 85, 907, 239(单调队列)
Remaining Problems: 



## Linked List
- Singly Linked List:
  - Basics:
    - 203 Remove Linked List Elements
    - 237 Delete Node in a Linked List
    
    - 707 Design Linked List
    - 622 Design Circular Queue
  
  - Two Pointers
    - 2 Add Two Numbers
    - 21 Merge Two Sorted Lists
    - 206 Reverse Linked List
    - 92 Reverse Linked List II
    - 83 Remove Duplicates from Sorted List
    - 86 Partition List
    - 160 Intersection of Two Linked Lists
    - 876 Middle of the Linked List
    - 2095 Delete the Middle Node of a Linked List
    - 19 Remove Nth Node From End of List
    - 61 Rotate List
    - 1721 Swapping Nodes in a Linked List
    
    - 234 Palindrome Linked List
    - 2130 Maximum Twin Sum of a Linked List
    - 143 Reorder List
  
    - 24 Swap Nodes in Pairs
    - 25 Reverse Nodes in k-Group
    - 328 Odd Even Linked List
    
    - 138 Copy List With Random Pointer

- Doubly Linked List
  - 1472 Design Browser History
  - 146 LRU Cache

- Circular Linked List
  - 141 Linked List Cycle
  - 142 Linked List Cycle II


Remaining problems: 23
Difficult Problems: 143




## Backtracking
- Backtracking is a specific kind of recursion where we recursively explore all possible solutions and **backtrack** when a solution is invalid.

- 回溯法的本质是穷举；由于回溯法是在递归地搜索所有符合要求的解，因此回溯解决的问题都可以抽象成树形结构：递归的深度就是树的深度！回溯法的搜索过程就是树形结构的DFS过程：用for循环横向遍历当前层的所有选择，用递归纵向遍历进入下一层！！！为了让其效率高一点，可以增加剪枝(pruning)的操作！

- Recursion function的时间和空间复杂度
  - 时间复杂度：递归次数 (树的节点数) * 每次递归的时间复杂度，在backtracking中递归次数可以看作**所有结果的数量**
  - 空间复杂度：递归深度 (树的深度) * 每次递归的空间复杂度，在backtracking中递归深度可以看作**每个结果的长度**

- 模版
  ```python
  def backtrack(参数):
    if 终止条件:
      存放结果
      return
    
    # 横向遍历：for循环遍历当前层的所有选择
    for 选择本层节点:
      处理节点
      # 纵向遍历：递归进入下一层
      backtrack(参数)
      回溯，撤销之前的处理
  ```

- 组合：
  - 77 Combinations
  - 216 Combination Sum III
  - 39 Combination Sum
  - 40 Combination Sum II
  - 17 Letter Combinations of a Phone Number

- 排列
  - 46 Permutations
  - 47 Permutations II

- 子集
  - 78 Subsets
  - 90 Subsets II

- 切割：
  - 131 Palindrome Partitioning
  - 93 Restore IP Address

- 棋盘：
  - 51 N-Queens
  - 52 N-Queens II
  - 37 Sudoku Solver

- 迷宫

- Remaining Problems: 37, 79, 332, 491

## Tree
- Binary Tree
  - BFS
    - 102 Binary Tree Level Order Traversal
    - 107 Binary Tree Level Order Traversal II
    - 429 N-ary Tree Level Order Traversal
    - 103 Binary Tree Zigzag Level Order Traversal
    - 199 Binary Tree Right Side View
    - 513 Find Bottom Left Tree Value
    - 515 Find Largest Value in Each Tree Row
    - 637 Average of Levels in Binary Tree
    - 1161 Maximum Level Sum of a Binary Tree
    - 116 Populating Next Right Pointers in Each Node
    - 117 Populating Next Right Pointers in Each Node II
    - 662 Maximum Width of Binary Tree
    - 958 Check Completeness of a Binary Tree
    - 104 Maximum Depth of Binary Tree
    - 559 Maximum Depth of N-ary Tree
    - 111 Minimum Depth of Binary Tree

  - DFS
    - 遍历
      - 144 Binary Tree Preorder Traversal
      - 145 Binary Tree Postorder Traversal
      - 94 Binary Tree Inorder Traversal
      
      - 100 Same Tree
      - 101 Symmetric Tree
      - 572 Subtree of Another Tree
      - 951 Flip Equivalent Binary Tree
      
      - 226 Invert Binary Tree
      - 222 Count Complete Tree Nodes

- Difficult Problems: 

- Remaining Problems: 105, 106, 110, 112, 113, 124, 129, 236, 257, 297, 404, 543, 617, 654, 1448




## Dynamic Programming
- 动态规划中每一个状态一定是由上一个状态推导出来的，这一点就区分于贪心，贪心没有状态推导，而是从局部直接选最优的！

- 步骤：
1. 确定dp数组以及下标的含义
2. 确定递推公式
3. dp数组如何初始化
4. 确定遍历顺序

- Debug: 找问题的最好方式就是把dp数组打印出来，看看究竟是不是按照自己思路推导的！

- 1D DP
  - 509 Fibonacci Number
  - 70 Climbing Stairs
  - 746 Min Cost Climbing Stairs
  - 198 House Robber
  - 213 House Robber II
  
  - 96 Unique Binary Search Trees
  - 139 Word Break
  
  - 53 Maximum Subarray
  - 674 Longest Continuous Increasing Subsequence
  - 300 Longest Increasing Subsequence

- 2D DP
  - 62 Unique Paths
  - 63 Unique Paths II
  
  - 718 Maximum Length of Repeated Subarray
  - 
  
  - 121 Best Time to Buy and Sell Stock
  - 123 Best Time to Buy and Sell Stock III
  - 188 Best Time to Buy and Sell Stock IV
  - 122 Best Time to Buy and Sell Stock II
  - 714 Best Time to Buy and Sell Stock with Transaction Fee
  - 309 Best Time to Buy and Sell Stock with Cooldown
  
  - 416 Partition Equal Subset Sum
  - 1049 Last Stone Weight II
  - 474 Ones and Zeros
  - 494 Target Sum
  - 518 Coin Change II
  - 377 Combination Sum IV
  - 322 Coin Change
  - 279 Perfect Squares
  

Remaining problems: 5, 647 (5和647也可以用中心拓展算法(马拉车)来做，也属于双指针！), 337, 139



## Greedy
- 贪心的本质是选择每一阶段的局部最优，从而达到全局最优。刷题或者面试的时候，手动模拟一下感觉可以局部最优推出整体最优，而且想不到反例，那么就试一试贪心。

- 55 Jump Game
- 45 Jump Game II
- 452 Minimum Number of Arrows to Burst Balloons
- 435 Non-overlapping Intervals
- 56 Merge Intervals


回文系列的题目：
5.Longest Palindromic Substring：求最长回文子串(连续)的长度！dp！
647.Palindromic Substrings：求所有回文子串(连续)的数量！dp！
516.Longest Palindromic Subsequence：求最长回文子序列(不连续)的长度！dp！
131.Palindrome Partitioning：将一个字符串分割成每部分都是回文子串(连续)，求所有的分割方式！回溯！
132.Palindrome Partitioning II：将一个字符串分割成每部分都是回文子串(连续)，求所有的分割方式中最少的分割次数！dp！
