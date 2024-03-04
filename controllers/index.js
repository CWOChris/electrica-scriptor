// This comes from Activity 22 in the MVC module:

const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

router.get('/', homeRoutes.homepage);
// router.get('/login', homeRoutes.login);
// router.get('/signup', homeRoutes.signup);
// router.get('/dashboard', homeRoutes.dashboard);
// router.get('/logout', homeRoutes.logout);

module.exports = router;