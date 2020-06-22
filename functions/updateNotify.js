const Pusher = require('pusher');
// pusher is used for mobile apps
// socket is used for webApp
const update = (io, sensorId, userid, type, value) => {
    const pusher = new Pusher({
        app_id : "1002127",
        key : "b53c83c998e4d67d3fbf",
        secret : "66b87420ffb237d8a464",
        cluster : "ap2",
        useTLS : true
    });
    
    io.sockets.emit(`${userid}-update`,{
         userid,
         sensorId,
         type,
         value
        });
   
    pusher.trigger(`${userid}`,'update',{
    userid,
    sensorId,
    type,
    value
   });

     
};
module.exports = update;