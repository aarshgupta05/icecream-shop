const User = require('../models/Users')
const jwt = require('jsonwebtoken')


const handleErrors = (err) => {
	console.log(err.message, err.code);
	let errors = {'email': '', 'password': ''}

	if (err.message === 'Incorrect Email') {
		errors.email = 'That Email is not Registered'
		return errors
	}

	if (err.message === 'Incorrect Password') {
		errors.password = 'That Password is Incorrect'
		return errors
	}

	// Duplicate Error Code
	if (err.code === 11000) {
		errors.email = 'That Email is already Registered'
		return errors
	}

	// Validate Errors
	if (err.message.includes('user validation failed')) {
		Object.values(err.errors).forEach(({properties}) => {
			errors[properties.path] = properties.message
		});
	}

	return errors
}

const maxAge = 3 * 24 * 60 * 60
const createToken = (id) => {
	return jwt.sign({ id }, 'net ninja secret', {
		expiresIn: maxAge,
	});
}

module.exports.signup_get = (req, res) => {
	res.render('auth/signup');
}

module.exports.login_get = (req, res) => {
	res.render('auth/login');
}

module.exports.logout_get = (req, res) => {
	res.cookie('jwt', '', { maxAge: 1 })
	res.redirect('/')
}

module.exports.signup_post = async (req, res) => {
	const { email, password } = req.body

	try{
		const user = await User.create({ email, password });
		const token = createToken(user._id);
		res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
		res.status(201).json({ user: user._id });
	}
	catch (err) {
		const errors = handleErrors(err)
		res.status(400).json({ errors })
	}
}

module.exports.login_post = async (req, res) => {
	const { email, password } = req.body

	try {
		const user = await User.login(email, password);
		const token = createToken(user._id);
		res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
		res.status(200).json( {user: user._id} )
	} catch (err) {
		const errors = handleErrors(err)
		res.status(400).json({ errors });
	}
}

