const mongoose = require('mongoose');
const moment = require('moment');
const { boolean } = require('@hapi/joi');

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
    sensor:{
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default:null
    },
    location:{
        state: {type: String , default: null},
        region: {type: String , default: null},
        country:{type: String, default: null}
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
    createdDate:{
        type: String,
        default: moment().format('MMMM Do YYYY, h:mm:ss a')
    }

},{timestamps:true});

const User = mongoose.model('User', userSchema);
module.exports = User;