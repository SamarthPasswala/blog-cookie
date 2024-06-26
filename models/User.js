const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const userDB = mongoose.model('User', userSchema)

module.exports = userDB