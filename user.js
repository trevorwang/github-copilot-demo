/**
 * it's the user module. It's used to handle all the user routes.
 */


const Router = require('koa-router');

const router = new Router();

// create user restFul api including create, read, update, delete

// create user
router.post('/', async (ctx, next) => {
	// get the user data from the request body
	const user = ctx.request.body;
	// create the user
	const result = await ctx.db.collection('users').insertOne(user);
	// set the response body
	ctx.body = result.ops[0];
	// set the response status
	ctx.status = 201;
	// log the message
	ctx.logger.info(`User ${user.name} created.`);
	// go to the next middleware
	await next();
});

// read all user info
router.get('/', async (ctx, next) => {
	// get all the users
	const users = await ctx.db.collection('users').find().toArray();
	// set the response body
	ctx.body = users;
	// set the response status
	ctx.status = 200;
	// log the message
	ctx.logger.info(`All users info read.`);
	// go to the next middleware
	await next();
});

// get a user info by id
router.get('/:id', async (ctx, next) => {
	// get the user id from the request params
	const id = ctx.params.id;
	// get the user
	const user = await ctx.db.collection('users').findOne({ _id: ctx.ObjectId(id) });
	// set the response body
	ctx.body = user;
	// set the response status
	ctx.status = 200;
	// log the message
	ctx.logger.info(`User ${id} info read.`);
	// go to the next middleware
	await next();
});


// delete a user by id
router.delete('/:id', async (ctx, next) => {
	// get the user id from the request params
	const id = ctx.params.id;
	// delete the user
	const result = await ctx.db.collection('users').deleteOne({ _id: ctx.ObjectId(id) });

	// set the response body
	ctx.body = result;
	// set the response status
	ctx.status = 200;
	// log the message
	ctx.logger.info(`User ${id} deleted.`);
	// go to the next middleware
	await next();
});

// update a user by id
router.put('/:id', async (ctx, next) => {
	// get the user id from the request params
	const id = ctx.params.id;
	// get the user data from the request body
	const user = ctx.request.body;
	// update the user
	const result = await ctx.db.collection('users').updateOne({ _id: ctx.ObjectId(id) }, { $set: user });
	// set the response body
	ctx.body = result;
	// set the response status
	ctx.status = 200;
	// log the message
	ctx.logger.info(`User ${id} updated.`);
	// go to the next middleware
	await next();
});




// export the router
module.exports = router;