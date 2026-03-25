// Simple Cart Functionality
let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Product added to cart!");
}

// Navbar Scroll Effect (Optional)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    }
});


// Search Function
function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".cat-card");

    products.forEach(product => {
        let title = product.querySelector("h3").innerText.toLowerCase();

        if (title.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

