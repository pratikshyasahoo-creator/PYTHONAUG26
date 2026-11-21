def employees_by_department(employees, department):
    """Print employees of a department using a for loop."""
    print(f"\nEmployees in {department} Department:\n")
    found = False
    for emp in employees:
        if emp["department"].lower() == department.lower():
            print(f"{emp['name']} - ₹{emp['salary']:,.0f}")
            found = True
    if not found:
        print("No employees found in this department.")


def highest_paid_employee(employees):
    """Find and print the employee with the highest monthly salary."""
    if not employees:
        print("No employees available.")
        return None
    highest = employees[0]
    for emp in employees:
        if emp["salary"] > highest["salary"]:
            highest = emp
    print("\nHighest Paid Employee:\n")
    print(f"Name: {highest['name']}")
    print(f"Department: {highest['department']}")
    print(f"Monthly Salary: ₹{highest['salary']:,.0f}")
    return highest
