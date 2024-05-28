const path = require('path');
const sys = require('./module.js');

const express = require('express');
const app = express();										// Used for routing the different pages

const bodyParser = require("body-parser") 
app.use(bodyParser.urlencoded({ extended:true }));			// Important for POST req

const logger = require('morgan');							// Logs the different pages accessed
app.use(logger('dev'));										// Set up the Logger

app.set('views', path.join(__dirname, 'EJS'))
app.set('view engine', 'ejs')								// Set up the EJS files

app.use(express.static(path.join(__dirname, "Static")))	// Static files

app.get('/', (req, res) => {								// Main Page
	res.sendFile(__dirname + '/Static/HTML/index.html');
});

app.get('/flavours/', (req, res) => {							// Main Flavour Page
	let flavours = sys.loadJSON('/Data/flavours.json').Books;
	res.render('items', {'items': flavours});
});

// app.get('/books/new/', (req, res) => {						// Add to the JSON file
// 	res.sendFile(__dirname + "/HTML/new_book.html");
// });

app.get('/flavours/:name', (req, res) => {						// Individual Flavour Page
	let flavours = sys.loadJSON('/Data/flavours.json')
	for (let i = 0; i < flavours.length; i++) {
		if (flavours[i].name == req.params.name){
			f = flavours[i]
			break
		}
	}

	console.log(f);
	res.render('item', {'item': f});
});

app.get('*', function(req, res){							// 404 Page for GET request
	res.send('Cannot POST to this page </br>Go back to the <a href="localhost:9000">main page</a> ?')
	// res.redirect('/');
});

app.post('*', function(req, res){							// 404 Page for POST request
	res.send('Cannot POST to this page </br>Go back to the <a href="localhost:9000">main page</a> ?')
	// res.redirect('/');
});

app.listen(9000);											// Starting the Server
// http://localhost:9000
