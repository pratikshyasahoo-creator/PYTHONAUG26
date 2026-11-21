with open("employee_records.txt", "w") as f:
    for i in range(1, 6):
        print(f"\nEmployee {i}")
        emp_id = input("ID: ")
        name = input("Name: ")
        dept = input("Department: ")
        salary = input("Monthly salary: ")
        f.write(f"{emp_id},{name},{dept},{salary}\n")

print("\n--- Employee Records ---")
with open("employee_records.txt", "r") as f:
    for line in f:
        emp_id, name, dept, salary = line.strip().split(",")
        print(f"ID: {emp_id} | Name: {name} | Dept: {dept} | Salary: {salary}")
