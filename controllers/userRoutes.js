const router = require('express').Router();

const createUser = async (req, res) => {
    try {
        res.send('User Created Successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const loginUser = async (req, res) => {
    try {
        res.send('User Logged in Successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const logoutUser = async (req, res) => {
    try {
        res.send('User logged out successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

router.post('/signup', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;
