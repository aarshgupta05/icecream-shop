const fs = require('fs');

module.exports.loadJSON = function loadJSON(filePath) {
	filePath = __dirname + filePath;
	return JSON.parse (
		fs.existsSync(filePath)
			? fs.readFileSync(filePath).toString()
			: 'null'
	);
}

module.exports.saveJSON = function saveJSON(filePath, data) {
	filePath = __dirname + "/.." + filePath;
	fs.writeFileSync(
		filePath,
		JSON.stringify(data, null, 4)
	)
}

module.exports.queries = function handleQueries(req, res) {
	let buffer = "";
	
	req.on('data', chunk => {
		buffer += chunk;
		// console.log(chunk);
	});
	req.on('end', () => {
		return buffer != null
		? buffer
		: 'error'
	});
}
