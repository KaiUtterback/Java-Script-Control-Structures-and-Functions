// Step 1: Check if the user is logged in
let isLoggedIn = true; // This should be dynamically set based on your authentication logic

if (!isLoggedIn) {
    console.log("Please log in to add items to your cart.");
} else {
    console.log("Welcome! You can now add items to your cart.");
}

// Step 2: Display products and add to cart functionality
const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 699 },
    { id: 3, name: "Tablet", price: 499 }
];

let cart = [];

// Function to display products
function displayProducts() {
    console.log("Available Products:");
    for (let i = 0; i < products.length; i++) {
        console.log(`${products[i].id}. ${products[i].name} - $${products[i].price}`);
    }
}

// Function to add a product to the cart
function addToCart(productId) {
    if (!isLoggedIn) {
        console.log("You must be logged in to add items to the cart.");
        return;
    }

    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        console.log(`${product.name} has been added to your cart.`);
    } else {
        console.log("Product not found.");
    }
}

// Display products to the user
displayProducts();

// Example of adding products to the cart
addToCart(1); // Add Laptop to the cart
addToCart(2); // Add Smartphone to the cart

// Step 3: Calculate and display total cost
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total;
}

// Display total cost
console.log(`Total cost of items in the cart: $${calculateTotal()}`);
