// =====================================
// ELEMENTS
// =====================================

const locationButton =
    document.getElementById("locationButton");

const locationMenu =
    document.getElementById("locationMenu");

const arrowIcon =
    document.getElementById("arrowIcon");

const locationText =
    document.getElementById("locationText");

const detectLocationButton =
    document.getElementById("detectLocationButton");

const detectMenuButton =
    document.getElementById("detectMenuButton");

const manualLocationButton =
    document.getElementById("manualLocationButton");


// =====================================
// TOGGLE DROPDOWN
// =====================================

locationButton.addEventListener("click", function (event) {

    event.stopPropagation();

    locationMenu.classList.toggle("hidden");

    arrowIcon.classList.toggle("rotate");

});


// =====================================
// DETECT LOCATION
// =====================================

function detectLocation() {

    if (!navigator.geolocation) {

        alert(
            "Geolocation is not supported by your browser."
        );

        return;
    }


    // Update UI
    locationText.textContent = "Detecting...";

    locationMenu.classList.add("hidden");

    arrowIcon.classList.remove("rotate");


    // Get location
    navigator.geolocation.getCurrentPosition(

        function (position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            console.log(
                "Latitude:",
                latitude
            );

            console.log(
                "Longitude:",
                longitude
            );


            // Update UI
            locationText.textContent =
                "Location detected";


            alert(
                `Location detected!\n\n` +
                `Latitude: ${latitude}\n` +
                `Longitude: ${longitude}`
            );

        },


        function (error) {

            locationText.textContent =
                "No Location";


            switch (error.code) {

                case error.PERMISSION_DENIED:

                    alert(
                        "Location permission was denied."
                    );

                    break;


                case error.POSITION_UNAVAILABLE:

                    alert(
                        "Location information is unavailable."
                    );

                    break;


                case error.TIMEOUT:

                    alert(
                        "Location request timed out."
                    );

                    break;


                default:

                    alert(
                        "Unable to detect your location."
                    );
            }

        }

    );

}


// =====================================
// DETECT BUTTONS
// =====================================

detectLocationButton.addEventListener(
    "click",
    detectLocation
);


detectMenuButton.addEventListener(
    "click",
    detectLocation
);


// =====================================
// MANUAL LOCATION
// =====================================

manualLocationButton.addEventListener(
    "click",
    function () {

        locationText.textContent =
            "Enter Location";

        locationMenu.classList.add("hidden");

        arrowIcon.classList.remove("rotate");

    }
);


// =====================================
// CLOSE DROPDOWN OUTSIDE CLICK
// =====================================

document.addEventListener(
    "click",
    function (event) {

        if (
            !locationMenu.contains(event.target) &&
            !locationButton.contains(event.target)
        ) {

            locationMenu.classList.add("hidden");

            arrowIcon.classList.remove("rotate");
        }

    }
);
