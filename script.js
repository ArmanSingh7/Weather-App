function bookService(service) {
    alert(`You have booked a ${service} service! We will contact you soon.`);
}

function comparePrices() {
    let product = document.getElementById("productSearch").value;
    if (product.trim() === "") {
        alert("Please enter a product name.");
        return;
    }
    document.getElementById("priceResults").innerHTML = 
        `<p>Fetching prices for "${product}" from Amazon, Flipkart, Walmart...</p>`;
}

function orderGroceries() {
    alert("Your grocery order has been placed!");
}
