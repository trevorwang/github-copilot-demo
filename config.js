/**
 * @fileoverview Configuration file for the application.
 *  It defines the port on which the application will run.
 */


module.exports = {
	port: 3000,
	logLevel: 5,
	db: {
		url: 'localhost',
		name: 'koa',
		port: 27017
	}
}

