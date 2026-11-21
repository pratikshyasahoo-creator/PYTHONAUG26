def calculate_annual_salary(monthly_salary):
    """Annual Salary = Monthly Salary x 12"""
    return monthly_salary * 12


def calculate_bonus(monthly_salary):
    """Bonus: <15000 -> 5%, 15000-30000 -> 10%, >30000 -> 15%"""
    if monthly_salary < 15000:
        percent = 5
    elif monthly_salary <= 30000:
        percent = 10
    else:
        percent = 15
    return monthly_salary * percent / 100, percent
