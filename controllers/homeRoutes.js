// This comes from Activity 22 in the MVC module:

const router = require('express').Router();

const getHomePage = async (req, res) => {
    try {
        res.render('homepage', {});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
};

router.get('/', getHomePage);

module.exports = router;
