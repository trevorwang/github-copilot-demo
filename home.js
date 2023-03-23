/**
 * it's the home router module. It's used to handle all the home page related routes.
 */

const Router = require('koa-router');
const router = new Router();

// add a router for the home page
router.get('/', async (ctx, next) => {
	ctx.body = 'Hello World';
});

module.exports = router