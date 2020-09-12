const EnergySensor=require('../../Model/sensor.model');
const moment =require('moment');
const Pflog=require('../../Model/Logs/Pf.model');
const updateNotify = require('../updateNotify');

const update_Pf=async(io,sensorid,userid,Pf)=>{
    try{
        const sensor =await EnergySensor.findById(sensorid);
        if(sensor.Pf!==Pf){
            sensor.Pf=Pf;
            console.log(sensor.Pf);
            if(sensor.Pflogid=== null || sensor.Pflogid=== undefined)
            {
                const logPf=new Pflog({
                    userid:userid,
                    Pf:Pf,
                    created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                    updated_At:null
                });
            
            try{
                const logSaved   =await logPf.save();
                if(logSaved){
                  console.log(`Pflog is created`);  
                    //get the logid
                  const logid = logSaved._id;
                    // update the sensor Valogid
                    sensor.Pflogid=logid;
                    //save the changes
                   
                   try{
                    const updated = await sensor.save();
                    if(updated) {
                        updateNotify(io, sensorid, userid, 'Pf', Pf);
                        console.log(`Pflogid is updated`)
                        
                       }
                       
                   }
                   catch(err){
                    console.log(`Pflogid is not updated`);
                   }
                   
                  
                }
            }
            catch(err){
                    console.log(`Pflog is not created due to ${err}`);
            }
               
              
                
            }
            
            else{
                  
                const Pflogid= sensor.Pflogid;
          
        
          try{
            const PflogFound = await Pflog.findById(Pflogid);  
            if(PflogFound){
               //Check the updatedAt   
               
                   //update the date
                   PflogFound.updated_At = moment().format('MMMM Do YYYY, h:mm:ss a');
                 
                   try{
                    const updateLog = await PflogFound.save();
                       if(updateLog)
                       console.log(`Pflog createdAt is updated`);
                   }
                   catch(err){
                       console.log(`Pflog updatedAt is not update due to ${err}`);
        
                   }
               
              }
              }
          catch(err){
             console.log(`Pflog not found due to ${err}`);
          }
        
           //add the new Vclog
           const newlogPf=new Pflog({
               userid:sensor.userid,
               Pf:Pf,
               created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
               updated_At:null
           });
       
        try{
            const newlogSaved =await newlogPf.save();
           if(newlogSaved){
             console.log(`new Pflog is created`);  
               //get the logid
             const newlogid = newlogSaved._id;
               // update the sensor Valogid
               sensor.Pflogid=newlogid;
               //save the changes
              
              try{
                const updated = await sensor.save();
               if(updated) {
                   console.log(`new Pflogid is updated`)
                   updateNotify(io, sensorid, userid, 'Pf', Pf);
                  }
                  
              }
              catch(err){
               console.log(`new Pflogid is not updated due to ${err}`);
              }
              
             
           }
        }
        catch(err){
               console.log(`new Pflog is not created due to ${err}`);
        }
        
        
           }           
                    }
                    
                    else{
                     
         
                        //when first time value is same but log is not created
            
                     if(sensor.Pflogid=== null || sensor.Pflogid=== undefined)
                     {
                         const logPf=new Pflog({
                             userid:userid,
                             Pf:Pf,
                             created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                             updated_At:null
                         });
                     
                     try{
                        const logSaved   =await logPf.save();
                         if(logSaved){
                           console.log(`Pflog is created`);  
                             //get the logid
                           const logid = logSaved._id;
                             // update the sensor Valogid
                             sensor.Pflogid=logid;
                             //save the changes
                            
                            try{
                            const updated = await sensor.save();
                             if(updated) {
                                 console.log(`Pflogid is updated`)
                                }
                                
                            }
                            catch(err){
                             console.log(`Pflogid is not updated`);
                            }
                            
                           
                         }
                     }
                     catch(err){
                             console.log(`Pflog is not created due to ${err}`);
                     }
                        
                       
                         
                     }
                     // if values are same and also the logs are created
                     else {
                       
                          try{
                            const logPf  =await Pflog.findById(sensor.Pflogid);
                              if(logPf){
                                  
                                     logPf.updated_At=moment().format('MMMM Do YYYY, h:mm:ss a');
                                     
                                     try{
                                        const logupdate  =await logPf.save();
                                         if(logupdate)
                                         console.log(`Pflog with same value is updated`);
                                        // res.status(200).json(`logs with same values are updated`);
                                     }
                                     catch(err){
                                          console.log(`Pflog with same value is not update due to ${err}`);
                                     }
            
                                  
                              }
                          }
                          catch(err){
                                 console.log(`Pflog is not create due to ${err}`);
                          }   
                          
                     }
             
                   
                                }
        
        
    }
    catch(err){
        console.log(`sensor is not found due to ${err}`)
    }
}
module.exports=update_Pf;