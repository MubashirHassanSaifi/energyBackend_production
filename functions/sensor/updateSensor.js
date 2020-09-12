const EnergySensor = require('../../Model/sensor.model');
const Valog = require('../../Model/Logs/Va.model');
const Vblog = require('../../Model/Logs/Vb.model');
const Vclog = require('../../Model/Logs/Vc.model');
const Ialog = require('../../Model/Logs/Ia.model');
const Iblog = require('../../Model/Logs/Ib.model');
const Iclog = require('../../Model/Logs/Ic.model');
const PAlog = require('../../Model/Logs/PA.model');
const PRlog = require('../../Model/Logs/PR.model');
const Pflog = require('../../Model/Logs/Pf.model');
const Ulog = require('../../Model/Logs/U.model');
const moment =require('moment');

const updateSensor = async(sensorid, userid, type, value ,res) => {
     let model;
     let logid;
     let valueType;
     
    try{
        const sensor = await EnergySensor.findById(sensorid);
        // set logids
        if(type === 'Va'){
            logid = sensor.Valogid;
            valueType = sensor.Va;
            model = Valog;
        }
        if(type === 'Vb'){
            logid = sensor.Vblogid
            valueType = sensor.Vb;
            model = Vblog;
        }
        
        if (type === 'Vc'){
            logid = sensor.Vclogid
            valueType = sensor.Vc;
            model = Vclog;

        }
        
        if(type === 'Ia')
        {
            logid = sensor.Ialogid;
            valueType = sensor.Ia;
            model = Ialog;

        }
        if(type === 'Ib'){
            logid = sensor.Iblogid
            valueType = sensor.Ib;
            model = Iblog;
        }
        if(type === 'Ic'){
            logid = sensor.Iclogid
            valueType = sensor.Ic;
            model = Iclog;
        }
        
        if (type === 'Pf'){
            logid = sensor.Pflogid
            valueType = sensor.Pf;
            model = Pflog;
           }
        
        if(type === 'PA'){
            logid = sensor.PAlogid;
            valueType = sensor.PA;
            model = PAlog; 
        }
        
        if(type === 'PR'){
            logid = sensor.PRlogid;
            valueType = sensor.PR;
            model = PRlog;
        }
        
        if (type === 'U'){
            logid = sensor.Ulogid;
            valueType = sensor.U; 
            model = Ulog           

        }
        
        console.log(valueType, value);
        //____________________//
        // value = Va   &&     valuetype = sensor.Va  &&  logid = sensor.Valogid && model = Valog
        if(valueType !== value){
            //add the new value into sensor
            valueType = value;
           
             
            //---------------------------------create the logs (first-time)--------------
            
            if(logid === null || logid === undefined)
            {
              
                const log = new model({
                    userid,
                    Va: value,
                    Vb: value,
                    Vc: value,
                    Ia: value,
                    Ib: value,
                    Ic: value,
                    Pf: value,
                    PR: value,
                    PA: value,
                    U: value,
                    created_At: moment().format('MMMM Do YYYY, h:mm:ss a'),
                    updated_At: moment().format('MMMM Do YYYY, h:mm:ss a'),
                });
                
                
           
           
            try{
                const logSaved = await log.save();
              
                if(logSaved){
                  console.log(`log is created`);  
                    
                   
                    logid = logSaved._id;
                    //save the changes
                   try{
                    const updated = await sensor.save();
                   
                    if(updated) {
                        console.log(`logid is updated`)
                    //  if(type === 'U'){
                    //      res.json("new logs are created");
                    //  }   
                    }
                   }
                   catch(err)
                   {
                
                    console.log(`logid is not updated`);
                       
                   }
                   
                       
                  
                   }
            }
            catch(err){
                    console.log(`log is not created due to ${err}`);
                    // if(type === 'U')
                    // res.status(400).json("new logs are not created");
            }
               }
            
               else{
                try{
                    const logFound = await model.findById(logid);
                    if(logFound){
                      
               
                   //update the date
                   logFound.updated_At = moment().format('MMMM Do YYYY, h:mm:ss a');
                   try{
                    const updateLog = await logFound.save();
                   
                    if(updateLog)
                     console.log(`log createdAt is updated`);
                    
                   }
                   catch(err){
                    
                        console.log(`log updatedAt is not updated`);
                     
                   }
                 }
              }
                 catch(err){
                  console.log(`log not found due to ${err}`);
              }
       
           //add the new Valog
           const newlog = new model({
               userid,
               Va: value,
               Vb: value,
               Vc: value,
               Ia: value,
               Ib: value,
               Ic: value,
               Pf: value,
               PA: value,
               PR: value,
               U: value,
               created_At: moment().format('MMMM Do YYYY, h:mm:ss a'),
               updated_At: moment().format('MMMM Do YYYY, h:mm:ss a'),
           });
          
       try{
           const newlogSaved  =await newlog.save();
           if(newlogSaved){
             console.log(`new log is created`);  
               
               // update the sensor Valogid
               logid = newlogSaved._id;
               //save the changes
              try{
                const updated = await sensor.save();
                if(updated) 
                    console.log(`new logid is updated`)
                   
            }
            catch(err){
                
                    console.log(`new logid is not updated`);
                   
            }
             }
       }
       catch(err){
               console.log(`new log is not created due to ${err}`);
       }
      }
    }
    else{
        // when first time value is same but log is not created
    
       if(logid === null || logid === undefined)
     {
         const log = new model({
             userid,
             Va: value,
             Vb: value,
             Vc: value,
             Ia: value,
             Ib: value,
             Ic: value,
             Pf: value,
             PA: value,
             PR: value,
             U: value,
             created_At: moment().format('MMMM Do YYYY, h:mm:ss a'),
             updated_At: moment().format('MMMM Do YYYY, h:mm:ss a')
         });
     
     try{
        const logSaved = await log.save();
         if(logSaved){
           console.log(`log is created`);  
            // update the sensor Valogid
             logid = logSaved._id;
             //save the changes
            try{
                const updated = await sensor.save();
            
                if(updated) 
                    console.log(`logid is updated`)
                   
            }
            catch(err){
                
                console.log(`logid is not updated`);
                }
           
            
            
           
         }
     }
     catch(err){
             console.log(`log is not created due to ${err}`);
     }
        
       
         
     }
     else {
       
          try{
            const log = await model.findById(logid);
              if(log){
                  
                     log.updated_At = moment().format('MMMM Do YYYY, h:mm:ss a');
                     
                     try{
                        const logupdate = await log.save();
                         if(logupdate)
                         console.log(`log with same value is updated`);
                        //  if(type === 'U')
                        //  res.json("logs with same values are updated");
                     }
                     catch(err){
                          console.log(`log with same date is not update due to ${err}`);
                        //   res.status(400).json(`logs with same values are not updated due to ${err}`);
                     }
    
                  
              }
          }
          catch(err){
                 console.log(`log is not found due to ${err}`);                  
          }   
          
     }
    
    }

    } catch(err){
        console.log(err)
    }



};
module.exports = updateSensor; 