const EnergySensor=require('../../Model/sensor.model');
const Valog=require('../../Model/Logs/Va.model');
const updateNotify = require('../updateNotify');
const moment =require('moment');

const update_Va = async(io,sensorid,userid,Va) => {
  try{
        const sensor =await EnergySensor.findById(sensorid);
        if(sensor){
          if(sensor.Va !== Va){
                //add the new value into sensor
                sensor.Va = Va;
               
                 
                //---------------------------------create the logs (first-time)--------------
                
                //Va log creation
                if(sensor.Valogid === null || sensor.Valogid === undefined)
                {
                    
                    const logVa = new Valog({
                        userid,
                        Va,
                        created_At: moment().format('MMMM Do YYYY, h:mm:ss a'),
                        updated_At: moment().format('MMMM Do YYYY, h:mm:ss a'),
                    });
                    
                    
               
               
                try{
                    const logSaved = await logVa.save();
                  
                    if(logSaved){
                      console.log(`Valog is created`);  
                        //get the logid
                      const logid = logSaved._id;
                        // update the sensor Valogid
                        sensor.Valogid = logid;
                        //save the changes
                       try{
                        const updated = await sensor.save();
                       
                        if(updated) {
                          updateNotify(io, sensorid, userid, 'Va', Va);
                            console.log(`Valogid is updated`)

                           }
                       }
                       catch(err)
                       {
                    
                        console.log(`valogid is not updated`);
                           
                       }
                       
                           
                      
                       }
                }
                catch(err){
                        console.log(`Valog is not created due to ${err}`);
                }
                   }
                
                   else{
                    //check the Valog
                    const Valogid = sensor.Valogid;
                    
            
                    try{
                        const ValogFound = await Valog.findById(Valogid);
                        if(ValogFound){
                        //Check the updatedAt   
                   
                       //update the date
                       ValogFound.updated_At = moment().format('MMMM Do YYYY, h:mm:ss a');
                       try{
                        const updateLog = await ValogFound.save();
                       
                        if(updateLog)
                         console.log(`Valog createdAt is updated`);
                        
                       }
                       catch(err){
                        
                            console.log(`Valog updatedAt is not updated`);
                         
                       }
                     
                            
                        }
                  }
                     catch(err){
                      console.log(`Valog not found due to ${err}`);
                  }
           
               //add the new Valog
               const newlogVa = new Valog({
                   userid,
                   Va,
                   created_At: moment().format('MMMM Do YYYY, h:mm:ss a'),
                   updated_At: moment().format('MMMM Do YYYY, h:mm:ss a'),
               });
              
           try{
               const newlogSaved  =await newlogVa.save();
               if(newlogSaved){
                 console.log(`new Valog is created`);  
                   //get the logid
                 const newlogid = newlogSaved._id;
                   // update the sensor Valogid
                   sensor.Valogid = newlogid;
                   //save the changes
                  try{
                    const updated = await sensor.save();
                    if(updated) 
                    updateNotify(io, sensorid, userid, 'Va', Va);
                        console.log(`new Valogid is updated`)
                       
                }
                catch(err){
                    
                        console.log(`new valogid is not updated`);
                       
                }
                 }
           }
           catch(err){
                   console.log(`new Valog is not created due to ${err}`);
           }
          }
        }


       //if values are same
      
       else{
    // when first time value is same but log is not created

   if(sensor.Valogid === null || sensor.Valogid === undefined)
 {
     const logVa = new Valog({
         userid,
         Va,
         created_At: moment().format('MMMM Do YYYY, h:mm:ss a'),
         updated_At: moment().format('MMMM Do YYYY, h:mm:ss a')
     });
 
 try{
    const logSaved = await logVa.save();
     if(logSaved){
       console.log(`Valog is created`);  
         //get the logid
       const logid = logSaved._id;
         // update the sensor Valogid
         sensor.Valogid = logid;
         //save the changes
        try{
            const updated = await sensor.save();
        
            if(updated) 
                console.log(`Valogid is updated`)
               
        }
        catch(err){
            
            console.log(`valogid is not updated`);
            }
       
        
        
       
     }
 }
 catch(err){
         console.log(`Valog is not created due to ${err}`);
 }
    
   
     
 }
 else {
   
      try{
        const logVa = await Valog.findById(sensor.Valogid);
          if(logVa){
              
                 logVa.updated_At = moment().format('MMMM Do YYYY, h:mm:ss a');
                 
                 try{
                    const logupdate = await logVa.save();
                     if(logupdate)
                     console.log(`Valog with same value is updated`);
                 }
                 catch(err){
                      console.log(`Valog with same date is not update due to ${err}`);
                 }

              
          }
      }
      catch(err){
             console.log(`logVa is not found due to ${err}`);                  
      }   
      
 }

}
        
        
        
        }//sensor
    }
    catch(err){
        console.log(`sensor is not found due to ${err}`)
    }
    
    
    


}

module.exports=update_Va;
