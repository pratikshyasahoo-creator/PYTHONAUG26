#11. Write a program to calculate the factorial of a number.
num = 5
factorial = 1
for i in range(1, num + 1):
    factorial *= i   
print("The factorial of", num, "is:", factorial)
#12. Write a program to calculate age after two years.
#age = input("Enter your age: ")
#print("Your age after two years is:", int(age) + 2)

# Formating 
#name= "Pratikshya"
#age= 22
#About= "My name is {} and I am {} years old."
#print(About.format(name, age))

#Print the table of a number
#num = int(input("Enter a number: "))
#for i in range(1, 11):
#   print(num, "x", i, "=", num * i)

#Print addition of the 1 to n numbers 
#n = int(input("Enter a number: "))
#sum = 0
#for i in range(1, n + 1):
#    sum += i
#print("The sum of numbers from 1 to", n, "is:", sum)

#print a string in multiple lines
#print("This is line 1\nThis is line 2\nThis is line 3")
#a = """This is line 1
#This is line 2
#This is line 3"""
#print(a)

#Print addition of the 1 to n numbers using formula n(n+1)/2
#num = int(input("Enter a number: "))
#sum = (num * (num + 1)) // 2
#print("The sum of numbers from 1 to", num, "is:", sum)

# adding two variables using input function
#a = input("Enter first name: ")
#b = int (input("Enter last name: "))
#print("Full name is:", a + " " + b) #Error: can only concatenate str (not "int") to str
    