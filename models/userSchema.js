const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    name: {type: String, required: true, max: 100},
    password: {type: String, required: true},
    email: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
})


module.exports = mongoose.model('User', userSchema)