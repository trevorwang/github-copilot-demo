/**
 * 
 *  This the main entry point of the application. It's built on Koa.js and uses the following modules:
 *  router.js - handles all the routes
 *  config.js - handles all the configuration
 *  logger.js - handles all the logging
 * 	user.js - handles all the user related routes
 *  auth.js - handles all the authentication related routes
 * 	home.js - handles all the home page related routes
 */

const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const config = require('./config');
const logger = require('./logger');

// start koa server

app.use(router.routes());
app.use(router.allowedMethods());

// integrate with db and set to ctx.db
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
MongoClient.connect(config.db.url, (err, db) => {
	if (err) {
		logger.error('Error connecting to database');
		throw err;
	}
	logger.info('Connected to database');
	app.context.db = db;
	app.context.ObjectId = ObjectId;
});


app.listen(config.port, () => {
	logger.info(`Server started on port ${config.port}`);
});