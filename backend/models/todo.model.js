const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema({
    content : String,
    date : String,
    isDone : Boolean,
}, {timestamps: true})

module.exports = mongoose.model('todo', todoSchema);