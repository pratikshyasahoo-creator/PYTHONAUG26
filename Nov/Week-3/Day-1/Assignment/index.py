#List

#1. Create a list of 10 numbers and print all elements using a for loop.
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for num in numbers:
    print(num)
#2. Write a program to print only even and odd numbers from a list.
numbers = [10, 15, 22, 33, 40, 55, 60]

print("Even numbers:")
for num in numbers:
    if num % 2 == 0:
        print(num)

print("Odd numbers:")
for num in numbers:
    if num % 2 != 0:
        print(num)
#3. Find the largest and smallest numbers in a list using a loop.
numbers = [45, 12, 78, 3, 90, 23]

largest = numbers[0]
smallest = numbers[0]

for num in numbers:
    if num > largest:
        largest = num
    if num < smallest:
        smallest = num

print("Largest:", largest)
print("Smallest:", smallest)
#4. Count how many times a particular number appears in a list.
numbers = [10, 20, 10, 30, 10, 40, 20]
target = 10

count = 0

for num in numbers:
    if num == target:
        count += 1

print(f"{target} appears {count} times")
#5. Write a function to calculate the sum of all elements in a list without using sum().
def list_sum(numbers):
    total = 0

    for num in numbers:
        total += num

    return total


numbers = [10, 20, 30, 40]
print("Sum =", list_sum(numbers))
#6. Find the second-largest number in a list without using sort() or max().
numbers = [12, 45, 78, 34, 67]

largest = second_largest = float('-inf')

for num in numbers:
    if num > largest:
        second_largest = largest
        largest = num
    elif num > second_largest and num != largest:
        second_largest = num

print("Second Largest:", second_largest)
#7. Remove duplicate elements from a list without using set().
numbers = [10, 20, 10, 30, 20, 40, 30]

unique = []

for num in numbers:
    if num not in unique:
        unique.append(num)

print("List without duplicates:", unique)
#8. Separate positive, negative and zero values into three different lists.
numbers = [10, -5, 0, 20, -15, 0, 8]

positive = []
negative = []
zeros = []

for num in numbers:
    if num > 0:
        positive.append(num)
    elif num < 0:
        negative.append(num)
    else:
        zeros.append(num)

print("Positive:", positive)
print("Negative:", negative)
print("Zeros:", zeros)
#9. Find the common elements between two lists without using intersection().
list1 = [10, 20, 30, 40, 50]
list2 = [30, 40, 60, 70]

common = []

for item in list1:
    if item in list2 and item not in common:
        common.append(item)

print("Common elements:", common)
#10. Write a function to check whether a list is a palindrome.
def is_palindrome(lst):
    if lst == lst[::-1]:
        return True
    return False

numbers = [1, 2, 3, 2, 1]
print(is_palindrome(numbers))

# Tuple

# 1. Create a tuple of 10 numbers and print all elements using a for loop.
numbers = (10, 20, 30, 40, 50, 60, 70, 80, 90, 100)

for num in numbers:
    print(num)
# 2. Print all elements along with their index using enumerate().
numbers = (10, 20, 30, 40, 50)

for index, value in enumerate(numbers):
    print(index, value)

# 3. Find the largest and smallest numbers in a tuple using a loop.
numbers = (10, 20, 5, 40, 60, 2, 90)

largest = numbers[0]
smallest = numbers[0]

for num in numbers:
    if num > largest:
        largest = num
    if num < smallest:
        smallest = num

print("Largest:", largest)
print("Smallest:", smallest)
# 4. Count how many times a particular number appears using count().
numbers = (10, 20, 30, 10, 40, 10, 50)

print(numbers.count(10))
# 5. Calculate the sum of all tuple elements without using sum().
numbers = (10, 20, 30, 40, 50)

total = 0

for num in numbers:
    total += num

print("Sum =", total)
# 6. Find the second-largest number in a tuple without using sort() or max().
numbers = (10, 20, 50, 40, 80, 70)

largest = second_largest = float('-inf')

for num in numbers:
    if num > largest:
        second_largest = largest
        largest = num
    elif num > second_largest and num != largest:
        second_largest = num

print("Second Largest =", second_largest)
# 7. Find all duplicate elements in a tuple.
numbers = (10, 20, 30, 10, 20, 40, 50, 10)

duplicates = []

for num in numbers:
    if numbers.count(num) > 1 and num not in duplicates:
        duplicates.append(num)

print("Duplicates:", duplicates)
# 8. Check whether a tuple is a palindrome without using slicing.
# Check whether a tuple is a palindrome without using slicing

numbers = (1, 2, 3, 2, 1)

left = 0
right = len(numbers) - 1
is_palindrome = True

while left < right:
    if numbers[left] != numbers[right]:
        is_palindrome = False
        break

    left += 1
    right -= 1

if is_palindrome:
    print("Tuple is a palindrome")
else:
    print("Tuple is not a palindrome")

# 9. Find the common elements between two tuples using loops.
tuple1 = (10, 20, 30, 40, 50)
tuple2 = (30, 40, 50, 60, 70)

common = []

for item in tuple1:
    if item in tuple2:
        common.append(item)

print("Common Elements:", common)
# 10. Separate even and odd numbers from a tuple into two different lists.
numbers = (10, 15, 20, 25, 30, 35, 40)

even = []
odd = []

for num in numbers:
    if num % 2 == 0:
        even.append(num)
    else:
        odd.append(num)

print("Even Numbers:", even)
print("Odd Numbers:", odd)


# Set

# 1. Create a set of 10 numbers and print all elements using a for loop.
numbers = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100}

for num in numbers:
    print(num)
# 2. Create two sets and find their union.
set1 = {10, 20, 30}
set2 = {30, 40, 50}

result = set1.union(set2)

print(result)
# 3. Find the common elements between two sets using intersection().
set1 = {10, 20, 30, 40}
set2 = {30, 40, 50, 60}

common = set1.intersection(set2)

print(common)
# 4. Find the difference between two sets using difference().
set1 = {10, 20, 30, 40}
set2 = {30, 40, 50, 60}

diff = set1.difference(set2)

print(diff)
# 5. Find the largest and smallest numbers in a set using a loop.
numbers = {10, 50, 20, 80, 5, 45}

largest = smallest = next(iter(numbers))

for num in numbers:
    if num > largest:
        largest = num

    if num < smallest:
        smallest = num

print("Largest:", largest)
print("Smallest:", smallest)
# 6. Find common elements between two sets without using intersection().
set1 = {10, 20, 30, 40}
set2 = {30, 40, 50, 60}

common = set()

for item in set1:
    if item in set2:
        common.add(item)

print(common)
# 7. Find the union of two sets without using union().
set1 = {10, 20, 30}
set2 = {30, 40, 50}

result = set1.copy()

for item in set2:
    result.add(item)

print(result)
# 8. Check whether two sets are equal without using the == operator.
set1 = {10, 20, 30, 40}
set2 = {40, 30, 20, 10}

if len(set1) != len(set2):
    print("Sets are not equal")
else:
    equal = True

    for item in set1:
        if item not in set2:
            equal = False
            break

    if equal:
        print("Sets are equal")
    else:
        print("Sets are not equal")
# 9. Find the elements that are present in exactly one of three sets.
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
set3 = {5, 6, 7, 8}

result = set()

for item in set1:
    if item not in set2 and item not in set3:
        result.add(item)

for item in set2:
    if item not in set1 and item not in set3:
        result.add(item)

for item in set3:
    if item not in set1 and item not in set2:
        result.add(item)

print(result)
# 10. Find the common characters between two strings using sets.
str1 = "python"
str2 = "typhoon"

set1 = set(str1)
set2 = set(str2)

common = set1.intersection(set2)

print(common)

# Dictionary

# 1. Create a dictionary containing 5 students and their marks. Print all keys and values using a loop.
students = {
    "John": 85,
    "Alice": 92,
    "Bob": 67,
    "Mary": 78,
    "David": 55
}

for name, marks in students.items():
    print(name, marks)
# 2. Add a new key called city to an existing dictionary.
student = {
    "name": "John",
    "marks": 85
}

student["city"] = "New York"

print(student)

# 3. Update the marks of a particular student.
students = {
    "John": 85,
    "Alice": 92,
    "Bob": 67
}

students["Bob"] = 75

print(students)

# 4. Find the total marks of all students without using sum().
students = {
    "John": 85,
    "Alice": 92,
    "Bob": 67,
    "Mary": 78,
    "David": 55
}

total = 0

for marks in students.values():
    total += marks

print("Total Marks =", total)

# 5. Count how many students passed and failed. Consider 40 as the passing mark.
students = {
    "John": 85,
    "Alice": 32,
    "Bob": 67,
    "Mary": 25,
    "David": 55
}

passed = 0
failed = 0

for marks in students.values():
    if marks >= 40:
        passed += 1
    else:
        failed += 1

print("Passed:", passed)
print("Failed:", failed)
# 6. Find the student with the highest and lowest marks without using max() or min().
students = {
    "John": 85,
    "Alice": 92,
    "Bob": 67,
    "Mary": 78,
    "David": 55
}

highest_student = lowest_student = list(students.keys())[0]
highest_marks = lowest_marks = students[highest_student]

for name, marks in students.items():
    if marks > highest_marks:
        highest_marks = marks
        highest_student = name

    if marks < lowest_marks:
        lowest_marks = marks
        lowest_student = name

print("Highest:", highest_student, highest_marks)
print("Lowest:", lowest_student, lowest_marks)

# 7. Find the second-highest marks from a student dictionary.
students = {
    "John": 85,
    "Alice": 92,
    "Bob": 67,
    "Mary": 78,
    "David": 55
}

first = second = -1

for marks in students.values():
    if marks > first:
        second = first
        first = marks
    elif marks > second and marks != first:
        second = marks

print("Second Highest Marks:", second)
# 8. Create a new dictionary containing only students who scored more than 75.
students = {
    "John": 85,
    "Alice": 92,
    "Bob": 67,
    "Mary": 78,
    "David": 55
}

result = {}

for name, marks in students.items():
    if marks > 75:
        result[name] = marks

print(result)
# 9. Find the frequency of each character in a string and store it in a dictionary.
text = "python"

frequency = {}

for char in text:
    if char in frequency:
        frequency[char] += 1
    else:
        frequency[char] = 1

print(frequency)
# 10. Merge two dictionaries without using the update() method.
dict1 = {
    "a": 10,
    "b": 20
}

dict2 = {
    "c": 30,
    "d": 40
}

merged = {}

for key, value in dict1.items():
    merged[key] = value

for key, value in dict2.items():
    merged[key] = value

print(merged)