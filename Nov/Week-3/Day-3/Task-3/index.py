# Question 1 – Book Details

# Create a `Book` class with:

# - Book name
# - Author name
# - Price

# Use a constructor to initialize the values and a method to display book details.
class Book:
    def __init__(self, book_name, author_name, price):
        self.book_name = book_name
        self.author_name = author_name
        self.price = price

    def display(self):
        print("Book Name:", self.book_name)
        print("Author Name:", self.author_name)
        print("Price: ₹", self.price)


b = Book("Python Programming", "Guido van Rossum", 500)
b.display()

# Question 2 – Rectangle

# Create a `Rectangle` class with length and width.

# Create two methods:

# - `area()` – Calculate area.
# - `perimeter()` – Calculate perimeter.

class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        print("Area:", self.length * self.width)

    def perimeter(self):
        print("Perimeter:", 2 * (self.length + self.width))


r = Rectangle(10, 5)
r.area()
r.perimeter()

#Question 3 – Movie Ticket

# Create a `MovieTicket` class with movie name and ticket price.

# Create methods to:

# - Display movie details.
# - Calculate total price for multiple tickets.

class MovieTicket:
    def __init__(self, movie_name, ticket_price):
        self.movie_name = movie_name
        self.ticket_price = ticket_price

    def display(self):
        print("Movie Name:", self.movie_name)
        print("Ticket Price: ₹", self.ticket_price)

    def total_price(self, quantity):
        total = self.ticket_price * quantity
        print("Total Price: ₹", total)


m = MovieTicket("Avatar", 200)
m.display()
m.total_price(3)

#Question 4 – Electricity Bill

# Create an `ElectricityBill` class with customer name and units consumed.

# Calculate the bill using ₹5 per unit.

class ElectricityBill:
    def __init__(self, customer_name, units):
        self.customer_name = customer_name
        self.units = units

    def calculate_bill(self):
        bill = self.units * 5
        print("Customer Name:", self.customer_name)
        print("Units Consumed:", self.units)
        print("Total Bill: ₹", bill)


e = ElectricityBill("Rahul", 150)
e.calculate_bill()

#Question 5 – Shopping Cart

# Create a `ShoppingCart` class with product name, price, and quantity.

# Create methods to:

# - Display product details.
# - Calculate total price.
# - Apply a 10% discount if the total price is above ₹5,000.

class ShoppingCart:
    def __init__(self, product_name, price, quantity):
        self.product_name = product_name
        self.price = price
        self.quantity = quantity

    def display(self):
        print("Product Name:", self.product_name)
        print("Price: ₹", self.price)
        print("Quantity:", self.quantity)

    def calculate_total(self):
        total = self.price * self.quantity
        print("Total Price: ₹", total)

        if total > 5000:
            discount = total * 0.10
            final_price = total - discount

            print("Discount: ₹", discount)
            print("Final Price: ₹", final_price)
        else:
            print("No Discount")
            print("Final Price: ₹", total)


s = ShoppingCart("Laptop", 60000, 1)
s.display()
s.calculate_total()