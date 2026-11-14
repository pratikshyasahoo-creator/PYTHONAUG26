print("Hello")
print("Hello from Day 2")
#Operators in Python

#1. Arithmetic Operators(+, -, *, /, %, **, //)
print(5 + 3) # Addition
print(5 - 3) # Subtraction
print(5 * 3) # Multiplication
print(5 / 3) # Division 
print(5 % 3) # Modulus
print(5 ** 3) # Exponentiation
print(5 // 3) # Floor Division

#2. Comparison Operators(==, !=, >, <, >=, <=)
print(5 == 3) # Equal to
print(5 != 3) # Not equal to
print(5 > 3) # Greater than
print(5 < 3) # Less than
print(5 >= 3) # Greater than or equal to
print(5 <= 3) # Less than or equal to

#3. Logical Operators(and, or, not)
print(True and False) # Logical AND
print(True and True and False) # Logical AND
print(True or False) # Logical OR
print(False or False or False) # Logical OR
print(not True) # Logical NOT

#4. Membership Operators(in, not in)
print(3 in [1, 2, 3]) # True
print(4 not in [1, 2, 3]) # True

#5. Identity Operators(is, is not)
a = [1, 2, 3]
b = [1, 2, 3]
print(a is b) # False
print(a is not b) # True

name = "Pratikshya"
print("P" in name) # True
print("p" in name) # False
print("o" not in name) # True

#5. Identity Operators(is, is not)
print(5 is 5) # True
print(5 is not 3) # True

#conditional statements in Python
#1. if statement
score = 95
if score >= 90:
    print("You got an A grade")
#2. if-else statement
if score >= 30:
    print("You passed the exam")
else:
    print("You failed the exam")
    
    
#3. if-elif-else statement
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
    
    
#4. nested if statement
age = 80
if age == 18:
    print("You are an adult")
if age > 18:
    if age >= 65:
        print("You are a senior citizen")
    else:
        print("You are not a senior citizen")
else:
    print("You are not an adult")
    
    
#Loops in Python
#1. for loop
#example of for loop with range function
#1
for i in range(5):
    print(i)
#2
for i in range(7, 11):
    print(i)
#3  
for i in range(5, 26, 5):
    print(i)
#4  
for i in range(5, 0, -1):
   print(i)
   
#Nested for loop
for i in range(5):
    for j in range(3):
        print(i, j)
        
        
#2. while loop
#example of while loop
i = 1
while i <= 5:
    print(i)
    i += 1
    
    
i = 5
while i >= 1:
    print(i)
    i -= 1
    

i = 1
while i <= 6:
    print(i)
    if i == 3:
        print("44")
    i += 1
    
    
for i in range(1, 7, 1):
    if i == 4:
        print("44")
    else:
        print(i)
        
for i in range(1, 4):
    if i == 1:
        print("1-Odd")
    elif i == 2:
        print("2-Even")
    elif i == 3:
        print("3-Odd")
    elif i == 4:
        print("4-Even")
else:
    print(i)
    
for i in range(1, 5):
    if i % 2 == 0:
        print(i,"-Even")
    else:
        print(i,"-Odd")
        
        
for i in range(1, 10):
    if i==6 :
        break
    print(i)
    
print("Loop is broken")
i = 1
while i <= 6:
    
#print the pattern
#1
#2
#3
#44
#5
#6
    if i == 4:
        print("44")
    else:
        print(i)
    i += 1