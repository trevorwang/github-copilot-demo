/**
 * 
 * It's the router module. It's used to handle all the routes.
 */


const Router = require('koa-router');
const router = new Router();

// import home router from home.js
const home = require('./home');
// import user router from user.js
const user = require('./user');
// // import auth router from auth.js
// const auth = require('./auth');

// use home router
router.use('/', home.routes(), home.allowedMethods());
// // use user router
// router.use('/user', user.routes(), user.allowedMethods());
// // use auth router
// router.use('/auth', auth.routes(), auth.allowedMethods());

// export the router
module.exports = router