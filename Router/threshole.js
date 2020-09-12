const EnergySensor=require('../Model/sensor.model');
const thresholdTrack = require('../functions/thresholdTrack');
const router=require('express').Router();



// add  V_upper limit
router.route('/add_upper_V/:id').post(async (req,res)=>{
   const sensorid = req.params.id;
   const V_upperLmt = req.body.V_upperLmt;
   
   //checkUpperLimit(V_upperLimit);
 const sensor = await EnergySensor.findById(sensorid);
 
 try{
     if(sensor){
                 
                 sensor.V_upperLmt = V_upperLmt;
                 const updateUpper_V  = await sensor.save();
                try{
                  if(updateUpper_V)
                 
                  res.status(200).json(`V_upper Limit is set `)
                  }
                catch(err){
                  res.status(400).json(`V_upperlimit is not set  due to ${err}`)
              }

     }
 }
 catch(err){
     res.status(400).json(`sonsor is not found due to ${err}`)
 }
});

//------------------------------------------------------------------

// add  V_lower limit
router.route('/add_lower_V/:id').post(async (req,res)=>{
    const sensorid = req.params.id;
    const V_lowerLmt=req.body.V_lowerLmt;
    //checkUpperLimit(V_upperLimit);
  
  if(V_lowerLmt){
    console.log(V_lowerLmt);
    const sensor =await EnergySensor.findById(sensorid);
    try{
        if(sensor){
                    sensor.V_lowerLmt=V_lowerLmt;
                 const updateUpper_V  = await sensor.save();
                 try{
                   if(updateUpper_V)
                   res.status(200).json(`V_lower Limit is set `)
                 }
                 catch(err){
                     res.status(400).json(`V_lower limit is not set  due to ${err}`)
                 }
   
        }
    }
    catch(err){
        res.status(400).json(`sonsor is not found due to ${err}`)
    }  
}
else{
    res.status(400).json(` undefined value`);
}

  
 });
 
//-------------------------------------------------------------------------

//add I_upperlimet
router.route('/add_upper_I/:id').post(async(req,res)=>{
    const id = req.params.id;
    const I_upperLmt = req.body.I_upperLmt;
    const userid = req.body.userid;
    let prev_Val;
    let new_Val;
    try{
    const sensor = await EnergySensor.findById(id);
    if(sensor){
        prev_Val = sensor.I_upperLmt;
        sensor.I_upperLmt = I_upperLmt;
       const sensorSaved = await sensor.save();
       if(sensorSaved){
           new_Val = sensorSaved.I_upperLmt;
           thresholdTrack(userid, prev_Val, new_Val);
           res.status(200).send(`current upper limit is set`);
       }

    }
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

//-------------------------------------------------------------------------

// add Pf_lowerlimit

router.route('/add_lower_Pf/:id').post(async (req,res)=>{
    const sensorid = req.params.id;
    const Pf_lowerLmt=req.body.Pf_lowerLmt;
   
   if(Pf_lowerLmt){
                    //checkUpperLimit(V_upperLimit);
  const sensor =await EnergySensor.findById(sensorid);
  try{
      if(sensor){
                sensor.Pf_lowerLmt=Pf_lowerLmt;
               const updateUpper_V  = await sensor.save();
               try{
                 if(updateUpper_V)
                 res.status(200).json(`Pf_lower Limit is set `)
               }
               catch(err){
                   res.status(400).json(`Pf_lower limit is not set  due to ${err}`)
               }
 
      }
  }
  catch(err){
      res.status(400).json(`sonsor is not found due to ${err}`)
  }
   }
   else{
       res.status(400).json(`undefined Value`)
   }
    
 });
 //---------------------------------------------------------------------------
 
 // add  U_upper limit

 router.route('/add_upper_U/:id').post(async (req,res)=>{
    const sensorid = req.params.id;
    const U_upperLmt=req.body.U_upperLmt;
    console.log(U_upperLmt);
  const sensor =await EnergySensor.findById(sensorid);
  try{
      if(sensor){
         sensor.U_upperLmt=U_upperLmt;
             try{
                 const updateUpper_U  = await sensor.save();
                 if(updateUpper_U)
                 res.status(200).json(updateUpper_U)
               }
               catch(err){
                   res.status(400).json(`U_upper limit is not set  due to ${err}`)
               }
 
      }
  }
  catch(err){
      res.status(400).json(`sonsor is not found due to ${err}`)
  }
 });




module.exports=router;