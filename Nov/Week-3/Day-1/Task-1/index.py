#Functions and Variable Scope
#  
#     1. Create a function to check whether a number is even or odd.
def even_odd(n):
    if n % 2 == 0:
        print("Even number")
    else:
        print("Odd number")

even_odd(10)
even_odd(7)
#     2. Create a function to find the largest of three numbers.
def largest(a, b, c):
    if a >= b and a >= c:
        print("Largest:", a)
    elif b >= a and b >= c:
        print("Largest:", b)
    else:
        print("Largest:", c)

largest(10, 25, 15)
#     3. Create a function to calculate factorial.
def factorial(n):
    fact = 1

    for i in range(1, n + 1):
        fact = fact * i

    print("Factorial:", fact)

factorial(5)
#     4. Create a function to check whether a number is prime.
def prime(n):
    if n <= 1:
        print("Not Prime")
        return

    for i in range(2, n):
        if n % i == 0:
            print("Not Prime")
            return

    print("Prime Number")

prime(7)
prime(10)
#     5. Create a function to reverse a string.
def reverse_string(s):
    print("Reversed:", s[::-1])

reverse_string("Python")
#     6. Create a function to calculate the sum of all elements in a list.
def list_sum(numbers):
    total = 0

    for i in numbers:
        total = total + i

    print("Sum:", total)

list_sum([10, 20, 30, 40])
#     7. Create a calculator using separate functions for addition, subtraction, multiplication, and division.
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Cannot divide by zero"
    return a / b

print("Addition:", add(10, 5))
print("Subtraction:", subtract(10, 5))
print("Multiplication:", multiply(10, 5))
print("Division:", divide(10, 5))
#     8. Create a function using `args` to calculate the sum of multiple numbers.
def add_numbers(*args):
    total = 0

    for i in args:
        total = total + i

    print("Sum:", total)

add_numbers(10, 20, 30, 40, 50)
#     9. Create a function using `*kwargs` to display student details.
def student_details(**kwargs):
    for key, value in kwargs.items():
        print(key, ":", value)

student_details(
    name="Rahul",
    age=21,
    course="Python",
    city="Bhubaneswar"
)
#     10. Create a recursive function to calculate the Fibonacci sequence.
def fibonacci(n):
    if n <= 1:
        return n

    return fibonacci(n-1) + fibonacci(n-2)

for i in range(10):
    print(fibonacci(i), end=" ")