const User = require('../modules/Users')

module.exports.signup_get = (req, res) => {
	res.render('auth/signup');
}


module.exports.login_get = (req, res) => {
	res.render('auth/login');
}


module.exports.signup_post = async (req, res) => {
	const { email, password } = req.body

	try{
		const user = await User.create({ email, password });
		res.status(201).json(user);
	}
	catch (err) {
		console.log(err)
		res.status(400).send('error, user not created')
	}
	console.log(email, password);
	res.send('new signup');
}


module.exports.login_post = async (req, res) => {
	const { email, password } = req.body

	console.log(email, password);
	res.send('user login');
}


