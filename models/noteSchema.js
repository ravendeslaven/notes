const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    name: {type: String, required: true},
    dia: {type: String, required: true},
    data_user: {type: String, require: false},
    created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Note', noteSchema)