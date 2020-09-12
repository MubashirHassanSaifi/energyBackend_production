const EnergySensor=require('../../Model/sensor.model');
const moment =require('moment');
const PAlog=require('../../Model/Logs/PA.model');
const updateNotify = require('../updateNotify');

const update_PA = async(io,sensorid,userid,PA)=>{
try{
    const sensor =await EnergySensor.findById(sensorid);
    if(sensor.PA!==PA){
        sensor.PA=PA;
        if(sensor.PAlogid=== null || sensor.PAlogid=== undefined)
        {
            const logPA=new PAlog({
                userid:userid,
                PA:PA,
                created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                updated_At:null
            });
        
        try{
            const logSaved = await logPA.save();
            if(logSaved){
              console.log(`PAlog is created`);  
                //get the logid
              const logid = logSaved._id;
                // update the sensor Valogid
                sensor.PAlogid=logid;
                //save the changes
               
               try{
                const updated = await sensor.save();
                if(updated) {
                  updateNotify(io, sensorid, userid, 'PA', PA);
                    console.log(`PAlogid is updated`)
                    
                   }
                   
               }
               catch(err){
                console.log(`PAlogid is not updated`);
               }
               
              
            }
        }
        catch(err){
                console.log(`PAlog is not created due to ${err}`);
        }
           
          
            
        }
        
        else{
              
            const PAlogid= sensor.PAlogid;
      
    
      try{
        const PAlogFound = await PAlog.findById(PAlogid);
          if(PAlogFound){
           //Check the updatedAt   
           
               //update the date
               PAlogFound.updated_At=moment().format('MMMM Do YYYY, h:mm:ss a');
            
               try{
                const updateLog =await PAlogFound.save();
                   if(updateLog)
                   console.log(`PAlog createdAt is updated`);
               }
               catch(err){
                   console.log(`PAlog updatedAt is not update due to ${err}`);
    
               }
           
          }
          }
      catch(err){
         console.log(`PAlog not found due to ${err}`);
      }
    
       //add the new Vclog
       const newlogPA=new PAlog({
           userid:sensor.userid,
           PA:PA,
           created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
           updated_At:null
       });
    
    try{
        const newlogSaved = await newlogPA.save();
       if(newlogSaved){
         console.log(`new PAlog is created`);  
           //get the logid
         const newlogid = newlogSaved._id;
           // update the sensor Valogid
           sensor.PAlogid=newlogid;
           //save the changes
        
          try{
            const updated = await sensor.save();
           if(updated) {
            updateNotify(io, sensorid, userid, 'PA', PA);
               console.log(`new PAlogid is updated`)
              }
              
          }
          catch(err){
           console.log(`new PAlogid is not updated due to ${err}`);
          }
          
         
       }
    }
    catch(err){
           console.log(`new PAlog is not created due to ${err}`);
    }
    
    
       }           
                }
                
                else{
                 
     
                    //when first time value is same but log is not created
        
                 if(sensor.PAlogid=== null || sensor.PAlogid=== undefined)
                 {
                     const logPA=new PAlog({
                         userid:userid,
                         PA:PA,
                         created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                         updated_At:null
                     });
                 
                 try{
                    const logSaved   =await logPA.save();
                     if(logSaved){
                       console.log(`PAlog is created`);  
                         //get the logid
                       const logid = logSaved._id;
                         // update the sensor Valogid
                         sensor.PAlogid=logid;
                         //save the changes
                        
                        try{
                        const updated = await sensor.save();
                         if(updated) {
                             console.log(`PAlogid is updated`)
                            }
                            
                        }
                        catch(err){
                         console.log(`PAlogid is not updated`);
                        }
                        
                       
                     }
                 }
                 catch(err){
                         console.log(`PAlog is not created due to ${err}`);
                 }
                    
                   
                     
                 }
                 // if values are same and also the logs are created
                 else {
                   
                      try{
                        const logPA  =await PAlog.findById(sensor.PAlogid);
                          if(logPA){
                              
                                 logPA.updated_At=moment().format('MMMM Do YYYY, h:mm:ss a');
                                 
                                 try{
                                    const logupdate  =await logPA.save();
                                     if(logupdate)
                                     console.log(`PAlog with same value is updated`);
                                    // res.status(200).json(`logs with same values are updated`);
                                 }
                                 catch(err){
                                      console.log(`PAlog with same value is not update due to ${err}`);
                                 }
        
                              
                          }
                      }
                      catch(err){
                             console.log(`PAlog is not create due to ${err}`);
                      }   
                      
                 }
         
               
                            }
}
catch(err){
console.log(` sensor is not found due to ${err}`);
}
}
module.exports=update_PA