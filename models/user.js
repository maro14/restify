const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name: String,
    age: Number,
    address: String,
    phone: Number
})

const User = model('user', UserSchema)

module.exports = User