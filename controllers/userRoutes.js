const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.post('/', userRoutes.signup);
router.post('/login', userRoutes.login);
router.get('/logout', userRoutes.logout);

module.exports = router;