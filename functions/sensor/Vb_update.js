const EnergySensor=require('../../Model/sensor.model');
const Vblog=require('../../Model/Logs/Vb.model');
const updateNotify = require('../updateNotify');
const moment =require('moment');


const update_Vb=async(io,sensorid,userid,Vb)=>{
  try{
    const sensor =await EnergySensor.findById(sensorid);
        if(sensor){
            if(sensor.Vb!=Vb){
                sensor.Vb=Vb;
                 //---------------------------------create the logs (first-time)--------------
                
                //Va log creation
                if(sensor.Vblogid=== null || sensor.Vblogid=== undefined)
                {
                    const logVb=new Vblog({
                        userid:userid,
                        Vb:Vb,
                        created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                        updated_At:null
                    });
                
                try{
                    const logSaved   =await logVb.save();
                    if(logSaved){
                      console.log(`Vblog is created`);  
                        //get the logid
                      const logid = logSaved._id;
                        // update the sensor Valogid
                        sensor.Vblogid=logid;
                        //save the changes
                       
                       try{
                        const updated = await sensor.save();
                        if(updated) {
                            console.log(`Vblogid is updated`)
                            updateNotify(io, sensorid, userid, 'Vb', Vb);
                           }
                           
                       }
                       catch(err){
                        console.log(`vblogid is not updated`);
                       }
                       
                      
                    }
                }
                catch(err){
                        console.log(`Vblog is not created due to ${err}`);
                }
                   
                  
                    
                }
                else{
                    //check the Valog
                    const Vblogid= sensor.Vblogid;
            
            
              try{
                const VblogFound = await Vblog.findById(Vblogid);
                  if(VblogFound){
                   //Check the updatedAt   
                   
                       //update the date
                       VblogFound.updated_At=moment().format('MMMM Do YYYY, h:mm:ss a');
                     
                       try{
                        const updateLog =await VblogFound.save();
                           if(updateLog)
                           console.log(`Vblog createdAt is updated`);
                       }
                       catch(err){
                           console.log(`Vblog updatedAt is not update due to ${err}`);

                       }
                   
                  }
                  }
              catch(err){
                 console.log(`Vblog not found due to ${err}`);
              }
           
               //add the new Valog
               const newlogVb=new Vblog({
                   userid:sensor.userid,
                   Vb:Vb,
                   created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                   updated_At:null
               });
           
           try{
            const newlogSaved   =await newlogVb.save();
               if(newlogSaved){
                 console.log(`new Vblog is created`);  
                   //get the logid
                 const newlogid = newlogSaved._id;
                   // update the sensor Valogid
                   sensor.Vblogid=newlogid;
                   //save the changes
                  try{
                    const updated = await sensor.save();
                  
                   if(updated) {
                    updateNotify(io, sensorid, userid, 'Vb', Vb);
                    console.log(`new Vblogid is updated`)
                   }
                       
                      
                  }
                  catch(err)
                  {
                
                        console.log(`new vblogid is not updated`);
                       
                  }
                   
                      
                  
                  
                  
                 
               }
           }
           catch(err){
                   console.log(`new Vblog is not created due to ${err}`);
           }


               }

                }

                else{
                     
         
                    //when first time value is same but log is not created
        
                 if(sensor.Vblogid=== null || sensor.Vblogid=== undefined)
                 {
                     const logVb=new Vblog({
                         userid:userid,
                         Vb:Vb,
                         created_At:moment().format('MMMM Do YYYY, h:mm:ss a'),
                         updated_At:null
                     });
                 
                 try{
                    const logSaved   =await logVb.save();
                     if(logSaved){
                       console.log(`Vblog is created`);  
                         //get the logid
                       const logid = logSaved._id;
                         // update the sensor Valogid
                         sensor.Vblogid=logid;
                         //save the changes
                        
                        try{
                        const updated = await sensor.save();
                         if(updated) {
                             console.log(`Vblogid is updated`)
                            }
                            
                        }
                        catch(err){
                         console.log(`vblogid is not updated`);
                        }
                        
                       
                     }
                 }
                 catch(err){
                         console.log(`Vblog is not created due to ${err}`);
                 }
                    
                   
                     
                 }
                 // if values are same and also the logs are created
                 else {
                   
                      try{
                        const logVb  =await Vblog.findById(sensor.Vblogid);
                          if(logVb){
                              
                                 logVb.updated_At=moment().format('MMMM Do YYYY, h:mm:ss a');
                                 
                                 try{
                                    const logupdate  =await logVb.save();
                                     if(logupdate)
                                     console.log(`Vblog with same value is updated`);
                                 }
                                 catch(err){
                                      console.log(`Vblog with same value is not update due to ${err}`);
                                 }
        
                              
                          }
                      }
                      catch(err){
                            console.log(`Vblog is not found due to ${err}`);
                      }   
                      
                 }
         
               
                            }

        }
  }
  catch(err){
      console.log(`sensor is not found due to ${err}`)
  }

           

              



                }
module.exports=update_Vb;