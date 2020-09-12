const moment = require('moment');
const Alert = require('../Model/threshol.model');
const EnergySensor = require('../Model/sensor.model');

const alertslogs = async (sensorId,type, value, msg) => {
  try{
    let userid;
    const sensorFound = await EnergySensor.findById(sensorId);
   if(sensorFound){
     userid = sensorFound.userid;
     const logCreate = new Alert({
      type,
      value, 
      userid,
      msg,
      created_Date:moment().format('MMMM Do YYYY, h:mm:ss a')
  });
   const logSaved  = await logCreate.save();
      }
     
    

  }
  catch(err){
    console.log(err);
  }  
  
}
module.exports = alertslogs;