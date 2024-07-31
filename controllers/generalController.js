const path = require('path');
const sys = require('../module');

module.exports.main = (req, res) => {
	data = sys.loadJSON('data')
	return res.render('index', {'data': data});
}

module.exports.about = (req, res) => {
	return res.sendFile(sys.join('about'));
	return res.sendFile(path.join(__dirname + '/../Static/HTML/about.html'));
}

module.exports.promotions = (req, res) => {
	return res.sendFile(sys.join('promotions'));
	return res.sendFile(path.join(__dirname + '/../Static/HTML/promotions.html'));
}

module.exports.cart = (req, res) => {
	return res.render('cart');
}

module.exports.checkout_get = (req, res) => {
	res.redirect('../cart')
}

module.exports.checkout_post = (req, res) => {
	orders = sys.loadJSON('orders');

	order = req.body
	order.Status = false
	order.Date = sys.date()

	sys.saveJSON('orders', orders.concat(order))

	return res.sendFile(sys.join('checkout'));
	return res.sendFile(path.join(__dirname + '/../Static/HTML/checkout.html'));
}

module.exports.contact_get = (req, res) => {
	return res.sendFile(sys.join('contact'));
	return res.sendFile(path.join(__dirname + '/../Static/HTML/checkout.html'));
}

module.exports.contact_post = (req, res) => {
	c = req.body
	console.log(c);
	data = sys.loadJSON('contact');
	if (c.type == 'feedback') {
		c.date = sys.date()
		delete c.type;
		data.Contacts.concat(c)
	} else {
		delete c.type;
		data.Newsletter.push(c.email)
		console.log(data);
	}


	contacts = sys.loadJSON('contact')
	sys.saveJSON('contact', data)

	return res.render('custom', {
		'title': 'Contact Us',
		'heading': 'Thank you messaging us!',
		'para': 'We have recieved you message and we will be getting back to you as soon as possible<br>PLease hold tight!',
		'alert': 'Your query has been submitted and we will be contacting you shortly',
		'redirect': '../',
	})
}

