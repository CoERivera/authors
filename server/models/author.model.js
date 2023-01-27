const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true
        }
    },
    { timestamps: true }
);

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;