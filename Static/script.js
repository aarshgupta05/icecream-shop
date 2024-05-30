
// JavaScript to Add Item to Cart
function addToCart(special) {
	if (typeof(Storage) !== "undefined") {
		let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
		cartItems.push(special);
		localStorage.setItem("cart", JSON.stringify(cartItems));
		alert(special + " has been added to your cart!");
	} else {
		alert("Sorry, your browser does not support Web Storage. Please upgrade your browser to use this feature.");
	}
}
