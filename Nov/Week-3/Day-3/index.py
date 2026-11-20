# #OOPS
# #Class and Object
#Method
#constructor

# # class Employee:
# #     emp_id =1
# #     salary = 50000
# #     name = "Pratikshya"
# #     dept = "IT"
    
# # emp_1 = Employee()
# # emp_2 = Employee()
# # print(emp_1.name)
# # print(emp_1.salary)
# # print("-------")
# # print(emp_2.dept)

# #Method
# # class Mobile:
# #     brand = "IPhone"
# #     price = 100000
    
# #     def Ringing(self):
# #         print("Incoming call",self.brand)
        
# #     def Notification(self):
# #         print("1 Notification")
        
# # Mobile1 = Mobile()

# #print(Mobile1.price)
# #Mobile1.Ringing()
# #print(Mobile1.Ringing())

# class Employee:
#     name = "pratikshya"
#     salary = 50000
#     def __init__(self):
#         self.address = "BBSR"
#         print("Contructor 1")
        
        
# emp1 = Employee()

# print(emp1.name)
# print(emp1.address)


# class Employee:
#     def __init__(self, name, salary, address):
#         self.name = name
#         self.salary = salary
#         self.address = address
        
#     def EmployeeDetails(self):
#         print("Employee Name",self.name)
#         print("Employee Salary", self.salary)
#         print("Employee Address", self.address)
        
# e1 = Employee(name="Sonali", salary=50000, address="bbsr")
# e2 = Employee(name="sushree", salary=50000, address="delhi")
# e1.EmployeeDetails()
# e2.EmployeeDetails()
# print(e2.address)


#Make a class where I can create multiple object (employee) slary will the fix and also there will be a method 
# and that return the name of employee and his/her salary
#Hii Rahul your salary is 45000

# class Employee:

#     def __init__(self, name):
#         self.name = name
#         self.salary = 45000

#     def display(self):
#         return f"Hii {self.name}, your salary is {self.salary}"



# emp1 = Employee("Rahul")
# emp2 = Employee("Priya")
# emp3 = Employee("Amit")

# print(emp1.display())
# print(emp2.display())
# print(emp3.display())

# class Employee:
#     def __init__(self,name, salary=45000):
#         self.name = name
#         self.salary = salary
        
#     def ReturnDetails(self):
#         return"agfgkhbnb"
    
# e1 = Employee(name="Rahul")
# e2 = Employee(name="Rohit", salary=50000)

# print(e1.salary) 
# print(e2.salary)

# #Make a calculator with multiple methods like Add, Sub, Mul, Div

# class Calculator:
   
#     def __init__(self, a, b):
#         self.a = a
#         self.b = b
    
#     def Add(self):
#         print("Addition =", self.a + self.b)
  
#     def Sub(self):
#         print("Subtraction =", self.a - self.b)
   
#     def Mul(self):
#         print("Multiplication =", self.a * self.b)

#     def Div(self):
#         if self.b != 0:
#             print("Division =", self.a / self.b)
#         else:
#             print("Cannot divide by zero")

# a = int(input("Enter first number: "))
# b = int(input("Enter second number: "))

# c = Calculator(a, b)

# c.Add()
# c.Sub()
# c.Mul()
# c.Div()

#Make a class for Bank Passbook where a passbook holder,
# user can deposite,
# user can withdraw amount, 
# user can view there balance
# here you have to use default arg
# methods
# make constructor
class BankPassbook: 
    def __init__(self, name, balance=0):
        self.name = name
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print("Amount deposited successfully!")

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print("Amount withdrawn successfully!")
        else:
            print("Insufficient balance!")
   
    def view_balance(self):
        print("Account Holder:", self.name)
        print("Available Balance: Rs.", self.balance)


p1 = BankPassbook("Rahul",1000)

p1.deposit(5000)
p1.deposit(3000)
p1.withdraw(1000)
p1.view_balance()

    