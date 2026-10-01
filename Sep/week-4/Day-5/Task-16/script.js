document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        address: document.getElementById("address").value
    };

    localStorage.setItem("student", JSON.stringify(student));

    alert("Student registered successfully!");

    document.getElementById("registrationForm").reset();
});

document.getElementById("myImage").style.width = "40px";
document.getElementById("myImage").style.height = "300px";

function viewDetails() {
    let data = localStorage.getItem("student");

    if (data) {
        let student = JSON.parse(data);

        document.getElementById("details").innerHTML = `
            <h2>Student Details</h2>
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Email:</strong> ${student.email}</p>
            <p><strong>Phone:</strong> ${student.phone}</p>
            <p><strong>Date of Birth:</strong> ${student.dob}</p>
            <p><strong>Gender:</strong> ${student.gender}</p>
            <p><strong>Address:</strong> ${student.address}</p>
        `;
    } else {
        document.getElementById("details").innerHTML = "<p>No student details found.</p>";
    }
}

 