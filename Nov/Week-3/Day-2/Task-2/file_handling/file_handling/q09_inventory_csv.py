import csv

products = [
    [1, "Laptop", "Electronics", 55000, 10],
    [2, "Mouse", "Accessories", 500, 100],
    [3, "Notebook", "Stationery", 60, 300],
    [4, "Pen", "Stationery", 10, 500],
    [5, "Monitor", "Electronics", 12000, 25],
]

with open("inventory.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Product ID", "Product Name", "Category", "Price", "Quantity"])
    writer.writerows(products)

print("--- Product Inventory ---")
with open("inventory.csv", "r") as f:
    reader = csv.reader(f)
    header = next(reader)
    for row in reader:
        print(f"ID: {row[0]} | Name: {row[1]} | Category: {row[2]} | Price: {row[3]} | Qty: {row[4]}")
