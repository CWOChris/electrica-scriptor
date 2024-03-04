const router = require('express').Router();

const createPost = async (req, res) => {
    try {
        res.send('Post Created Successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updatePost = async (req, res) => {
    try {
        res.send('Post Updated Successfully')
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error'});