document.getElementById("studentForm").onsubmit = function(event) {

    event.preventDefault();

    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var course = document.getElementById("course").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (name == "") {
        alert("Please enter your name");
        return;
    }

    if (email == "") {
        alert("Please enter your email");
        return;
    }

    if (phone == "") {
        alert("Please enter your phone number");
        return;
    }

    if (gender == null) {
        alert("Please select your gender");
        return;
    }

    if (course == "") {
        alert("Please select a course");
        return;
    }

    if (password == "") {
        alert("Please enter your password");
        return;
    }

    
    if (confirmPassword == "") {
        alert("Please confirm your password");
        return;
    }

    if (password != confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    var student = {
        name: name,
        email: email,
        phone: phone,
        gender: gender.value,
        course: course,
        password: password
    };

    
    var students = JSON.parse(localStorage.getItem("students"));

    if (students == null) {
        students = [];
    }

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("message").innerHTML =
        "Registration Successful!";

    document.getElementById("studentForm").reset();


    
};
