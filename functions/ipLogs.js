const Ip = require('../Model/ipLog.model');
const moment = require('moment');
// const { model } = require('../Model/ipLog.model');
const axios = require('axios');
const publicIp = require("public-ip");

const Iplog = async(userid, username) => {
    
   try{
    const pubIp  = await publicIp.v4();
    const usrTrack = await axios.get(`http://api.ipstack.com/${pubIp}?access_key=2c8c6151e6dc48613d51dc473cceb66b`);
    

    console.log(usrTrack.data.ip);
    const log = new Ip({
        userid,
        username,
        ip: usrTrack.data.ip,
        location: {
            country: usrTrack.data.country_name,
            region: usrTrack.data.region_name,
            city: usrTrack.data.city
        },
        time: moment().format('MMMM Do YYYY, h: mm: ss a ')

    });
    const ipSaved = await log.save();
    console.log("iplog is created");
   } catch(err){
       console.log(err);
   }
    

};
module.exports = Iplog;