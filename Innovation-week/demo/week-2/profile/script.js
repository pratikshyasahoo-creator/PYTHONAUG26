// ============================================
// INITIAL LOCAL STORAGE
// ============================================

function initializeStorage() {

    if (!localStorage.getItem("dominosUser")) {

        localStorage.setItem(
            "dominosUser",
            JSON.stringify({
                loggedIn: false,
                name: "",
                phone: ""
            })
        );

    }


    if (!localStorage.getItem("cart")) {

        localStorage.setItem(
            "cart",
            JSON.stringify([])
        );

    }


    if (!localStorage.getItem("orders")) {

        localStorage.setItem(
            "orders",
            JSON.stringify([])
        );

    }


    if (!localStorage.getItem("wallet")) {

        localStorage.setItem(
            "wallet",
            "250"
        );

    }


    if (!localStorage.getItem("rewards")) {

        localStorage.setItem(
            "rewards",
            "120"
        );

    }

}


initializeStorage();


// ============================================
// GO TO MENU
// ============================================

function goToMenu() {

    window.location.href = "menu.html";

}


// ============================================
// OPEN PROFILE OPTION
// ============================================

function openOption(option) {

    window.location.href =
        `option.html?type=${option}`;

}


// ============================================
// LOGIN / LOGOUT
// ============================================

function loginLogout() {

    const user =
        JSON.parse(
            localStorage.getItem("dominosUser")
        );


    if (user.loggedIn) {

        logoutUser();

    } else {

        document
            .getElementById("loginModal")
            .classList.remove("hidden");

    }

}


// ============================================
// LOGIN
// ============================================

function loginUser() {

    const name =
        document
            .getElementById("userName")
            .value
            .trim();


    const phone =
        document
            .getElementById("userPhone")
            .value
            .trim();


    if (!name) {

        alert("Please enter your name.");

        return;

    }


    if (!/^[0-9]{10}$/.test(phone)) {

        alert(
            "Please enter a valid 10-digit mobile number."
        );

        return;

    }


    localStorage.setItem(
        "dominosUser",
        JSON.stringify({

            loggedIn: true,

            name: name,

            phone: phone

        })
    );


    closeLogin();

    updateProfile();


    alert(
        "Login successful!"
    );

}


// ============================================
// LOGOUT
// ============================================

function logoutUser() {

    if (
        !confirm(
            "Are you sure you want to logout?"
        )
    ) {

        return;

    }


    localStorage.setItem(
        "dominosUser",
        JSON.stringify({

            loggedIn: false,

            name: "",

            phone: ""

        })
    );


    updateProfile();


    alert(
        "You have been logged out."
    );

}


// ============================================
// UPDATE PROFILE
// ============================================

function updateProfile() {

    const user =
        JSON.parse(
            localStorage.getItem("dominosUser")
        );


    const profileName =
        document.getElementById(
            "profileName"
        );


    const loginButton =
        document.getElementById(
            "loginButton"
        );


    if (user.loggedIn) {

        profileName.innerText =
            "Hello, " + user.name;

        loginButton.innerText =
            "Logout";

    } else {

        profileName.innerText =
            "Login for ••••";

        loginButton.innerText =
            "Login";

    }

}


// ============================================
// CLOSE LOGIN
// ============================================

function closeLogin() {

    document
        .getElementById("loginModal")
        .classList.add("hidden");

}


// ============================================
// INITIALIZE
// ============================================

updateProfile();