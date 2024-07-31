const { requireAuth, checkUser } = require('./middleware/authMiddleware')

// Used for routing the different pages
const express = require('express');
const app = express();


// Important for POST req
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:true }));


// Logs the different pages accessed
const logger = require('morgan');
app.use(logger('dev'));


// For Cookies
const cookieParser = require('cookie-parser')
app.use(cookieParser())


// Set up the EJS files
app.set('views', 'EJS');
app.set('view engine', 'ejs');


// Static files
app.use(express.static("static"));

// handles JSON
app.use(express.json())


app.get('*', checkUser);
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));


// Shifted Mapping to their own seperate folders to make it neater
const authRoutes = require('./routes/authRoutes');
const generalRoutes = require('./routes/generalRoutes');
const specificRoutes = require('./routes/specificRoutes');

app.use(authRoutes);
app.use(generalRoutes);
app.use(specificRoutes);


// Mongoose Connection and Start Server
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://aadil:aadil123@cluster0.p0eqixb.mongodb.net/node-auth';
mongoose.connect(dbURI)
	.then((result) => app.listen(
		9000, 
		() => console.log(`Server is running on port http://localhost:9000`)
	))
	.catch((err) => console.log(err));


// // Starts the Server
// app.listen(9000, () => {
//     console.log(`Server is running on port http://localhost:9000`);
// });
