products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Printer",
            "Mouse", "Webcam", "Headphones", "Speaker", "Router", "Laptop"]

with open("product_catalog.txt", "w") as f:
    for p in products:
        f.write(p + "\n")

search = input("Enter product name to search: ").strip().lower()
count = 0
with open("product_catalog.txt", "r") as f:
    for line in f:
        if line.strip().lower() == search:
            count += 1

if count > 0:
    print(f"'{search}' exists in the file and appears {count} time(s).")
else:
    print(f"'{search}' was not found.")
