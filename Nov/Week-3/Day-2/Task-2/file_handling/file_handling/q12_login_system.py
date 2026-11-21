# NOTE: Storing plain-text passwords is for this classroom exercise only.
# Real applications must store hashed passwords.

print("--- Register ---")
username = input("Username: ")
email = input("Email: ")
password = input("Password: ")

with open("account_details.txt", "w") as f:
    f.write(f"{username}\n{email}\n{password}\n")

print("\n--- Login ---")
login_user = input("Username: ")
login_pass = input("Password: ")

with open("account_details.txt", "r") as f:
    saved_user = f.readline().strip()
    saved_email = f.readline().strip()
    saved_pass = f.readline().strip()

if login_user == saved_user and login_pass == saved_pass:
    print("Login Successful")
else:
    print("Invalid Credentials")
