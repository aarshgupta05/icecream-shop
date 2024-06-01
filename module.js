const { log } = require('console');
const fs = require('fs');


/**
 * Loads a JSON file from the specified file path.
 * @param {string} filePath - The path to the JSON file.
 * @returns {object|null} - The parsed JSON object, or null if the file does not exist or cannot be read.
 */
module.exports.loadJSON = function loadJSON(filePath) {
    filePath = __dirname + '/JSON/' + filePath + '.json';
    return JSON.parse (
        fs.existsSync(filePath)
            ? fs.readFileSync(filePath).toString()
            : 'null'
    );
}


/**
 * Saves JSON data to a file.
 * @param {string} filePath - The path of the file to save the JSON data to.
 * @param {object} data - The JSON data to be saved.
 */
module.exports.saveJSON = function saveJSON(filePath, data) {
    filePath = __dirname + '/JSON/' + filePath + '.json';
    fs.writeFileSync(
        filePath,
        JSON.stringify(data, null, 4)
    )
}


/**
 * Returns the current date and time in the format "dd/mm/yyyy hh:mm:ss".
 * @returns {string} The current date and time.
 */
module.exports.date = function getDate() {
    let date = new Date()

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

