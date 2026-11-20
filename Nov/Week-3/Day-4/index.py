#OOPS Concept
#1.Encapsulation
#Everything wrap inside the class data , attribute, methods, constructor
class BankPassbook: 
    bankName = "SBI"
    def __init__(self, name, balance=0):
        self.name = name
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        
u1 = BankPassbook("Pratikshya", 2000)

#2.Inheritance 
# It allows one class to acquire attribute and methods on another cladd
#Single Inheritance
class Vehicle:
    color = "White"
    
    def start(self):
        print("Vehicle started")
        
    def stop(self):
        print("Vehicle stoped")
        
class Bus(Vehicle):                   #Child class
    def drive(self):
        print("Bus is moving")
    
b1 = Bus()
b1.start()
print(b1.color)

#Multiple Inheritance
class Camera:
    def take_pic(self):
        print("Taking Photos")
        
class GPS:
    def tracking_location(self):
        print("Tracking location")
        
class SmarterDevices(Camera,GPS):   #child
    def connect(self):
        print("Devices connected")
        
# sd = SmarterDevices()
# sd.take_pic()
# sd.tracking_location()
# sd.connect()

#Multilevel Inheritance   #Parent->1st child->2nd Child...
class Vehicle:                            #Parent
    
    def start(self):
        print("Vehicle started")
    
class Car(Vehicle):                       #1st child
    def drive(self):
        print("Car is moving")
        
class ElectricCar(Car):                   #2nd Child 
    def charge(self):
        print("Car is charging...")
        
c1 = Car()
#c1.charge()

#Heirchical Inheritance(1 parent, multiple child)
class Animal():                 #parent
    def eat(self):
        pass
    
class Dog(Animal):              #child
    def legs(self):
        print("Dog has four legs")
        
class Cat(Animal):              #child
    def sound(self):
        pass
    
class Cow(Animal):              #child
    def sound(self):
        pass
    
# Hybrid Inheritance: combination of 2 and more
class Vehicle:
    def start(self):
        print("Vehicle started")
        
class Car(Vehicle):
    def drive(self):
        print("car is moving")
        
class Bike(Vehicle):
    def ride(self):
        print("Bike is riding")
        
class HybridCar(Car,Bike):
    def hyfunc(self):
        print("Hybrid car with both car and bike functionalities...")
    
    
#Polymorphism
# Same method but different output

class Cow:
    def sound(self):
        print("cow moo")
        
class cat:
    def sound(self):
        print("cat meow")
        
class Dog:
    def sound(self):
        print("Dog Bark")
        
        
#Abstraction: Hiding internal functionalities shows only essential parts
from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start(self):
        #Common functionality that every child must implement
        pass
    
class Car(Vehicle):
    def start(self):
        #implementing the require functionality with common
        #common function + own function
        print("car starting....")
        
class ElectricalCar(Vehicle):
    def start(self):
        #implementing the require functionality with common
        #common function + own function
        print("Electrical vehicle start....") 

