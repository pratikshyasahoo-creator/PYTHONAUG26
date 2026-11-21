notes = """Python Notes
1. Python is an interpreted, high-level language.
2. Variables need no type declaration.
3. Use 'with open()' to handle files safely.
"""
with open("python_notes.txt", "w") as f:
    f.write(notes)

with open("python_notes.txt", "r") as src:
    content = src.read()

with open("backup_notes.txt", "w") as dst:
    dst.write(content)

print("Success! python_notes.txt was copied to backup_notes.txt")
