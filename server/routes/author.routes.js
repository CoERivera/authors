
const {
    create,
    message,
    findAll,
    findOne,
    updateOne,
    deleteOne
} = require('../controllers/author.controller');

const express = require('express');
const authorRouter = express.Router();

authorRouter
    .route('/')
    .get(message);

authorRouter
    .route('/authors')
    .post(create)
    .get(findAll);

authorRouter
    .route('/authors/:id')
    .get(findOne)
    .put(updateOne)
    .delete(deleteOne);

module.exports = authorRouter;