from employee_management.employee import add_employee, display_employee, find_employee
from employee_management.salary import calculate_annual_salary, calculate_bonus
from employee_management.department import employees_by_department, highest_paid_employee

employees = [
    {"id": 101, "name": "Rahul", "department": "IT", "salary": 25000},
    {"id": 102, "name": "Priya", "department": "HR", "salary": 30000},
    {"id": 103, "name": "Amit", "department": "IT", "salary": 40000},
    {"id": 104, "name": "Sneha", "department": "Sales", "salary": 20000},
]


def ask_employee():
    try:
        emp = find_employee(employees, int(input("Enter Employee ID: ")))
    except ValueError:
        print("Invalid ID.")
        return None
    if emp is None:
        print("Employee not found.")
    return emp


while True:
    print("\nEMPLOYEE MANAGEMENT SYSTEM\n")
    print("1. Add Employee")
    print("2. Display Employee Details")
    print("3. Calculate Annual Salary")
    print("4. Calculate Employee Bonus")
    print("5. Search Employees by Department")
    print("6. Find Highest-Paid Employee")
    print("7. Exit")
    choice = input("\nEnter your choice: ").strip()

    try:
        if choice == "1":
            add_employee(employees)
        elif choice == "2":
            emp = ask_employee()
            if emp:
                display_employee(emp)
        elif choice == "3":
            emp = ask_employee()
            if emp:
                print(f"Annual Salary: ₹{calculate_annual_salary(emp['salary']):,.0f}")
        elif choice == "4":
            emp = ask_employee()
            if emp:
                bonus, pct = calculate_bonus(emp["salary"])
                print(f"Bonus = {pct}% of ₹{emp['salary']:,.0f} = ₹{bonus:,.0f}")
        elif choice == "5":
            employees_by_department(employees, input("Enter Department: ").strip())
        elif choice == "6":
            highest_paid_employee(employees)
        elif choice == "7":
            print("Thank you! Goodbye.")
            break
        else:
            print("Invalid choice. Please enter 1-7.")
    except ValueError:
        print("Invalid input. Please enter numbers where required.")
