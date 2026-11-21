name = input("Student name: ")
roll = input("Roll number: ")
marks = [float(input(f"Marks in subject {i} (out of 100): ")) for i in range(1, 6)]

total = sum(marks)
percentage = total / 5
status = "Pass" if percentage >= 40 and min(marks) >= 33 else "Fail"

with open("exam_result.txt", "w") as f:
    f.write(f"Student Name: {name}\n")
    f.write(f"Roll Number: {roll}\n")
    f.write(f"Marks: {', '.join(str(m) for m in marks)}\n")
    f.write(f"Total Marks: {total} / 500\n")
    f.write(f"Percentage: {percentage:.2f}%\n")
    f.write(f"Result: {status}\n")

print("\n--- Examination Result ---")
with open("exam_result.txt", "r") as f:
    print(f.read())
