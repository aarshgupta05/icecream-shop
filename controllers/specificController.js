const sys = require('./module.js');

module.exports.type_get = (req, res) => {
	let type = req.params.type
	type = type.charAt(0).toUpperCase() + type.slice(1);

	let data = sys.loadJSON('data')[type];

	if (data == null) {
		console.log('LOL Error, not found');
		return res.send('404! Page not Found<br>Go back to <a href="http://localhost:9000">main page</a>?');
	}
	return res.render('items', {'items': data, 'type': type});
}


module.exports.id_get = (req, res) => {
	let type = req.params.type
	type = type.charAt(0).toUpperCase() + type.slice(1);

	let f = sys.loadJSON('data')[type][req.params.id];

	if (f == null){
		console.log('LOL Error, not found');
		return res.send('404! Page not Found<br>Go back to <a href="http://localhost:9000">main page</a>?');
	}
	
	return res.render('item', {'item': f});

}

module.exports._404_get = (req, res) => {
	return res.status(404).send('Cannot POST to this page </br>Go back to the <a href="../">main page</a> ?');
}

module.exports._404_post = (req, res) => {
	return res.status(404).send('Cannot POST to this page </br>Go back to the <a href="../">main page</a> ?');
}
