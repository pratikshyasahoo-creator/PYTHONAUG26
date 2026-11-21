import json

patient = {
    "patient_id": 501,
    "name": "Anita Das",
    "age": 34,
    "disease": "Diabetes",
    "doctor_name": "Dr. Mohanty",
}

with open("patient_info.json", "w") as f:
    json.dump(patient, f, indent=4)

with open("patient_info.json", "r") as f:
    data = json.load(f)

print("--- Patient Information ---")
for key, value in data.items():
    print(f"{key.replace('_', ' ').title()}: {value}")
