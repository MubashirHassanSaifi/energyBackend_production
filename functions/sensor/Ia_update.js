const EnergySensor=require('../../Model/sensor.model');
const moment =require('moment');
const Ialog=require('../../Model/Logs/Ia.model');
const updateNotify = require('../updateNotify');

const update_Ia = async(io,sensorid,userid,Ia,res)=>{
try{
    const sensor =await EnergySensor.findById(sensorid);
    if(sensor.Ia!==Ia){
        sensor.Ia=Ia;
                //---------------------------------create the logs (first-time)--------------
            
            //Va log creation
            if(sensor.Ialogid=== null || sensor.Ialogid=== undefined)
            {
                const logIa=new Ialog({
                    userid:userid,
                    Ia:Ia,
                    created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                    updated_At:null
                });
            
            try{
                const logSaved =await logIa.save();
                if(logSaved){
                  console.log(`Ialog is created`);  
                    //get the logid
                  const logid = logSaved._id;
                    // update the sensor Valogid
                    sensor.Ialogid=logid;
                    //save the changes
                   
                   try{
                    const updated = await sensor.save();
                    if(updated) {
                        updateNotify(io, sensorid, userid, 'Ia', Ia);
                        console.log(`Ialogid is updated`)
                       }
                       
                   }
                   catch(err){
                    console.log(`Ialogid is not updated`);
                   }
                   
                  
                }
            }
            catch(err){
                    console.log(`Ialog is not created due to ${err}`);
            }
               
              
                
            }
            
            else{
                  
                const Ialogid= sensor.Ialogid;
                
        
          try{
            const IalogFound = await Ialog.findById(Ialogid);
              if(IalogFound){
               //Check the updatedAt   
               
                   //update the date
                   IalogFound.updated_At=moment().format('MMMM Do YYYY, h:mm:ss a');
                 
                   try{
                    const updateLog =await IalogFound.save();
                       if(updateLog)
                       console.log(`Ialog createdAt is updated`);
                   }
                   catch(err){
                       console.log(`Ialog updatedAt is not update due to ${err}`);

                   }
               
              }
              }
          catch(err){
             console.log(`Ialog not found due to ${err}`);
          }
       
           //add the new Vclog
           const newlogIa=new Ialog({
               userid:sensor.userid,
               Ia:Ia,
               created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
               updated_At:null
           });
    
       try{
           const newlogSaved = await newlogIa.save();
           if(newlogSaved){
             console.log(`new Ialog is created`);  
               //get the logid
             const newlogid = newlogSaved._id;
               // update the sensor Valogid
               sensor.Ialogid=newlogid;
               //save the changes
             
              try{
                const updated = await sensor.save();
               if(updated) {
                updateNotify(io, sensorid, userid, 'Ia', Ia);
                   console.log(`new Ialogid is updated`)
                  }
                  
              }
              catch(err){
               console.log(`new Ialogid is not updated due to ${err}`);
              }
              
             
           }
       }
       catch(err){
               console.log(`new Ialog is not created due to ${err}`);
       }


           }

                
                }
                else{
                 
     
                    //when first time value is same but log is not created
        
                 if(sensor.Ialogid=== null || sensor.Ialogid=== undefined)
                 {
                     const logIa=new Ialog({
                         userid:userid,
                         Ia:Ia,
                         created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                         updated_At:null
                     });
                 
                 try{
                    const logSaved   =await logIa.save();
                     if(logSaved){
                       console.log(`Ialog is created`);  
                         //get the logid
                       const logid = logSaved._id;
                         // update the sensor Valogid
                         sensor.Ialogid=logid;
                         //save the changes
                        
                        try{
                            const updated = await sensor.save();
                         if(updated) {
                             console.log(`Ialogid is updated`)
                            }
                            
                        }
                        catch(err){
                         console.log(`Ialogid is not updated`);
                        }
                        
                       
                     }
                 }
                 catch(err){
                         console.log(`Ialog is not created due to ${err}`);
                 }
                    
                   
                     
                 }
                 // if values are same and also the logs are created
                 else {
                   
                      try{
                        const logIa  =await Ialog.findById(sensor.Ialogid);
                          if(logIa){
                              
                                 logIa.updated_At=moment().format('MMMM Do YYYY, h:mm:ss a');
                                 
                                 try{
                                    const logupdate  =await logIa.save();
                                     if(logupdate)
                                     console.log(`Ialog with same value is updated`);
                                 }
                                 catch(err){
                                      console.log(`Ialog with same value is not update due to ${err}`);
                                 }
        
                              
                          }
                      }
                      catch(err){
                             console.log(`Ialog is not create due to ${err}`);
                      }   
                      
                 }
         
               
                            }


}
catch(err){
 console.log(`sensor is not found due to ${err}`)
}

}
module.exports=update_Ia;