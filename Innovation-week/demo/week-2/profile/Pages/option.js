const params =
    new URLSearchParams(
        window.location.search
    );


const type =
    params.get("type");


const title =
    document.getElementById(
        "pageTitle"
    );


const content =
    document.getElementById(
        "content"
    );



switch (type) {

    case "deals":
        dealsPage();
        break;

    case "train":
        trainPage();
        break;

    case "rewards":
        rewardsPage();
        break;

    case "track":
        trackPage();
        break;

    case "history":
        historyPage();
        break;

    case "wallet":
        walletPage();
        break;

    case "bulk":
        bulkPage();
        break;

    case "nutrition":
        nutritionPage();
        break;

    case "terms":
        termsPage();
        break;

    case "contact":
        contactPage();
        break;

    default:
        dealsPage();

}


// ============================================
// DEALS
// ============================================

function dealsPage() {

    title.innerText =
        "Deals & Offers";


    content.innerHTML = `

        <div class="space-y-5">

            <div class="
                border
                rounded-2xl
                p-6
                bg-red-50
            ">

                <h2 class="
                    text-2xl
                    font-bold
                    text-red-600
                ">

                    50% OFF

                </h2>

                <p class="mt-2 text-gray-600">

                    Get 50% discount on selected pizzas.

                </p>

                <button
                    onclick="copyCoupon()"
                    class="
                        mt-5
                        bg-[#e31837]
                        text-white
                        px-5
                        py-3
                        rounded-lg
                    ">

                    Copy PIZZA50

                </button>

            </div>


            <div class="
                border
                rounded-xl
                p-5
            ">

                <h2 class="font-bold text-xl">

                    Buy 1 Get 1 Free

                </h2>

                <p class="text-gray-500 mt-2">

                    Order selected pizzas and
                    get another pizza free.

                </p>

            </div>

        </div>

    `;

}


function copyCoupon() {

    navigator.clipboard.writeText(
        "PIZZA50"
    );

    alert(
        "Coupon PIZZA50 copied!"
    );

}


// ============================================
// TRAIN
// ============================================

function trainPage() {

    title.innerText =
        "Deliver On Train";


    content.innerHTML = `

        <div class="space-y-4">

            <input
                id="train"
                placeholder="Train Number"
                class="w-full border p-3 rounded-lg">


            <input
                id="station"
                placeholder="Station Name"
                class="w-full border p-3 rounded-lg">


            <button
                onclick="checkTrain()"
                class="
                    w-full
                    bg-[#e31837]
                    text-white
                    p-3
                    rounded-lg
                ">

                Check Availability

            </button>

        </div>

    `;

}


function checkTrain() {

    const train =
        document.getElementById(
            "train"
        ).value;


    const station =
        document.getElementById(
            "station"
        ).value;


    if (!train || !station) {

        alert(
            "Please enter all details."
        );

        return;

    }


    alert(
        "Delivery is available at " +
        station +
        " for train " +
        train
    );

}


// ============================================
// REWARDS
// ============================================

function rewardsPage() {

    title.innerText =
        "Domino's Rewards";


    const points =
        localStorage.getItem(
            "rewards"
        );


    content.innerHTML = `

        <div class="
            text-center
            bg-blue-50
            rounded-2xl
            p-8
        ">

            <div class="text-6xl">
                🎁
            </div>

            <p class="text-gray-500 mt-5">

                Your Reward Points

            </p>

            <h2 class="
                text-5xl
                font-bold
                mt-2
            ">

                ${points}

            </h2>


            <button
                onclick="redeemReward()"
                class="
                    mt-6
                    bg-[#e31837]
                    text-white
                    px-5
                    py-3
                    rounded-lg
                ">

                Redeem 100 Points

            </button>

        </div>

    `;

}


function redeemReward() {

    let points =
        Number(
            localStorage.getItem(
                "rewards"
            )
        );


    if (points < 100) {

        alert(
            "Not enough reward points."
        );

        return;

    }


    points -= 100;


    localStorage.setItem(
        "rewards",
        points
    );


    alert(
        "100 reward points redeemed!"
    );


    rewardsPage();

}


// ============================================
// TRACK ORDER
// ============================================

function trackPage() {

    title.innerText =
        "Track Order";


    const orders =
        JSON.parse(
            localStorage.getItem(
                "orders"
            )
        );


    if (orders.length === 0) {

        content.innerHTML = `

            <div class="text-center py-16">

                <div class="text-6xl">
                    📦
                </div>

                <p class="text-gray-500 mt-4">

                    No active orders.

                </p>

                <p class="text-sm text-gray-400 mt-2">

                    Add an item from Menu to create
                    an order.

                </p>

            </div>

        `;

        return;

    }


    const order =
        orders[orders.length - 1];


    content.innerHTML = `

        <div class="
            border
            rounded-2xl
            p-6
        ">

            <p class="text-gray-500">
                Order ID
            </p>

            <h2 class="
                text-2xl
                font-bold
                mt-1
            ">

                ${order.id}

            </h2>


            <p class="mt-5 font-bold">
                ${order.name}
            </p>


            <p>
                ₹${order.price}
            </p>


            <div class="mt-8 space-y-5">

                <p>✅ Order Placed</p>

                <p>🍕 Preparing</p>

                <p>🛵 Out for Delivery</p>

                <p>🏠 Delivered</p>

            </div>

        </div>

    `;

}


// ============================================
// ORDER HISTORY
// ============================================

function historyPage() {

    title.innerText =
        "Order History";


    const orders =
        JSON.parse(
            localStorage.getItem(
                "orders"
            )
        );


    if (orders.length === 0) {

        content.innerHTML = `

            <div class="text-center py-16">

                <div class="text-6xl">
                    🍕
                </div>

                <p class="text-gray-500 mt-4">

                    No order history found.

                </p>

            </div>

        `;

        return;

    }


    content.innerHTML =
        orders.map(order => `

            <div class="
                border
                rounded-xl
                p-5
                mb-4
            ">

                <div class="
                    flex
                    justify-between
                ">

                    <div>

                        <h3 class="font-bold">

                            ${order.name}

                        </h3>

                        <p class="text-sm text-gray-500">

                            ${order.id}

                        </p>

                    </div>


                    <b>

                        ₹${order.price}

                    </b>

                </div>

            </div>

        `).join("");

}


// ============================================
// WALLET
// ============================================

function walletPage() {

    title.innerText =
        "Domino's Wallet";


    const balance =
        localStorage.getItem(
            "wallet"
        );


    content.innerHTML = `

        <div class="
            bg-gray-100
            rounded-2xl
            text-center
            p-8
        ">

            <div class="text-6xl">
                👛
            </div>


            <p class="text-gray-500 mt-5">

                Wallet Balance

            </p>


            <h2 class="
                text-5xl
                font-bold
                mt-2
            ">

                ₹${balance}

            </h2>


            <button
                onclick="addMoney()"
                class="
                    mt-6
                    bg-[#e31837]
                    text-white
                    px-5
                    py-3
                    rounded-lg
                ">

                Add ₹100

            </button>

        </div>

    `;

}


function addMoney() {

    let balance =
        Number(
            localStorage.getItem(
                "wallet"
            )
        );


    balance += 100;


    localStorage.setItem(
        "wallet",
        balance
    );


    alert(
        "₹100 added to wallet!"
    );


    walletPage();

}


// ============================================
// BULK ORDER
// ============================================

function bulkPage() {

    title.innerText =
        "Bulk Order";


    content.innerHTML = `

        <div class="space-y-4">

            <input
                id="bulkName"
                placeholder="Name"
                class="w-full border p-3 rounded-lg">


            <input
                id="bulkQuantity"
                type="number"
                placeholder="Number of Pizzas"
                class="w-full border p-3 rounded-lg">


            <input
                id="bulkPhone"
                placeholder="Phone Number"
                class="w-full border p-3 rounded-lg">


            <button
                onclick="submitBulk()"
                class="
                    w-full
                    bg-[#e31837]
                    text-white
                    p-3
                    rounded-lg
                ">

                Submit

            </button>

        </div>

    `;

}


function submitBulk() {

    const name =
        document.getElementById(
            "bulkName"
        ).value;


    const quantity =
        document.getElementById(
            "bulkQuantity"
        ).value;


    const phone =
        document.getElementById(
            "bulkPhone"
        ).value;


    if (!name || !quantity || !phone) {

        alert(
            "Please fill all fields."
        );

        return;

    }


    localStorage.setItem(
        "bulkOrder",
        JSON.stringify({

            name,
            quantity,
            phone

        })
    );


    alert(
        "Bulk order request submitted!"
    );

}


// ============================================
// NUTRITION
// ============================================

function nutritionPage() {

    title.innerText =
        "Nutritional Information";


    content.innerHTML = `

        <div class="space-y-4">

            <div class="border rounded-xl p-5">

                <h2 class="font-bold">
                    Margherita Pizza
                </h2>

                <p class="text-gray-500">
                    Approx. 250 kcal
                </p>

            </div>


            <div class="border rounded-xl p-5">

                <h2 class="font-bold">
                    Farmhouse Pizza
                </h2>

                <p class="text-gray-500">
                    Approx. 280 kcal
                </p>

            </div>


            <div class="border rounded-xl p-5">

                <h2 class="font-bold">
                    Chicken Dominator
                </h2>

                <p class="text-gray-500">
                    Approx. 320 kcal
                </p>

            </div>


            <div class="border rounded-xl p-5">

                <h2 class="font-bold">
                    Choco Lava Cake
                </h2>

                <p class="text-gray-500">
                    Approx. 170 kcal
                </p>

            </div>

        </div>

    `;

}


// ============================================
// TERMS
// ============================================

function termsPage() {

    title.innerText =
        "Terms & Conditions";


    content.innerHTML = `

        <div class="space-y-5 text-gray-600">

            <p>
                1. Orders are subject to availability.
            </p>

            <p>
                2. Offers may have specific conditions.
            </p>

            <p>
                3. Delivery times may vary.
            </p>

            <p>
                4. Prices may change without notice.
            </p>

            <p>
                5. Cancellation policies apply to orders.
            </p>

        </div>

    `;

}


// ============================================
// CONTACT
// ============================================

function contactPage() {

    title.innerText =
        "Contact Us";


    content.innerHTML = `

        <div class="space-y-5">

            <div class="
                border
                rounded-xl
                p-5
            ">

                <h2 class="font-bold">
                    Customer Care
                </h2>

                <p class="text-gray-500">
                    1800-208-1234
                </p>

            </div>


            <textarea
                id="message"
                placeholder="Write your message"
                class="
                    w-full
                    border
                    rounded-xl
                    p-4
                    h-32
                "></textarea>


            <button
                onclick="sendMessage()"
                class="
                    w-full
                    bg-[#e31837]
                    text-white
                    p-3
                    rounded-lg
                ">

                Send Message

            </button>

        </div>

    `;

}


function sendMessage() {

    const message =
        document.getElementById(
            "message"
        ).value.trim();


    if (!message) {

        alert(
            "Please enter your message."
        );

        return;

    }


    localStorage.setItem(
        "supportMessage",
        message
    );


    alert(
        "Message sent successfully!"
    );

}


// ============================================
// BACK
// ============================================

function goBack() {

    window.location.href =
        "index.html";

}