#List
#fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

#for i,fruit in enumerate(fruits):
#    print(i+1, "->", fruit)
    
#Tuple
#fruits_tuple = ("apple", "banana", "cherry", "kiwi", "mango")
#for i,fruit in enumerate(fruits_tuple):
#    print(i+1, "->", fruit)
    
#Set
#fruits_set = {"apple", "banana", "cherry", "kiwi", "mango"}
#for i,fruit in enumerate(fruits_set):
#    print(i+1, "->", fruit)

#Dictionary
student_dict = {"name": "John", "age": 30, "city": "New York"}

#for key in student_dict:
#    print(key) #gives only keys
    
#for value in student_dict.values():
#    print(value) #gives only values
    
#for key in student_dict:
#    print(key, "->", student_dict[key]) #gives key and value
    
#for key, value in student_dict.items():
#    print(key, "->", value)  # gives key and value
    
    
    
#FUNCTIONS  
# Function in Python is a block of code that is designed to perform a specific task. Functions help in breaking our program into smaller and modular chunks. As our program grows larger and larger, functions make it more organized and manageable. Furthermore, it avoids repetition and makes the code reusable.
#functions are defined using the def keyword, followed by the function name and parentheses. The code block within every function starts with a colon (:) and is indented.
#Example: simple function
#def welcome():
#    print("Welcome to Python Functions!")
#welcome()  # Output: Welcome to Python Functions!

#Arguments and Parameters
#Arguments are the values that are passed to a function when it is called, while parameters are the variables that are defined in the function's definition to receive those values. In other words, parameters are placeholders for the values that will be provided as arguments when the function is invoked.
#Example: function with parameters
#def greet(name):
#    print("Hello, " + name + "!")

#greet("Pratikshya")  # Output: Hello, Pratikshya!

def welcome(name, age, city):
    print("Welcome to Python Functions!")
    print("Name:", name)
    print("Age:", age)
    print("City:", city)
    
#welcome("Pratikshya", 25, "New York")  
#welcome(age=25, name="Pratikshya", city="BBSR")  # This is called keyword arguments, where we specify the parameter names along with their corresponding values. This allows us to pass the arguments in any order, as long as we provide the correct parameter names.

#Default Arguments
#Default arguments are values that are assigned to function parameters in the function definition. If the caller does not provide a value for a parameter with a default argument, the default value will be used. This allows functions to have optional parameters and provides flexibility in function calls.

#Example: function with default arguments

def welcome_with_default(name="Guest", age=18, city="Unknown"):
    print("Welcome to Python Functions!")
    print("Name:", name)
    print("Age:", age)
    print("City:", city)
    
#welcome_with_default()  # Output: Welcome to Python Functions! Name: Guest Age: 18 City: Unknown
#welcome_with_default("Pratikshya", 25, "BBSR")

#Variable-length Arguments
#Variable-length arguments allow a function to accept an arbitrary number of arguments. In Python, we can use the *args syntax to pass a variable number of positional arguments to a function. The *args parameter collects any additional positional arguments passed to the function into a tuple.
#Example: function with variable-length arguments

#def show_args(*numbers):
    
#    for i in numbers:
#        print(i)
#show_args(1,2,3,4,5)   

#Local Scope, Global Scope

#def welcome():
#    msg = "Welcome to python"
#    print(msg)   
#welcome()

# Return
#def welcome():
#    return("Welcome to python")
#res = welcome()
#print(res)

#1.Write a function with argument that returns is the number even or odd
#def even_or_odd(num):
#    if num % 2 == 0:
#        return "Even"
#    else:
#        return "Odd"

#print(even_or_odd(10))  
#print(even_or_odd(7))   
#res = even_or_odd(28)
#print(res)
#2. Write a function that take an list of numbers and return largest number

#def largest_number(numbers):
#    largest = numbers[0]

#    for num in numbers:
#        if num > largest:
#            largest = num
#
#    return largest

#numbers = [10, 20, 50, 300, 1111]
#print(largest_number(numbers)) 

#3. Write a function that takes a list of numbers and return largest and smallest numbers 

#def largest_smallest(numbers):
#    largest_number = numbers[0]
#    smallest_number = numbers[0]
#    for num in numbers:
#        if num > largest:
#            largest = num
#        if num < smallest:
#            smallest = num   
#    return smallest, largest

#numbers= [10,20,300,500,111,30,10]
#print(largest_smallest(numbers))
#print(largest_smallest(numbers))

#4.Write a function that takes a args as age and return voting eligibility
def voting_eligibility(age):
    if age == 18:
        return "Just 18"
    elif age >= 18:
        return "Eligible to vote"
    else:
        return "Not eligible to vote"


#print(voting_eligibility(20))
#print(voting_eligibility(16))
#print(voting_eligibility(18))

#5.Write a function that takes mark ans show grade
# mark: 90-100-> A
# mark: 80-89-> B
# mark: 70-79-> c
# mark: 50-59-> D
#less than 50 fail

#def show_grade(mark):
#    if 90 <= mark <= 100:
#        print "A"
#    elif 80 <= mark <= 89:
#        print "B"
#    elif 70 <= mark <= 79:
#        print "C"
#    elif 50 <= mark <= 59:
#        print "D"
#    elif 60 <= mark <= 69:
#        print "E"
#    else:
#        print "Fail"

#print(show_grade(95))  
#print(show_grade(85))  
#print(show_grade(75))  
#print(show_grade(55))  
#print(show_grade(45))  

#6. Write a function that takes a number list and show the numbers are even or odd 
numbers= [10,20,300,500,111,30,10]

def check_even_odd(numbers):
    for num in numbers:
        if num % 2 == 0:
            print(f"{num} - Even")
        else:
            print(f"{num} - Odd")

numbers = [10, 20, 300, 500, 111, 30, 10]
#check_even_odd(numbers)

#7. Write a function that takes a number list and show how many are even or odd in the list numbers = [10, 20, 300, 500, 111, 30, 10]
def count_even_odd(numbers):
    even_count = 0
    odd_count = 0

    for num in numbers:
        if num % 2 == 0:
            even_count += 1
        else:
            odd_count += 1

    print("Even numbers:", even_count)
    print("Odd numbers:", odd_count)

numbers = [10, 20, 300, 500, 111, 30, 10]
#count_even_odd(numbers)

#8. Write a function with args that show the multiplication table

def multiplication_table(number):
    for i in range(1, 11):
        print(f"{number} x {i} = {number * i}")

multiplication_table(5)

