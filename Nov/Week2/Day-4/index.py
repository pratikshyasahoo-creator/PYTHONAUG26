#Non-primitive Data Types
#1. List: A list is a collection of items that are ordered and mutable and indexed. Lists are written with square brackets.
#Example: my_list = ["apple", "banana", "cherry"]
#my_list = ["apple", "banana", "cherry", "kiwi", "mango","kiwi"]
#print(my_list)  # Output: ['apple', 'banana', 'cherry']
#my_list[0] = "guava"
#print(my_list[0])  # Output: 'guava'
#my_list.append("orange")
#print(my_list)  # Output: ['guava', 'banana', 'cherry', 'orange']
#my_list.extend(["kiwi", "mango"])
#my_list.insert(1, "orange")
#my_list.remove("kiwi")
#my_list.pop(1)
#my_list.clear()
#my_list.index("banana")
#a= my_list.index("kiwi")
#print(a)
#print(my_list)  

#2. Tuple: A tuple is a collection of items that are ordered and immutable and indexed. Tuples are written with round brackets.
#Example: my_tuple = ("apple", "banana", "cherry")  
#my_tuple = ("apple", "banana", "cherry", "kiwi", "mango","kiwi")
#print(my_tuple.count("kiwi"))  # Output: 2
#print(my_tuple.index("kiwi"))  # Output: 3

#my_tuple = ("apple", "banana", "cherry")
#print(my_tuple)  # Output: ('apple', 'banana', 'cherry')
# my_tuple[0] = "guava"  # This will raise an error because tuples are immutable

#3. Set: A set is a collection of items that are unordered and unindexed and mutable. Sets are written with curly brackets.
#Example: my_set = {"apple", "banana", "cherry"}
#my_set = {"apple", "banana", "cherry", "kiwi", "mango","kiwi"}
#print(my_set)  # Output: {'apple', 'banana', 'cherry', 'kiwi', 'mango'}
#my_set.add("orange")
#print(my_set)  # Output: {'apple', 'banana', 'cherry', 'kiwi', 'mango', 'orange'}
#my_set.update(["kiwi"])
#my_set.remove("kiwi")
#print(my_set)  # Output: {'apple', 'banana', 'cherry', 'kiwi', 'mango', 'orange'}
#A = {1, 2, 3, 4, 5}
#B = {4, 5, 6, 7, 8}
#C = A.union(B)
#D = A.intersection(B)
#E = A.difference(B)
#F = A.symmetric_difference(B)
#subset = {1, 2}
#print("Union of A and B:", C)  
#print("Intersection of A and B:", D)
#print("Difference of A and B:", E)
#print("Symmetric Difference of A and B:", F)
#print("Is subset of A:", subset.issubset(A))

#4. Dictionary: A dictionary is a collection of key-value pairs that are unordered, mutable, and indexed. Dictionaries are written with curly brackets.
#Example: my_dict = {"name": "John", "age": 30, "city": "New York"}
#my_dict = {"name": "John", "age": 30, "city": "New York"}
#print(my_dict)  
#print(my_dict.get("name"))
#print(my_dict.keys())
#my_dict.update({"age": 31})
#a = my_dict.copy()
#print(my_dict)  