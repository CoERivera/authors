const Author = require("../models/author.model");

const message = (req, res) => {
    res.json("Hello World");
};

const create = (req, res) => {
    // Author.distinct('name', req.body).then(result => {
    //     if (result.length === 0) {
    Author.create(req.body)
        .then((author) => res.status(201).json(author))
        .catch((err) => res.status(400).json(err));
    //})
};

const findAll = (req, res) => {
    Author.find().sort('name')
        .then((authors) => res.status(200).json(authors))
        .catch((err) => res.status(400).json(err));
};

const findOne = (req, res) => {
    const { id } = req.params;
    Author.findById(id)
        .then((author) => res.status(200).json(author))
        .catch((err) => res.status(400).json(err));
};

const updateOne = (req, res) => {
    const { id } = req.params;
    Author.findByIdAndUpdate(id, req.body)
        .then((author) => res.status(200).json(author))
        .catch((err) => res.status(400).json(err));
};

const deleteOne = (req, res) => {
    const { id } = req.params;
    Author.findByIdAndDelete(id)
        .then((author) => res.status(200).json(author))
        .catch((err) => res.status(400).json(err));
}

module.exports = { message, create, findAll, findOne, updateOne, deleteOne };