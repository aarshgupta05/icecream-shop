const path = require('path');
const sys = require('./module.js');

// Used for routing the different pages
const express = require('express');
const app = express();

// Important for POST req
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:true }));

// Logs the different pages accessed
const logger = require('morgan');
app.use(logger('dev'));

// Set up the EJS files
app.set('views', path.join(__dirname, 'EJS'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, "Static")));

// Main Page
app.get('/', (req, res) => {
	return res.sendFile(__dirname + '/Static/HTML/index.html');
});

// About Page
app.get('/about/', (req, res) => {
	return res.sendFile(__dirname + '/Static/HTML/about.html');
});

// Promotions Page
app.get('/promotions/', (req, res) => {
	return res.sendFile(__dirname + '/Static/HTML/promotions.html');
});

// Cart Page
app.get('/cart/', (req, res) => {
	return res.render('cart');
});

app.get('/checkout', (req, res) => {
	res.redirect('../cart')
});

// Checkout Page
app.post('/checkout/', (req, res) => {
	orders = sys.loadJSON('orders').Orders;

	let date = sys.date()
	order = req.body
	order['Status'] = false
	order['Date'] = date

	orders.push(order)
	sys.saveJSON('orders', {Orders: orders})

	return res.sendFile(__dirname + '/Static/HTML/checkout.html');
});

// Main Flavour/Toppings/Specials/etc Page
app.get('/:type/', (req, res) => {
	let type = req.params.type
	type = type.charAt(0).toUpperCase() + type.slice(1);

	let data = sys.loadJSON('data')[type];

	if (data == null) {
		console.log('Error, not found');
		return res.send('404! Page not Found<br>Go back to <a href="http://localhost:9000">main page</a>?');
	}
	return res.render('items', {'items': data, 'type': type});
});

// All Products Page
app.get('/:type/:id', (req, res) => {
	let type = req.params.type
	type = type.charAt(0).toUpperCase() + type.slice(1);

	let f = sys.loadJSON('data')[type][req.params.id];

	if (f == null){
		console.log('Error, not found');
		return res.send('404! Page not Found<br>Go back to <a href="http://localhost:9000">main page</a>?');
	}
	
	return res.render('item', {'item': f});
});


// 404 Page for GET request
app.get('*', function(req, res){
	return res.send('Cannot GET to this page </br>Go back to the <a href="../">main page</a> ?');
	// return res.redirect('/');
});

// 404 Page for POST request
app.post('*', function(req, res){
	return res.send('Cannot POST to this page </br>Go back to the <a href="../">main page</a> ?');
	// return res.redirect('/');
});

// Starts the Server
app.listen(9000, () => {
    console.log(`Server is running on port http://localhost:9000`);
});
