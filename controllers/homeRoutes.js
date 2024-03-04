// This comes from Activity 22 in the MVC module:

const router = require('express').Router();
const { getHomePage } = require('./homeRoutes');

router.get('/', getHomePage);

module.exports = router;