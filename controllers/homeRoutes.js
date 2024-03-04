// This comes from Activity 22 in the MVC module:

const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes.getHomePage);

module.exports = router;