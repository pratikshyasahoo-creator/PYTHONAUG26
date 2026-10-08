// ============================================
// MENU DATA
// ============================================

const menuData = {

    // ================= VEG =================

    veg: [

        {
            id: 101,
            name: "Margherita Pizza",
            description: "Classic cheese and tomato pizza",
            price: 299,
            image: '<img src="https://recipes.net/wp-content/uploads/2023/07/pizza-margherita-classic-italian-pizza-topped-with-fresh-tomatoes-mozzarella-cheese-and-basil_38a035581b3d5a197bd03ec8a67a2ca2.jpeg" alt="Pizza" class="w-6 h-6">'
        },

        {
            id: 102,
            name: "Farmhouse Pizza",
            description: "Onion, capsicum, tomato and cheese",
            price: 399,
            image: "🍕"
        },

        {
            id: 103,
            name: "Peppy Paneer",
            description: "Paneer with spicy toppings",
            price: 449,
            image: "🍕"
        },

        {
            id: 104,
            name: "Veg Extravaganza",
            description: "Loaded with fresh vegetables",
            price: 499,
            image: "🍕"
        },

        {
            id: 105,
            name: "Cheese Burst Pizza",
            description: "Extra cheese stuffed pizza",
            price: 449,
            image: "🍕"
        }

    ],


    // ================= NON VEG =================

    nonveg: [

        {
            id: 201,
            name: "Chicken Dominator",
            description: "Loaded with spicy chicken",
            price: 549,
            image: "🍗"
        },

        {
            id: 202,
            name: "Chicken Pepperoni",
            description: "Chicken pepperoni with cheese",
            price: 499,
            image: "🍕"
        },

        {
            id: 203,
            name: "Chicken Sausage Pizza",
            description: "Chicken sausage and cheese",
            price: 479,
            image: "🍕"
        },

        {
            id: 204,
            name: "Barbecue Chicken Pizza",
            description: "BBQ chicken with smoky sauce",
            price: 529,
            image: "🍗"
        },

        {
            id: 205,
            name: "Chicken Tikka Pizza",
            description: "Indian style chicken tikka",
            price: 499,
            image: "🍗"
        }

    ],


    // ================= DESSERTS =================

    desserts: [

        {
            id: 301,
            name: "Choco Lava Cake",
            description: "Hot chocolate lava cake",
            price: 119,
            image: "🍫"
        },

        {
            id: 302,
            name: "Brownie",
            description: "Soft chocolate brownie",
            price: 99,
            image: "🍰"
        },

        {
            id: 303,
            name: "Mousse Cake",
            description: "Creamy chocolate mousse",
            price: 149,
            image: "🍰"
        },

        {
            id: 304,
            name: "Chocolate Sundae",
            description: "Chocolate dessert with cream",
            price: 129,
            image: "🍨"
        }

    ],


    // ================= DRINKS =================

    drinks: [

        {
            id: 401,
            name: "Coca Cola",
            description: "Refreshing cold drink",
            price: 60,
            image: "🥤"
        },

        {
            id: 402,
            name: "Pepsi",
            description: "Chilled soft drink",
            price: 60,
            image: "🥤"
        },

        {
            id: 403,
            name: "Sprite",
            description: "Lemon flavoured soft drink",
            price: 60,
            image: "🥤"
        },

        {
            id: 404,
            name: "Fresh Lime",
            description: "Refreshing lime drink",
            price: 80,
            image: "🍋"
        }

    ],


    // ================= CHINESE =================

    chinese: [

        {
            id: 501,
            name: "Veg Hakka Noodles",
            description: "Stir fried noodles with vegetables",
            price: 179,
            image: "🍜"
        },

        {
            id: 502,
            name: "Chicken Noodles",
            description: "Noodles with spicy chicken",
            price: 229,
            image: "🍜"
        },

        {
            id: 503,
            name: "Veg Manchurian",
            description: "Crispy vegetable balls",
            price: 199,
            image: "🥢"
        },

        {
            id: 504,
            name: "Chicken Manchurian",
            description: "Spicy chicken Manchurian",
            price: 249,
            image: "🍗"
        },

        {
            id: 505,
            name: "Spring Rolls",
            description: "Crispy vegetable spring rolls",
            price: 159,
            image: "🥢"
        }

    ]

};


// ============================================
// SHOW DEFAULT CATEGORY
// ============================================

showCategory("veg");


// ============================================
// SHOW CATEGORY
// ============================================

function showCategory(category, button) {

    const items =
        menuData[category];


    const container =
        document.getElementById(
            "menuItems"
        );


    // Change active category

    document
        .querySelectorAll(".category-btn")
        .forEach(btn => {

            btn.classList.remove(
                "active"
            );

        });


    if (button) {

        button.classList.add(
            "active"
        );

    }


    // Display items

    container.innerHTML =
        items.map(item => `

            <div class="
                border
                rounded-2xl
                overflow-hidden
                bg-white
                shadow-sm
            ">


                <!-- FOOD IMAGE -->

                <div class="
                    h-40
                    bg-gray-100
                    flex
                    items-center
                    justify-center
                    text-7xl
                ">

                    ${item.image}

                </div>


                <!-- DETAILS -->

                <div class="p-4">


                    <h2 class="
                        font-bold
                        text-lg
                    ">

                        ${item.name}

                    </h2>


                    <p class="
                        text-gray-500
                        text-sm
                        mt-2
                    ">

                        ${item.description}

                    </p>


                    <div class="
                        flex
                        items-center
                        justify-between
                        mt-5
                    ">


                        <span class="
                            font-bold
                            text-lg
                        ">

                            ₹${item.price}

                        </span>


                        <button
                            onclick="
                                addToCart(${item.id})
                            "
                            class="
                                bg-[#e31837]
                                text-white
                                px-4
                                py-2
                                rounded-lg
                                font-bold
                            ">

                            ADD

                        </button>

                    </div>

                </div>

            </div>

        `).join("");

}


// ============================================
// ADD TO CART
// ============================================

function addToCart(id) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        );


    let item = null;


    // Find item

    for (
        const category in menuData
    ) {

        const found =
            menuData[category]
                .find(
                    product =>
                        product.id === id
                );


        if (found) {

            item = found;

            break;

        }

    }


    if (!item) {

        return;

    }


    const existing =
        cart.find(
            product =>
                product.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...item,

            quantity: 1

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    alert(
        item.name +
        " added to cart!"
    );

}


// ============================================
// VIEW CART
// ============================================

function viewCart() {

    const cart =
        JSON.parse(
            localStorage.getItem("cart")
        );


    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    let message =
        "YOUR CART\n\n";


    let total = 0;


    cart.forEach(item => {

        const amount =
            item.price *
            item.quantity;


        total += amount;


        message +=
            `${item.name} x ${item.quantity} = ₹${amount}\n`;

    });


    message +=
        `\nTotal = ₹${total}`;


    alert(message);

}


// ============================================
// BACK TO PROFILE
// ============================================

function goBack() {

    window.location.href =
        "index.html";

}