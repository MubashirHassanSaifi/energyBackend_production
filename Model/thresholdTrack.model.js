const mongoose = require('mongoose');
const { required, number } = require('@hapi/joi');
const Schema = mongoose.Schema;

const thresholdTrackSchema = new Schema({
    userid:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    ip:{
        type: String,
        required: true,
    },
    location: {
        country: String,
        region: String,
        city: String
    },
    prev_val:{
        type: Number,
        required: true
    },
    new_val:{
        type: Number,
        required: true
    },
    time:{
        type: String,
        required: true
    }
},{timestamps: true});
const ThresholdTracker = mongoose.model('ThresholdTracker', thresholdTrackSchema);
module.exports = ThresholdTracker;