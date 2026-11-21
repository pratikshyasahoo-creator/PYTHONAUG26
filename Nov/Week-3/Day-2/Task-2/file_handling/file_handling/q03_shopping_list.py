print("Enter 5 shopping items:")
with open("shopping_list.txt", "w") as f:
    for _ in range(5):
        f.write(input("Item: ") + "\n")

print("Enter 3 more items:")
with open("shopping_list.txt", "a") as f:
    for _ in range(3):
        f.write(input("Item: ") + "\n")

print("\n--- Shopping List ---")
with open("shopping_list.txt", "r") as f:
    for no, item in enumerate(f, 1):
        print(f"{no}. {item.strip()}")
