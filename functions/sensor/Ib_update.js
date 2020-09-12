const EnergySensor=require('../../Model/sensor.model');
const moment =require('moment');
const Iblog=require('../../Model/Logs/Ib.model');
const updateNotify = require('../updateNotify');

const update_Ib=async(io,sensorid,userid,Ib,res)=>{
try{
    const sensor =await EnergySensor.findById(sensorid);
    if(sensor.Ib!==Ib){
        sensor.Ib=Ib;
             //Va log creation
             if(sensor.Iblogid=== null || sensor.Iblogid=== undefined)
             {
                 const logIb=new Iblog({
                     userid:userid,
                     Ib:Ib,
                     created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                     updated_At:null
                 });
             
             try{
                const logSaved =await logIb.save();
                 if(logSaved){
                   console.log(`Iblog is created`);  
                     //get the logid
                   const logid = logSaved._id;
                     // update the sensor Valogid
                     sensor.Iblogid=logid;
                     //save the changes
                    
                    try{
                    const updated = await sensor.save();
                     if(updated) {
                         console.log(`Iblogid is updated`)
                         updateNotify(io, sensorid, userid, 'Ib', Ib);
                        }
                        
                    }
                    catch(err){
                     console.log(`Iblogid is not updated`);
                    }
                    
                   
                 }
             }
             catch(err){
                     console.log(`Iblog is not created due to ${err}`);
             }
                
               
                 
             }
             
             else{
                   
                 const Iblogid= sensor.Iblogid;
           
         
           try{
               const IblogFound = await Iblog.findById(Iblogid);
               if(IblogFound){
                //Check the updatedAt   
                
                    //update the date
                    IblogFound.updated_At = moment().format('MMMM Do YYYY, h:mm:ss a');
                
                    try{
                        const updateLog = await IblogFound.save();
                        if(updateLog)
                        console.log(`Iblog createdAt is updated`);
                    }
                    catch(err){
                        console.log(`Iblog updatedAt is not update due to ${err}`);

                    }
                
               }
               }
           catch(err){
              console.log(`Iblog not found due to ${err}`);
           }
        
            //add the new Vclog
            const newlogIb=new Iblog({
                userid:sensor.userid,
                Ib:Ib,
                created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                updated_At:null
            });
        
        try{
            const newlogSaved   =await newlogIb.save();
            if(newlogSaved){
              console.log(`new Iblog is created`);  
                //get the logid
              const newlogid = newlogSaved._id;
                // update the sensor Valogid
                sensor.Iblogid=newlogid;
                //save the changes
               
               try{
                const updated = await sensor.save();
                if(updated) {
                    updateNotify(io, sensorid, userid, 'Ib', Ib);
                    console.log(`new Iblogid is updated`)
                   }
                   
               }
               catch(err){
                console.log(`new Iblogid is not updated due to ${err}`);
               }
               
              
            }
        }
        catch(err){
                console.log(`new Iblog is not created due to ${err}`);
        }


            }           
    } 
                
    else{
                 
     
        //when first time value is same but log is not created

     if(sensor.Iblogid=== null || sensor.Iblogid=== undefined)
     {
         const logIb=new Iblog({
             userid:userid,
             Ib:Ib,
             created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
             updated_At:null
         });
     
     try{
        const logSaved   =await logIb.save();
         if(logSaved){
           console.log(`Iblog is created`);  
             //get the logid
           const logid = logSaved._id;
             // update the sensor Valogid
             sensor.Iblogid=logid;
             //save the changes
            
            try{
            const updated = await sensor.save();
             if(updated) {
                 console.log(`Iblogid is updated`)
                }
                
            }
            catch(err){
             console.log(`Iblogid is not updated`);
            }
            
           
         }
     }
     catch(err){
             console.log(`Iblog is not created due to ${err}`);
     }
        
       
         
     }
     // if values are same and also the logs are created
     else {
       
          try{
            const logIb  =await Iblog.findById(sensor.Iblogid);
              if(logIb){
                  
                     logIb.updated_At=moment().format('MMMM Do YYYY, h:mm:ss a');
                     
                     try{
                        const logupdate  =await logIb.save();
                         if(logupdate)
                         console.log(`Iblog with same value is updated`);
                     }
                     catch(err){
                          console.log(`Iblog with same value is not update due to ${err}`);
                     }

                  
              }
          }
          catch(err){
                 console.log(`Iblog is not create due to ${err}`);
          }   
          
     }

   
                }


}
catch(err){
    console.log(`sensor is not found due to ${err}`)
}
}
module.exports=update_Ib;