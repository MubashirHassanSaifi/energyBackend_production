const EnergySensor=require('../../Model/sensor.model');
const moment = require('moment');
const Iclog = require('../../Model/Logs/Ic.model');
const updateNotify = require('../updateNotify');

const update_Ic = async(io,sensorid,userid,Ic) => {
    try{
        const sensor = await EnergySensor.findById(sensorid);
        if(sensor.Ic!==Ic){
            sensor.Ic=Ic;
            if(sensor.Iclogid=== null || sensor.Iclogid=== undefined)
            {
                const logIc=new Iclog({
                    userid:userid,
                    Ic:Ic,
                    created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                    updated_At:null
                });
           
            try{
                const logSaved   =await logIc.save();
                if(logSaved){
                  console.log(`Iclog is created`);  
                    //get the logid
                  const logid = logSaved._id;
                    // update the sensor logid
                    sensor.Iclogid=logid;
                    //save the changes
                  
                   try{
                    const updated = await sensor.save();
                    if(updated) {
                        console.log(`Iclogid is updated`)
                        updateNotify(io, sensorid, userid, 'Ic', Ic);
                       // res.status(200).json(`logs are created`)
                       }
                       
                   }
                   catch(err){
                    console.log(`Iclogid is not updated`);
                   }
                   
                  
                }
            }
            catch(err){
                    console.log(`Iclog is not created due to ${err}`);
            }
               
              
                
            }
            
            else{
                  
                const Iclogid= sensor.Iclogid;
       
        
          try{
            const IclogFound = await Iclog.findById(Iclogid);
              if(IclogFound){
               //Check the updatedAt   
               
                   //update the date
                   IclogFound.updated_At=moment().format('MMMM Do YYYY, h:mm:ss a');
                 
                   try{
                    const updateLog = await IclogFound.save();
                       if(updateLog)
                       console.log(`Iclog createdAt is updated`);
                   }
                   catch(err){
                       console.log(`Iclog updatedAt is not update due to ${err}`);

                   }
               
              }
              }
          catch(err){
             console.log(`Iclog not found due to ${err}`);
          }
       
           //add the new Vclog
           const newlogIc=new Iclog({
               userid:sensor.userid,
               Ic:Ic,
               created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
               updated_At:null
           });
       
       try{
        const newlogSaved   =await newlogIc.save();
           if(newlogSaved){
             console.log(`new Iclog is created`);  
               //get the logid
             const newlogid = newlogSaved._id;
               // update the sensor Valogid
               sensor.Iclogid=newlogid;
               //save the changes
             
              try{
                const updated = await sensor.save();
               if(updated) {
                   updateNotify(io, sensorid, userid, 'Ic', Ic);
                   console.log(`new Iclogid is updated`)
                  }
                  
              }
              catch(err){
               console.log(`new Iclogid is not updated due to ${err}`);
              }
              
             
           }
       }
       catch(err){
               console.log(`new Iclog is not created due to ${err}`);
       }


           }           
                    }
                    
                    else{
                     
         
                        //when first time value is same but log is not created
            
                     if(sensor.Iclogid=== null || sensor.Iclogid=== undefined)
                     {
                         const logIc=new Iclog({
                             userid:userid,
                             Ic:Ic,
                             created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                             updated_At:null
                         });
                     
                     try{
                        const logSaved   =await logIc.save();
                         if(logSaved){
                           console.log(`Iclog is created`);  
                             //get the logid
                           const logid = logSaved._id;
                             // update the sensor Valogid
                             sensor.Iclogid=logid;
                             //save the changes
                            
                            try{
                                const updated = await sensor.save();
                                if(updated) {
                                 console.log(`Iclogid is updated`)
                                }
                                
                            }
                            catch(err){
                             console.log(`Iclogid is not updated`);
                            }
                            
                           
                         }
                     }
                     catch(err){
                             console.log(`Iclog is not created due to ${err}`);
                     }
                        
                       
                         
                     }
                     // if values are same and also the logs are created
                     else {
                       
                          try{
                            const logIc  =await Iclog.findById(sensor.Iclogid);
                              if(logIc){
                                  
                                     logIc.updated_At=moment().format('MMMM Do YYYY, h:mm:ss a');
                                     
                                     try{
                                        const logupdate  =await logIc.save();
                                         if(logupdate)
                                         console.log(`Iclog with same value is updated`);
                                         //res.status(200).json(`logs with same values are updated`);
                                     }
                                     catch(err){
                                          console.log(`Iclog with same value is not update due to ${err}`);
                                     }
            
                                  
                              }
                          }
                          catch(err){
                                 console.log(`Iclog is not create due to ${err}`);
                          }   
                          
                     }
             
                   
                                }

    }
    catch(err){
        console.log(`sensor is not found due to ${err}`)
    }
}
module.exports=update_Ic