/* =========================================================
   DOMINO'S CLONE - JAVASCRIPT
========================================================= */


/* =========================================================
   PRODUCTS
========================================================= */

const products = [

    {
        id: 1,
        name: "Margherita Pizza",
        category: "Veg Pizza",
        description:
            "Classic delight with 100% mozzarella cheese",
        price: 199,
        image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 2,
        name: "Farmhouse Pizza",
        category: "Veg Pizza",
        description:
            "Loaded with capsicum, onion, tomato and mushrooms",
        price: 349,
        image:
            "https://images.unsplash.com/photo-1593560708920-61dd98c8c6e7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 3,
        name: "Peppy Paneer",
        category: "Veg Pizza",
        description:
            "Spiced paneer, capsicum and red paprika",
        price: 379,
        image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 4,
        name: "Veg Extravaganza",
        category: "Veg Pizza",
        description:
            "A delicious combination of vegetables and cheese",
        price: 399,
        image:
            "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 5,
        name: "Cheese Burst Pizza",
        category: "Cheese Burst Pizza",
        description:
            "Extra cheese stuffed into every bite",
        price: 449,
        image:
            "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 6,
        name: "Double Cheese Margherita",
        category: "Cheese Mania",
        description:
            "Double the cheese, double the fun",
        price: 299,
        image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 7,
        name: "Garlic Bread",
        category: "Garlic Bread & Dips",
        description:
            "Freshly baked garlic bread",
        price: 149,
        image:
            "https://images.unsplash.com/photo-1619535860434-cf9b902a6f92?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 8,
        name: "Choco Lava Cake",
        category: "Desserts",
        description:
            "Warm chocolate cake with molten chocolate centre",
        price: 119,
        image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 9,
        name: "Chicken Dominator",
        category: "Non-Veg Pizza",
        description:
            "Loaded with delicious chicken toppings",
        price: 499,
        image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 10,
        name: "Cheese & Corn",
        category: "Veg Pizza",
        description:
            "Sweet corn with loads of mozzarella",
        price: 249,
        image:
            "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80"
    }

];


/* =========================================================
   CATEGORIES
========================================================= */

const categories = [

    {
        name: "Big Big Pizza",
        emoji: "🍕",
        color: "#fff1b8"
    },

    {
        name: "Veg Pizza",
        emoji: "🥦",
        color: "#d9f7df"
    },

    {
        name: "Pizza Mania",
        emoji: "🍕",
        color: "#ffe0df"
    },

    {
        name: "Garlic Bread & Dips",
        emoji: "🥖",
        color: "#fff0bd"
    },

    {
        name: "Crazy Deals",
        emoji: "🔥",
        color: "#ffe2c5"
    },

    {
        name: "Cheese Volcano",
        emoji: "🧀",
        color: "#fff6a8"
    },

    {
        name: "Cheese Lava",
        emoji: "🌋",
        color: "#ffd9bb"
    },

    {
        name: "Desserts",
        emoji: "🍩",
        color: "#ffdced"
    },

    {
        name: "Cheese Burst Pizza",
        emoji: "🍕",
        color: "#fff1b8"
    },

    {
        name: "Tacos & Parcels",
        emoji: "🌮",
        color: "#ffe2c5"
    },

    {
        name: "Recommended",
        emoji: "⭐",
        color: "#dbeafe"
    }

];


/* =========================================================
   APPLICATION STATE
========================================================= */

let cart =
    JSON.parse(
        localStorage.getItem("dominosCart")
    ) || [];


let locationData =
    localStorage.getItem(
        "dominosLocation"
    ) || "";


let orderMode =
    localStorage.getItem(
        "dominosOrderMode"
    ) || "Delivery";


let couponApplied =
    localStorage.getItem(
        "dominosCoupon"
    ) === "true";


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initialize();

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

function initialize() {

    renderCategories();

    renderProducts();

    updateLocationUI();

    updateCart();

    setOrderMode(orderMode);

}


/* =========================================================
   CATEGORIES
========================================================= */

function renderCategories() {

    const container =
        document.getElementById(
            "categoryContainer"
        );


    container.innerHTML = "";


    categories.forEach(category => {

        const element =
            document.createElement("div");


        element.className =
            "category-item";


        element.innerHTML = `

            <div
                class="category-image"
                style="background:${category.color}"
            >
                ${category.emoji}
            </div>

            <p class="category-name">
                ${category.name}
            </p>

        `;


        element.addEventListener(
            "click",
            () => {

                document.getElementById(
                    "searchInput"
                ).value = category.name;

                searchProducts();

            }
        );


        container.appendChild(element);

    });

}


/* =========================================================
   PRODUCTS
========================================================= */

function renderProducts(list = products) {

    const container =
        document.getElementById(
            "productContainer"
        );


    container.innerHTML = "";


    document.getElementById(
        "productResult"
    ).textContent =
        `${list.length} items`;


    if (list.length === 0) {

        container.innerHTML = `

            <div class="col-span-full text-center py-16">

                <div class="text-6xl">
                    🍕
                </div>

                <h3 class="text-xl font-black mt-4">
                    No products found
                </h3>

                <p class="text-gray-500 mt-2">
                    Try searching for another pizza.
                </p>

            </div>

        `;

        return;

    }


    list.forEach(product => {

        const card =
            document.createElement("div");


        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image-container">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                >

                <span class="product-category">
                    ${product.category}
                </span>

            </div>


            <div class="product-content">

                <h3 class="product-name">
                    ${product.name}
                </h3>


                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-bottom">

                    <span class="product-price">
                        ₹${product.price}
                    </span>


                    <button
                        class="add-button"
                        onclick="addToCart(${product.id})"
                    >
                        ADD
                    </button>

                </div>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =========================================================
   SEARCH
========================================================= */

function searchProducts() {

    const input =
        document.getElementById(
            "searchInput"
        );


    const query =
        input.value
            .toLowerCase()
            .trim();


    if (!query) {

        renderProducts(products);

        return;

    }


    const filtered =
        products.filter(product => {

            return (

                product.name
                    .toLowerCase()
                    .includes(query)

                ||

                product.category
                    .toLowerCase()
                    .includes(query)

                ||

                product.description
                    .toLowerCase()
                    .includes(query)

            );

        });


    renderProducts(filtered);

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;


    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            category: product.category,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    showToast(
        `${product.name} added to cart`
    );

}


/* =========================================================
   INCREASE QUANTITY
========================================================= */

function increaseQuantity(id) {

    const item =
        cart.find(
            product => product.id === id
        );


    if (!item) return;


    item.quantity++;


    saveCart();

    updateCart();

}


/* =========================================================
   DECREASE QUANTITY
========================================================= */

function decreaseQuantity(id) {

    const item =
        cart.find(
            product => product.id === id
        );


    if (!item) return;


    item.quantity--;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product => product.id !== id
            );

    }


    saveCart();

    updateCart();

}


/* =========================================================
   SAVE CART
========================================================= */

function saveCart() {

    localStorage.setItem(
        "dominosCart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {

    const container =
        document.getElementById(
            "cartItems"
        );


    const cartCount =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    document.getElementById(
        "cartCount"
    ).textContent =
        cartCount;


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="text-center py-20">

                <div class="text-6xl">
                    🛒
                </div>

                <h3 class="text-xl font-black mt-5">
                    Your cart is empty
                </h3>

                <p class="text-gray-500 mt-2">
                    Add some delicious pizza!
                </p>

            </div>

        `;

        updateTotals();

        return;

    }


    container.innerHTML = "";


    cart.forEach(item => {

        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <img
                src="${item.image}"
                class="cart-item-image"
                alt="${item.name}"
            >


            <div class="cart-item-info">

                <div class="cart-item-name">
                    ${item.name}
                </div>


                <div class="cart-item-price">
                    ₹${item.price}
                </div>


                <div class="quantity-control">

                    <button
                        class="quantity-button"
                        onclick="decreaseQuantity(${item.id})"
                    >
                        −
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        class="quantity-button plus"
                        onclick="increaseQuantity(${item.id})"
                    >
                        +
                    </button>

                </div>

            </div>


            <div class="font-black">

                ₹${item.price * item.quantity}

            </div>

        `;


        container.appendChild(cartItem);

    });


    updateTotals();

}


/* =========================================================
   CALCULATE TOTAL
========================================================= */

function updateTotals() {

    const subtotal =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price * item.quantity,
            0
        );


    let discount = 0;


    if (
        couponApplied &&
        subtotal >= 199
    ) {

        discount = Math.min(
            30,
            subtotal
        );

    }


    const total =
        subtotal - discount;


    document.getElementById(
        "subtotal"
    ).textContent =
        `₹${subtotal}`;


    document.getElementById(
        "discount"
    ).textContent =
        `-₹${discount}`;


    document.getElementById(
        "total"
    ).textContent =
        `₹${total}`;

}


/* =========================================================
   CART OPEN
========================================================= */

function openCart() {

    document
        .getElementById("cartDrawer")
        .classList.add("open");


    document
        .getElementById("cartOverlay")
        .classList.remove("hidden");


    updateCart();

}


/* =========================================================
   CART CLOSE
========================================================= */

function closeCart() {

    document
        .getElementById("cartDrawer")
        .classList.remove("open");


    document
        .getElementById("cartOverlay")
        .classList.add("hidden");

}


/* =========================================================
   LOCATION MODAL
========================================================= */

function openLocationModal() {

    document
        .getElementById("locationModal")
        .classList.remove("hidden");

}


function closeLocationModal() {

    document
        .getElementById("locationModal")
        .classList.add("hidden");

}


/* =========================================================
   SAVE LOCATION
========================================================= */

function saveLocation() {

    const input =
        document.getElementById(
            "locationInput"
        );


    const location =
        input.value.trim();


    if (!location) {

        showToast(
            "Please enter a location"
        );

        return;

    }


    locationData = location;


    localStorage.setItem(
        "dominosLocation",
        locationData
    );


    updateLocationUI();

    closeLocationModal();


    showToast(
        "Location saved successfully!"
    );

}


/* =========================================================
   LOCATION UI
========================================================= */

function updateLocationUI() {

    const header =
        document.getElementById(
            "headerLocation"
        );


    const mobile =
        document.getElementById(
            "mobileLocation"
        );


    if (locationData) {

        header.textContent =
            locationData;

        mobile.textContent =
            locationData;

    } else {

        header.textContent =
            "No Location";

        mobile.textContent =
            "No Location";

    }

}


/* =========================================================
   DETECT LOCATION
========================================================= */

function detectLocation() {

    if (!navigator.geolocation) {

        showToast(
            "Geolocation is not supported"
        );

        return;

    }


    showToast(
        "Detecting location..."
    );


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude
                    .toFixed(4);


            const longitude =
                position.coords.longitude
                    .toFixed(4);


            locationData =
                `Lat ${latitude}, Lng ${longitude}`;


            localStorage.setItem(
                "dominosLocation",
                locationData
            );


            updateLocationUI();

            closeLocationModal();


            showToast(
                "Location detected!"
            );

        },


        function() {

            showToast(
                "Unable to detect location. Enter it manually."
            );

        }

    );

}


/* =========================================================
   ORDER MODE
========================================================= */

function setOrderMode(mode) {

    orderMode = mode;


    localStorage.setItem(
        "dominosOrderMode",
        mode
    );


    const buttons = [

        document.getElementById(
            "deliveryBtn"
        ),

        document.getElementById(
            "takeawayBtn"
        ),

        document.getElementById(
            "dineinBtn"
        )

    ];


    buttons.forEach(button => {

        button.classList.remove(
            "active"
        );

    });


    if (mode === "Delivery") {

        document
            .getElementById(
                "deliveryBtn"
            )
            .classList.add("active");

    }


    if (mode === "Takeaway") {

        document
            .getElementById(
                "takeawayBtn"
            )
            .classList.add("active");

    }


    if (mode === "Dine-in") {

        document
            .getElementById(
                "dineinBtn"
            )
            .classList.add("active");

    }

}


/* =========================================================
   COUPON
========================================================= */

function applyCoupon() {

    couponApplied = true;


    localStorage.setItem(
        "dominosCoupon",
        "true"
    );


    showToast(
        "₹30 OFF coupon applied!"
    );


    updateTotals();

}


/* =========================================================
   CHECKOUT
========================================================= */

function checkout() {

    if (cart.length === 0) {

        showToast(
            "Your cart is empty!"
        );

        return;

    }


    if (!locationData) {

        closeCart();

        openLocationModal();


        showToast(
            "Please select your location first"
        );


        return;

    }


    const subtotal =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price * item.quantity,
            0
        );


    const discount =
        couponApplied && subtotal >= 199
            ? Math.min(30, subtotal)
            : 0;


    const total =
        subtotal - discount;


    const order = {

        orderId:
            "DOM" +
            Date.now(),

        location:
            locationData,

        orderMode:
            orderMode,

        items:
            cart,

        subtotal:
            subtotal,

        discount:
            discount,

        total:
            total,

        createdAt:
            new Date().toISOString()

    };


    /* Save last order */

    localStorage.setItem(
        "lastDominosOrder",
        JSON.stringify(order)
    );


    /* Save order history */

    let orders =
        JSON.parse(
            localStorage.getItem(
                "dominosOrders"
            )
        ) || [];


    orders.push(order);


    localStorage.setItem(
        "dominosOrders",
        JSON.stringify(orders)
    );


    showToast(
        `Order ${order.orderId} placed successfully!`
    );


    cart = [];


    saveCart();

    updateCart();

    closeCart();

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.remove(
        "hidden"
    );


    setTimeout(() => {

        toast.classList.add(
            "hidden"
        );

    }, 3000);

}
