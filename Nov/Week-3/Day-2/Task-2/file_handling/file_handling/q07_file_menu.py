import os

filename = "company_profile.txt"

while True:
    print("\n--- FILE MANAGEMENT MENU ---")
    print("1. Create file")
    print("2. Write company information")
    print("3. Read file content")
    print("4. Append new company details")
    print("5. Rename file to business_profile.txt")
    print("6. Delete file")
    print("7. Exit")
    choice = input("Enter choice: ").strip()

    if choice == "1":
        if os.path.exists(filename):
            print("File already exists.")
        else:
            open(filename, "w").close()
            print(f"{filename} created.")
    elif choice == "2":
        if os.path.exists(filename):
            with open(filename, "w") as f:
                f.write(input("Enter company information: ") + "\n")
            print("Information written.")
        else:
            print("File does not exist. Create it first.")
    elif choice == "3":
        if os.path.exists(filename):
            with open(filename, "r") as f:
                print("\nContent:\n" + f.read())
        else:
            print("File does not exist.")
    elif choice == "4":
        if os.path.exists(filename):
            with open(filename, "a") as f:
                f.write(input("Enter new details: ") + "\n")
            print("Details appended.")
        else:
            print("File does not exist.")
    elif choice == "5":
        if os.path.exists(filename):
            os.rename(filename, "business_profile.txt")
            filename = "business_profile.txt"
            print("File renamed to business_profile.txt")
        else:
            print("File does not exist.")
    elif choice == "6":
        if os.path.exists(filename):
            os.remove(filename)
            print(f"{filename} deleted.")
        else:
            print("File does not exist.")
    elif choice == "7":
        print("Goodbye!")
        break
    else:
        print("Invalid choice.")
