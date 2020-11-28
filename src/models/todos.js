const mongoose = require("mongoose");
const { Schema } = mongoose;

module.exports = mongoose.model('todos', new Schema({
    content: String,
    checked: Boolean
}));