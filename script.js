let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cart");
    let totalElement = document.getElementById("total");

    cartList.innerHTML = "";
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        let li = document.createElement("li");
        li.innerText = cart[i].name + " - ₹" + cart[i].price;
        cartList.appendChild(li);

        total += cart[i].price; 
    }

    totalElement.innerText = "Total: ₹" + total;
}

