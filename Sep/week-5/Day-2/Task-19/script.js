const loginForm =
    document.getElementById("loginForm");

const registerForm =
    document.getElementById("registerForm");

const title =
    document.getElementById("title");

const subtitle =
    document.getElementById("subtitle");

const switchText =
    document.getElementById("switchText");

const switchBtn =
    document.getElementById("switchBtn");

const message =
    document.getElementById("message");

const dashboard =
    document.getElementById("dashboard");

const welcome =
    document.getElementById("welcome");


switchBtn.addEventListener("click", () => {

    loginForm.classList.toggle("hidden");

    registerForm.classList.toggle("hidden");


    if (loginForm.classList.contains("hidden")) {

        title.textContent = "Create Account";

        subtitle.textContent =
            "Create your account to get started.";

        switchText.textContent =
            "Already have an account?";

        switchBtn.textContent = "Login";

    } else {

        title.textContent = "Login";

        subtitle.textContent =
            "Welcome back! Please login to your account.";

        switchText.textContent =
            "Don't have an account?";

        switchBtn.textContent = "Register";

    }

    message.textContent = "";

});


function togglePassword(id) {

    const input =
        document.getElementById(id);

    if (input.type === "password") {

        input.type = "text";

    } else {

        input.type = "password";

    }

}

registerForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const name =
            document.getElementById("registerName")
                .value.trim();

        const email =
            document.getElementById("registerEmail")
                .value.trim()
                .toLowerCase();

        const password =
            document.getElementById("registerPassword")
                .value;

        const confirmPassword =
            document.getElementById("confirmPassword")
                .value;


        if (password !== confirmPassword) {

            alert(
                "Passwords do not match."
            );

            return;

        }


        const user =
            JSON.parse(
                localStorage.getItem("user")
            );


        if (user && user.email === email) {

            alert(
                "An account with this email already exists."
            );

            return;

        }

        const newUser = {

            name: name,

            email: email,

            password: password

        };


        localStorage.setItem(
            "user",
            JSON.stringify(newUser)
        );


        showMessage(
            "Account created successfully!",
            true
        );


        registerForm.reset();


        setTimeout(() => {

            switchBtn.click();

            document.getElementById("loginEmail")
                .value = email;

        }, 1000);

    }
);


loginForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const email =
            document.getElementById("loginEmail")
                .value.trim()
                .toLowerCase();

        const password =
            document.getElementById("loginPassword")
                .value;


        const user =
            JSON.parse(
                localStorage.getItem("user")
            );


        if (!user) {

            showMessage(
                "No account found. Please register first."
            );

            return;

        }




        if (
            email !== user.email ||
            password !== user.password
        ) {

            showMessage(
                "Incorrect email or password."
            );

            return;

        }



        localStorage.setItem(
            "loggedIn",
            "true"
        );


        showDashboard(user.name);

    }
);



function showDashboard(name) {

    document
        .querySelector(".container")
        .classList.add("hidden");


    dashboard.classList.remove("hidden");


    welcome.textContent =
        `Welcome back, ${name}!`;

}



function logout() {

    localStorage.removeItem("loggedIn");

    dashboard.classList.add("hidden");

    document
        .querySelector(".container")
        .classList.remove("hidden");

    loginForm.reset();

}



function showMessage(text, success = false) {

    message.textContent = text;

    message.style.color =
        success
            ? "#20a464"
            : "#e74c3c";

}

window.addEventListener("load", () => {

    const loggedIn =
        localStorage.getItem("loggedIn");

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );


    if (loggedIn === "true" && user) {

        showDashboard(user.name);

    }

});
