// This comes from Activity 22 in the MVC module:
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/post', postRoutes);
