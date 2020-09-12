const Pusher = require('pusher');
const moment = require('moment');
const EnergySensor = require('../Model/sensor.model');

const emitNotification = async (io ,sensorid, title,  type, variant, persist) => {
    const sensorFound = await EnergySensor.findById(sensorid);
    const userid =sensorFound.userid;
    const pusher = new Pusher({
        app_id : "1002127",
        key : "b53c83c998e4d67d3fbf",
        secret : "66b87420ffb237d8a464",
        cluster : "ap2",
        useTLS : true
    });
    io.sockets.emit(`${userid}-notification`, {
        title,
        type,
        created_at: moment().format('MMMM Do YYYY, h:mm:ss a'),
        variant,
        persist,
      });
    
    
    pusher.trigger(`${userid}`, 'notification',{
        title,
        type,
        created_at: moment().format('MMMM Do YYYY, h:mm:ss a'),
        variant,
        persist
    })

};
module.exports=emitNotification;

