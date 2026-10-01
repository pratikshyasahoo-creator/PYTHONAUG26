const form = document.getElementById("registerForm");

const message = document.getElementById("message");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const age =
        document.getElementById("age").value;

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;
        
    const user = {

        name: name,

        age: age,

        phone: phone,

        email: email,

        password: password

    };


    localStorage.setItem(
        "registeredUser",
        JSON.stringify(user)
    );


    alert(
        "Registration successful! ",
        "green"
    );

    form.reset();

});


