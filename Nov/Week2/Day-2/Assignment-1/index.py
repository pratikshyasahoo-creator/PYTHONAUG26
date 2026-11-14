#Operators
#1.Write a program to add two numbers.
a = 5
b = 10
print(a+b)

#2.Write a program to calculate the remainder of two numbers.
a = 10
b = 3
print(a % b)

#3.Write a program to calculate the square of a number.
a = 5
print(a ** 2)

#4.Write a program to compare two numbers.
a = 10
b = 20
if a > b:
    print(a, "is greater than", b)
elif a < b:
    print(a, "is less than", b)
else:
    print(a, "is equal to", b)

#5.Write a program to check whether a number is between 10 and 50 using logical operators.
a = 25
if a > 10 and a < 50:
    print(a, "is between 10 and 50")
else:
    print(a, "is not between 10 and 50")
    
# Conditional Statements
#1. Write a program to check whether a number is positive or negative.
a = -5
if a > 0:
    print(a, "is positive")
elif a < 0:
    print(a, "is negative")
else:
    print(a, "is zero")

#2. Write a program to check whether a number is even or odd.
a = 4
if a % 2 == 0:
    print("This is an even Number")
else:
    print("This is an odd Number")

#3. Write a program to check voting eligibility.
age = 18
if age >= 18:
    print("You are eligible to vote")
else:
    print("You are not eligible to vote")
#4. Write a program to find the largest of two numbers.
x = 35
y = 27
if x > y:
    print(x, "is greater than", y)
elif x < y:
    print(x, "is less than", y)
else:
    print(x, "is equal to", y)
#5. Write a program to calculate grades based on marks.
score = 75
if score >= 90:
    print("You got an A grade")
elif score >= 80:
    print("You got a B grade")
elif score >= 70:
    print("You got a C grade")
elif score >= 50:
    print("You got a D grade")
else:
    print("You got an F grade")
#6. Write a program to check whether a number is positive, negative, or zero.
num = 5
if num > 0:
    print(num, "is positive")
elif num < 0:
    print(num, "is negative")
else:
    print(num, "is zero")
#7. Write a program to create a simple calculator using `if-elif-else`.
x = 10
y = 20
operation = "*"
if operation == "+":
    print(x + y)
elif operation == "-":
    print(x - y)
elif operation == "*":
    print(x * y)
elif operation == "/":
    print(x / y)
elif operation == "%":
    print(x % y)
else:
    print("Invalid operation")
    
# Loops

#1. Print numbers from 1 to 10 using a `for` loop.
for i in range(1, 11):
    print(i)
#2. Print numbers from 10 to 1 using a `while` loop.
i = 10

while i >= 1:
    print(i)
    i -= 1
#3. Print even numbers from 2 to 20.
for i in range(2, 21, 2):
    print(i)
    i += 2
#4. Print odd numbers from 1 to 20.
for i in range(1, 21, 2):
    print(i)
    i += 2
#5. Print the multiplication table of any number.
num = int(input("Enter a number: "))
for i in range(1, 11):
    print(num, "x", i, "=", num * i)
#6. Print numbers from 5 to 25 with a step of 5.
for i in range(5, 26, 5):
    print(i)
#7. Print numbers in reverse order from 5 to 1.
for i in range(5, 0, -1):
    print(i)
#8. Calculate the sum of numbers from 1 to 10.
total = 0
for i in range(1, 11):
    total += i
print("The sum of numbers from 1 to 10 is:", total)
 
#9. Print the following pattern:
#1
#2
#3
#4
#5
for i in range(1, 6):
    print(i)
#10. Print the following pattern:
#*
#**
#***
#****
#*****
for i in range(1, 6):
    print("*" * i)
    
   