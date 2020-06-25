const ThreholdTracker = require('../Model/thresholdTrack.model');
const User = require('../Model/user.model');
const moment = require('moment');
const ThresholdTracker = require('../Model/thresholdTrack.model');
const axios = require('axios');


const thresholdTrack = async(userid, prev, newVal) => {
try{
    const user = await User.findById(userid);
    const usrTrack = await axios.get('http://api.ipstack.com/43.251.254.100?access_key=2c8c6151e6dc48613d51dc473cceb66b');
    
    const log = new ThresholdTracker({
        userid,
        username: user.username,
        ip: usrTrack.data.ip,
        location: {
            country: usrTrack.data.country_name,
            region: usrTrack.data.region_name,
            city: usrTrack.data.city
        },
        prev_val: prev,
        new_val: newVal,
        time: moment().format('MMMM Do YYYY, h: mm: ss a ')
    });
    const savedLog = await log.save();
    console.log('Threshold Track log is created');
} catch(err){
    console.log(err);
}


};
module.exports = thresholdTrack;