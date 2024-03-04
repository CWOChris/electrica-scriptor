// This comes from Activity 22 in the MVC module:

const router = require('express').Router();
const { User, Post, Comment } = require('../models');

const homeController = {
    getHomePage: async (req, res) => {
        try {
            const posts = await Post.findAll({
                include: [{
                    model: User,
                    attributes: ['username']
                }],
                order: [['createdAt', 'DESC']]
            });
            res.render('homepage', { posts });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
};

module.exports = homeController;