def add_employee(employees):
    """Take employee details from the user and add to the list."""
    emp_id = int(input("Enter Employee ID: "))
    if find_employee(employees, emp_id):
        print("An employee with this ID already exists.")
        return None
    name = input("Enter Employee Name: ")
    department = input("Enter Department: ")
    salary = float(input("Enter Monthly Salary: "))
    employee = {"id": emp_id, "name": name, "department": department, "salary": salary}
    employees.append(employee)
    print("Employee added successfully.")
    return employee


def display_employee(employee):
    """Display details of one employee."""
    print(f"Employee ID: {employee['id']}")
    print(f"Employee Name: {employee['name']}")
    print(f"Department: {employee['department']}")
    print(f"Monthly Salary: {employee['salary']:g}")


def find_employee(employees, emp_id):
    """Return the employee with the given ID, or None."""
    for emp in employees:
        if emp["id"] == emp_id:
            return emp
    return None
