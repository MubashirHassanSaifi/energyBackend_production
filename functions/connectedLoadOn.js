const EnergySensor=require('../Model/sensor.model');
const moment =require('moment');
const loadOffline=require('../Model/systemOfflineTime.model');

const onlineConnectedLoad= async(io, sensorid)=>{
    try{
      
        const sensor = await EnergySensor.findById(sensorid);
        if(sensor.isOffline === true && sensor.offlinelgid !== null){
           sensor.isOffline = false;
        const sensorSaved = await sensor.save();
         if(sensorSaved){
          const logid = sensor.offlinelgid;
           const logfound = await loadOffline.findById(logid);
           logfound.system_Offline_From = moment().format('MMMM Do YYYY, h:mm:ss a');
          const logSaved = await logfound.save();
          if(logSaved)
            var msg = 'connected load is online';
            createLog(sensorid, 'Connectd_Load_Online', null, msg);  
            noftify(io , sensorid, msg, 'Connectd_Load_Online', 'success', false); 
            console.log(`connected load is update`)
          

         }   
                 
        }
       }
     catch(err){
         console.log(`sensor is not found due to ${err}`)
     }
}

module.exports=onlineConnectedLoad;

