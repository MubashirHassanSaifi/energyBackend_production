const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        maxlength: 255,
        trim: true
    },
    userid: {
        type: String,
        required: true,
        unique: true,
        maxlength: 255,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        maxlength: 255
    },
    profilePic: {
        type: String,
        default: null
    },

},{timestamps:true});

const User = mongoose.model('User', userSchema);
module.exports = User;