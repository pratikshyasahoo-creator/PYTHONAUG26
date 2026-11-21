name = input("College name: ")
location = input("Location: ")
year = input("Establishment year: ")
depts = input("Number of departments: ")

with open("college_info.txt", "w") as f:
    f.write(f"College Name: {name}\nLocation: {location}\nEstablished: {year}\nDepartments: {depts}\n")

print("\n--- College Information ---")
with open("college_info.txt", "r") as f:
    print(f.read())
