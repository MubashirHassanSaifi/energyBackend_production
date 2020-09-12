const EnergySensor=require('../../Model/sensor.model');
const moment =require('moment');
const Vclog=require('../../Model/Logs/Vc.model');
const updateNotify = require('../updateNotify');

const update_Vc = async(io,sensorid,userid,Vc)=>{
  try{ 
    const sensor = await EnergySensor.findById(sensorid);
        if(sensor){
            if(sensor.Vc !== Vc){
                sensor.Vc = Vc;
                    //---------------------------------create the logs (first-time)--------------
                  
                    if(sensor.Vclogid === null || sensor.Vclogid === undefined)
                    {
                        const logVc = new Vclog({
                            userid:userid,
                            Vc:Vc,
                            created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                            updated_At:null
                        });
                    
                    try{
                        const logSaved = await logVc.save();
                        if(logSaved){
                          console.log(`Vclog is created`);  
                            //get the logid
                          const logid = logSaved._id;
                            // update the sensor Valogid
                            sensor.Vclogid = logid;
                            //save the changes
                           
                           try{
                            const updated = await sensor.save();
                            if(updated) {
                                console.log(`Vclogid is updated`);
                                updateNotify(io, sensorid, userid, 'Vc', Vc);
                               }
                               
                           }
                           catch(err){
                            console.log(`Vclogid is not updated`);
                           }
                           
                          
                        }
                    }
                    catch(err){
                            console.log(`Vclog is not created due to ${err}`);
                    }
                       
                      
                        
                    }
                    
                    else{
                          
                        const Vclogid= sensor.Vclogid;
                  
                
                  try{
                    const VclogFound = await Vclog.findById(Vclogid);
                      if(VclogFound){
                       //Check the updatedAt   
                       
                           //update the date
                           VclogFound.updated_At=moment().format('MMMM Do YYYY, h:mm:ss a');
                         
                           try{
                            const updateLog = await VclogFound.save();
                               if(updateLog)
                               console.log(`Vclog createdAt is updated`);
                           }
                           catch(err){
                               console.log(`Vclog updatedAt is not update due to ${err}`);
    
                           }
                       
                      }
                      }
                  catch(err){
                     console.log(`Vclog not found due to ${err}`);
                  }
               
                   //add the new Vclog
                   const newlogVc=new Vclog({
                       userid:sensor.userid,
                       Vc:Vc,
                       created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                       updated_At:null
                   });
               
               try{
                const newlogSaved   =await newlogVc.save();
                   if(newlogSaved){
                     console.log(`new Vclog is created`);  
                       //get the logid
                     const newlogid = newlogSaved._id;
                       // update the sensor Valogid
                       sensor.Vclogid=newlogid;
                       //save the changes
                      
                      try{
                        const updated = await sensor.save();
                       if(updated) {
                           updateNotify(io, sensorid, userid, 'Vc', Vc);
                           console.log(`new Vclogid is updated`)
                          }
                          
                      }
                      catch(err){
                       console.log(`new Vclogid is not updated due to ${err}`);
                      }
                      
                     
                   }
               }
               catch(err){
                       console.log(`new Vclog is not created due to ${err}`);
               }
    
    
                   }
    
                        
            
            }
            
            else{
                         
             
                //when first time value is same but log is not created
    
             if(sensor.Vclogid=== null || sensor.Vclogid=== undefined)
             {
                 const logVc=new Vclog({
                     userid:userid,
                     Vc:Vc,
                     created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                     updated_At:null
                 });
             
             try{
                const logSaved   =await logVc.save();
                 if(logSaved){
                   console.log(`Vclog is created`);  
                     //get the logid
                   const logid = logSaved._id;
                     // update the sensor Valogid
                     sensor.Vclogid=logid;
                     //save the changes
                    
                    try{
                        const updated = await sensor.save();
                     if(updated) {
                         console.log(`Vclogid is updated`)
                        }
                        
                    }
                    catch(err){
                     console.log(`Vclogid is not updated`);
                    }
                    
                   
                 }
             }
             catch(err){
                     console.log(`Vclog is not created due to ${err}`);
             }
                
               
                 
             }
             // if values are same and also the logs are created
             else {
            
                  try{
                    const logVc  =await Vclog.findById(sensor.Vclogid);  
                    if(logVc){
                          
                             logVc.updated_At=moment().format('MMMM Do YYYY, h:mm:ss a');
                             
                             try{
                                const logupdate  =await logVc.save();
                                 if(logupdate)
                                 console.log(`Vclog with same value is updated`);
                             }
                             catch(err){
                                  console.log(`Vclog with same value is not update due to ${err}`);
                             }
    
                          
                      }
                  }
                  catch(err){
                         console.log(`Vclog is not create due to ${err}`);
                  }   
                  
             }
     
           
                        }
    
        }

  }
  catch(err){
      console.log(`senor is not found due to ${err}`);
  }

}
module.exports=update_Vc;