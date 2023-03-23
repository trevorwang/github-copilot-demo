/**
 * It's the logger module. It's used to log all the messages to the console.
 */

const winston = require('winston');
const config = require('./config');


// const logger = new (winston.Logger)({
const logger = winston.createLogger({
	transports: [
		new (winston.transports.Console)({
			format: winston.format.simple(),
			prettyPrint: true,
		})
	]
});


module.exports = logger;