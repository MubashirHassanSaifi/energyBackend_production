const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 255,
        trim : true
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
        maxlength: 255,
        minlength: 7
    },
    profilePic: {
        type: String,
        default: null
    }

},{
    timestamps: true
}); 
const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
