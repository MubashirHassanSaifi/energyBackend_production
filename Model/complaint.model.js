const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const complaintSchema = new Schema({
    subject: {type: String, default: null},
    userid: {type: String, default : null},
    username: {type: String, default: null},
    sensor:{type: String , default: null},
    description: {
        type: String,
        default: null
    },
    status: {type: String, default: "pending"},
    registered_At: {type: String, default: moment().format('LLLL')}
},{timestamps: true});

const Complaint = mongoose.model('Complaint', complaintSchema);
module.exports = Complaint;