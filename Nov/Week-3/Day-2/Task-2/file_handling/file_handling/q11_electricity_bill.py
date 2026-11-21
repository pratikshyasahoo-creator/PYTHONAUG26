units = [120, 340, 215, 180, 410, 95, 275, 150, 320, 205]

with open("electricity_units.txt", "w") as f:
    for u in units:
        f.write(f"{u}\n")

with open("electricity_units.txt", "r") as f:
    readings = [int(line.strip()) for line in f if line.strip()]

total = sum(readings)
print("Total units consumed:", total)
print("Highest consumption:", max(readings))
print("Lowest consumption:", min(readings))
print("Average consumption:", round(total / len(readings), 2))
