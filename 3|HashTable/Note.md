# 哈希表 (Hash Table)

- 哈希表(hash table)：通过键而直接访问在内存储存位置的数据结构。例如数组就是一张哈希表，我们可以通过数组的索引直接访问数组中的元素！      
 
- 哈希函数(hash function)：将数据转化为哈希表的键(索引)。一开始我们用哈希函数将数据转化为哈希表的键(索引)，并在O(1)内在哈希表的这个位置存储该数据相关信息，这样下次我们可以用同样的方法在O(1)内查询并处理这个数据相关信息！

- 构建哈希表(in Python)：
  1. 数组/列表 (array/list)：list索引为整数
    - 如果数据是小写字母char，那么哈希函数是`ord(char) - ord('a')`，数组长度为26！
    - 如果数据是整数且不大，那么哈希函数就是数据本身，数组长度为数据的最大值+1！
  
  2. 映射表/字典 (map/dictionary)：dict键为immutable types
    - 如果无法用list构建哈希表，那就用dict！
    - 如果数据是immutable types (strings, numbers, tuples)，那么哈希函数就是数据本身！如果数据不是immutable types，那么哈希函数要将数据转化为immutable types！
  
  3. 集合 (set)
    - 无序且不重复
  
  **In Python, dict and set are built on top of hash tables!!!**

- 时间复杂度
  - [Time Complexity for Operations in Python](https://wiki.python.org/moin/TimeComplexity)
  - List
    - `list[i]`: O(1)
    - `x in list`: O(n)
    - `list.insert(pos, x)`: O(n) if insert the element at the beginning or middle
    - `list.pop(pos)`: O(n) if pop the element at the beginning or middle
  
  - Dictionary
    - `dict[key]`: O(1)
    - `key in dict`: O(1)
    - `dict[key] = value`: O(1)
    - `del dict[key]`: O(1)
  
  - Set
    - `x in set`: O(1)
    - `set.add(x)`: O(1)
    - `set.remove(x)`: O(1)

- 当我们遇到了要快速的**判断一个元素是否存在，添加元素，删除元素**的时候，就要考虑用hash table，因为时间复杂度是O(1)！但是hash table牺牲了空间换取了时间，因为我们要使用额外的array/list，map/dict，或者set来构建hash table!