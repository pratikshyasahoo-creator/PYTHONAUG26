#1. Encapsulation – Product Management
# Create a Product class with a private price attribute. Create methods to update and display the price.
class Product:
    def __init__(self, price):
        self.__price = price

    def update_price(self, new_price):
        self.__price = new_price
        print("Price updated successfully!")

    def display_price(self):
        print("Product Price:", self.__price)


p = Product(500)
p.display_price()

p.update_price(800)
p.display_price()

#2. Single Inheritance – Library
# Create a `Library` parent class with a `library_info()` method. Create a `BookSection` child class with its own `display_books()` method.
class Library:
    def library_info(self):
        print("Welcome to the Central Library")


class BookSection(Library):
    def display_books(self):
        print("Available Books:")
        print("1. Python Programming")
        print("2. Java Programming")
        print("3. C Programming")


b = BookSection()
b.library_info()
b.display_books()

#3. Multiple Inheritance – Smart Home
# Create two parent classes, `Light` and `Fan`. Create a child class `SmartHome` that inherits from both.
class Light:
    def turn_on_light(self):
        print("Light is ON")


class Fan:
    def turn_on_fan(self):
        print("Fan is ON")


class SmartHome(Light, Fan):
    def smart_control(self):
        print("Smart Home System Activated")


s = SmartHome()
s.turn_on_light()
s.turn_on_fan()
s.smart_control()
#4. Multilevel Inheritance – Education
# Create three classes: `Education`, `School`, and `OnlineSchool`. Implement multilevel inheritance and call all inherited methods.
class Education:
    def education_info(self):
        print("Education is important for everyone")


class School(Education):
    def school_info(self):
        print("School provides basic education")


class OnlineSchool(School):
    def online_info(self):
        print("Online School provides virtual classes")


o = OnlineSchool()
o.education_info()
o.school_info()
o.online_info()

#5. Hierarchical Inheritance – Vehicles
# Create a parent class `Vehicle` and child classes `Car`, `Bus`, and `Bike`. Each child should have its own method.
class Vehicle:
    def vehicle_info(self):
        print("All vehicles are used for transportation")


class Car(Vehicle):
    def car_info(self):
        print("Car has four wheels")


class Bus(Vehicle):
    def bus_info(self):
        print("Bus carries many passengers")


class Bike(Vehicle):
    def bike_info(self):
        print("Bike has two wheels")


c = Car()
c.vehicle_info()
c.car_info()

b = Bus()
b.vehicle_info()
b.bus_info()

bi = Bike()
bi.vehicle_info()
bi.bike_info()
#6. Hybrid Inheritance – Smart Devices
# Create a parent class `Device`, two child classes `Computer` and `Television`, and a final class `SmartDevice` inheriting from both.
class Device:
    def device_info(self):
        print("This is an electronic device")


class Computer(Device):
    def computer_info(self):
        print("This is a Computer")


class Television(Device):
    def television_info(self):
        print("This is a Television")


class SmartDevice(Computer, Television):
    def smart_info(self):
        print("This is a Smart Device")


s = SmartDevice()
s.device_info()
s.computer_info()
s.television_info()
s.smart_info()
#7. Polymorphism – Notification System
# Create `EmailNotification`, `SMSNotification`, and `PushNotification` classes. Each class should have a `send()` method with different messages.
class EmailNotification:
    def send(self):
        print("Sending Email Notification")


class SMSNotification:
    def send(self):
        print("Sending SMS Notification")


class PushNotification:
    def send(self):
        print("Sending Push Notification")


e = EmailNotification()
s = SMSNotification()
p = PushNotification()

e.send()
s.send()
p.send()
#8. Abstraction – Online Booking
# Create an abstract class `Booking` with an abstract method `confirm_booking()`. Implement it in `HotelBooking` and `FlightBooking`.
from abc import ABC, abstractmethod


class Booking(ABC):

    @abstractmethod
    def confirm_booking(self):
        pass


class HotelBooking(Booking):
    def confirm_booking(self):
        print("Hotel Booking Confirmed")


class FlightBooking(Booking):
    def confirm_booking(self):
        print("Flight Booking Confirmed")


h = HotelBooking()
f = FlightBooking()

h.confirm_booking()
f.confirm_booking()