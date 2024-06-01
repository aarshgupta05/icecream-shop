const path = require('path');
const sys = require('./module.js');

const express = require('express');
const app = express();										// Used for routing the different pages

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:true }));			// Important for POST req

const logger = require('morgan');							// Logs the different pages accessed
app.use(logger('dev'));										// Set up the Logger

app.set('views', path.join(__dirname, 'EJS'));
app.set('view engine', 'ejs');								// Set up the EJS files

app.use(express.static(path.join(__dirname, "Static")));	// Static files

app.get('/', (req, res) => {								// Main Page
	return res.sendFile(__dirname + '/Static/HTML/index.html');
});

app.get('/about/', (req, res) => {							// About Page
	return res.sendFile(__dirname + '/Static/HTML/about.html');
});

app.get('/promotions/', (req, res) => {							// Promotions Page
	return res.sendFile(__dirname + '/Static/HTML/promotions.html');
});

// app.get('/cart/', (req, res) => {							// Cart Page
// 	return res.render('cart');
// });

app.get('/:type/', (req, res) => {							// Main Flavour/Toppings/Specials/etc Page
	let type = req.params.type
	type = type.charAt(0).toUpperCase() + type.slice(1);

	let data = sys.loadJSON('/JSON/data.json')[type];

	if (data == null) {
		console.log('Error, not found');
		return res.sendFile(__dirname + '/Static/HTML/404.html');
	}
	return res.render('items', {'items': data, 'type': type});
});

// app.get('/flavours/', (req, res) => {							// Main Flavour Page
// 	let flavours = sys.loadJSON('/JSON/data.json').Flavours;
// 	return res.render('items', {'items': flavours, 'type': 'Flavours'});
// });

// app.get('/toppings/', (req, res) => {							// Main Toppings Page
// 	let toppings = sys.loadJSON('/JSON/data.json').Toppings;
// 	return res.render('items', {'items': toppings, 'type': 'Toppings'});
// });

// app.get('/specials/', (req, res) => {							// Main Specials Page
// 	let flavours = sys.loadJSON('/JSON/data.json').Specials;
// 	return res.render('items', {'items': specials, 'type': 'Specials'});
// });

app.get('/:type/:id', (req, res) => {						// All Products Page
	let type = req.params.type
	type = type.charAt(0).toUpperCase() + type.slice(1);

	let f = sys.loadJSON('/JSON/data.json')[type][req.params.id];

	if (f == null){
		console.log('Error, not found');
		return res.sendFile(__dirname + '/Static/HTML/404.html');
	}
	
	return res.render('item', {'item': f});
});

// app.get('/flavours/:id', (req, res) => {						// Individual Flavour Page
// 	let f = sys.loadJSON('/JSON/data.json').Flavours[req.params.id];

// 	if (f == null){
// 		console.log('Error, not found');
// 		return res.send('404! Page not Found<br>Go back to <a href="http://localhost:9000">main page</a>?');
// 	}
	
// 	return res.render('item', {'item': f});
// });


app.get('*', function(req, res){							// 404 Page for GET request
	return res.sendFile(__dirname + '/Static/HTML/404.html');
	return res.send('Cannot GET to this page </br>Go back to the <a href="../">main page</a> ?');
	// return res.redirect('/');
});

app.post('*', function(req, res){							// 404 Page for POST request
	return res.sendFile(__dirname + '/Static/HTML/404.html');
	return res.send('Cannot POST to this page </br>Go back to the <a href="../">main page</a> ?');
	// return res.redirect('/');
});

app.listen(9000);											// Starting the Server
// http://localhost:9000
