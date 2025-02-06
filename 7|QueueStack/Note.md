- Stack in Python:
  - list: 
    - Add the element to the top of the stack (Push): `list.append(x)`
    - Remove the element from the top of the stack (Pop): `list.pop()`
    - Return the element on the top of the stack: `list[-1]`
    - Size: `len(list)`
    - 上述操作均是O(1)

- Queue in Python:
  - [deque](https://docs.python.org/3/library/collections.html#collections.deque): 
    - `from collections import deque`
    - Add the element to the back of the queue (Enqueue): `deque.append(x)`
    - Remove the element from the front of the queue (Dequeue): `deque.popleft()`
    - Return the element at the front of the queue: `deque[0]`
    - Size: `len(deque)`
    - 上述操作均是O(1)

- 单调栈(Monotonic Stack)
  - 什么是单调栈：一种特殊的栈，除了满足LIFO，还需要满足从栈底到栈顶的元素是单调递增的(单调递增栈)或单调递减的(单调递减栈)！
  
  - 什么时候用单调栈：寻找一个元素的右边或者左边第一个比自己大或者小的元素的位置！   
  
  - 为什么用单调栈：用空间换时间，因为在遍历的过程中需要用一个单调栈来记录遍历过的元素，但时间复杂度只有O(n)！  
  
  - 如何使用单调栈：如果求nums中每个元素右边第一个更大的元素，我们可以用列表result来记录结果，即`result[i]`表示`nums[i]`右边第一个更大的元素！result的初始值就是右边第一个更大的元素不存在时的默认值！然后使用**单调递减栈**，栈中存储的是元素的**下标**！遍历nums，如果当前元素大于栈顶元素(下标)所对应的nums中的元素，我们要不断的将栈顶元素弹出，直到当前元素小于等于为止，然后将当前元素的下标压入栈中！注意，当前元素比弹出的下标对应的元素都要大，并且是它们右边第一个更大的元素！因此我们在弹出元素的过程中要不断更新result！
  ```python
  def nextGreater(nums):
    stack = []
    result = [-1] * len(nums)
    
    for i in range(len(nums)):
      while len(stack) > 0 and nums[i] > nums[stack[-1]]:
        result[stack[-1]] = nums[i]
        stack.pop()
        
      stack.append(i)
    
    return result
    ```
  
  如果我们用字典result来记录结果，key是nums中的元素，value是该元素右边第一个更大的元素，那么单调递减栈中存储的就是元素！注意，如果nums中的某个元素没有右边第一个更大的元素，那么result中就不存在该元素！
  ```python
  def nextGreater(nums):
    stack = []
    result = {}

    for num in nums:
      while len(stack) > 0 and num > stack[-1]:
        result[stack[-1]] = num
        stack.pop()

      stack.append(num)
    
    return result
  ```
    
(2)如果求一个元素右边的第一个更小元素，(1)的遍历顺序不变，大于小于号换位置！单调递增栈
(3)如果求一个元素左边的第一个更大元素，(1)的具体方法不变，遍历顺序变成从后往前(从右往左)！单调递增栈
(4)如果求一个元素左边的第一个更小元素，(2)的具体方法不变，遍历顺序变成从后往前(从右往左)！单调递减栈



- 优先队列(Priority Queue)
  - 普通的队列遵循FIFO，但是优先级队列是按照元素的优先级来决定出队顺序：优先级高的先出队！
  
  - 堆(Heap)是一个完全二叉树(除了最底层，其他层的节点都被元素填满，且最底层尽可能地从左到右填入)，在完全二叉树的基础上满足以下特性：父节点的值恒小于等于(或大于等于)子节点的值。若父节点的值恒小于等于子节点的值，此堆称为最小堆(min heap)；反之，若父节点的值恒大于等于子节点的值，此堆称为最大堆(max heap)。因此，在堆中，任意节点均小于等于(或大于等于)它的所有后裔，堆的最小值(或最大值)在堆的根上。
  
  - 优先级队列通常使用堆(Heap)来实现！如果使用min heap，那么值越小的元素优先级越高，越先出队！如果使用max heap，那么值越大的元素优先级越高，越先出队！   

  - Priority Queue in Python:
    - [heapq](https://docs.python.org/3/library/heapq.html): 
      - `import heapq`
      - Add the element to the priority queue: `heapq.heappush(pq, x)`, O(log n)
      - Remove the element (highest priority) from the priority queue: `heapq.heappop(pq)`, O(log n)
      - Return the element (highest priority) from the priority queue: `pq[0]`, O(1)
      - Size: `len(pq)`, O(1)
    - `heapq`用的是min heap，即x越小优先级越高，越先出队！如果我们想让其起到max heap的效果，可以写成`heapq.heappush(pq, -x)`，即-x越小(x越大)优先级越高，越先出队! 
    - 如果我们想让优先级和元素的值无关，而和其他因素有关，可以写成`heapq.heappush(pq, (other factor, x))`，即其他因素越小优先级越高，越先出队! 当其他因素相同时，x越小越先出队！          