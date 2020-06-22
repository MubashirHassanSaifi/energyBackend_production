const downTime=require('../Model/systemDownTime.model');
const EnergySensor=require('../Model/sensor.model');
const noftify = require('./EmitNotify');
const createLog = require(`./alertsLog`);
const moment =require('moment');

const ifPowerOn= async(io, sensorid)=>{
    try{
      
        const sensor = await EnergySensor.findById(sensorid);
        if(sensor.isDown === true && sensor.downtimelgid !== null){
           sensor.isDown = false;
           try{
            const sensorSave = await sensor.save();
            if(sensorSave){
            const logid  =sensor.downtimelgid;
             try{
                const logfound   =await downTime.findById(logid);
                if(logfound){
                    logfound.systemDown_From = moment().format('MMMM Do YYYY, h:mm:ss a');
                    try{
                        const logSaved = await logfound.save();
                        if(logSaved)
                        var msg =  'power is on';
                        noftify(io, sensorid ,msg, 'PowerOn', 'success', false);  
                        createLog(sensorid, 'PowerOn', null, msg);  
                        console.log(`power on log is updated`);
                    }
                    catch(err){
                        console.log(`power on log is not updated due to ${err}`)
                    }
                }

             }
             catch(err){
                console.log(`down time log is not found due to ${err}`)
             }
            
            
           

           }
           }
           catch(err){
            console.log(`isDown attribute in sensor is not updated due to ${err}`)
           }
           
           
         
        }
       }
     catch(err){
         console.log(`sensor is not found due to ${err}`)
     }
}
module.exports=ifPowerOn;