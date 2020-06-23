const mongoose = require('mongoose');
const { string } = require('@hapi/joi');
const Schema = mongoose.Schema;

const ipSchema = new Schema({
    userid:{
        type: String,
        required:true
    },
    username: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required:true
    },
    location: {
        country: String,
        region: String,
        city: String
    },
    time: {
        type: String,
        required: true
    }
},{timestamps: true});

const Ip = mongoose.model('Ip', ipSchema);
module.exports = Ip;