const EnergySensor=require('../Model/sensor.model');
const Alerts = require ('../Model/threshol.model');
const User = require('../Model/user.model');
const router=require('express').Router();
const joi =require('@hapi/joi');
const moment = require ('moment');
const notifications=require('../functions/alerts')
const checkThreshole=require('../functions/threshole')
const update_Va=require('../functions/sensor/Va_update');
const update_Vb=require('../functions/sensor/Vb_update');
const update_Vc=require('../functions/sensor/Vc_update');
const update_Ia=require('../functions/sensor/Ia_update');
const update_Ib=require('../functions/sensor/Ib_update');
const update_Ic=require('../functions/sensor/Ic_update');
const update_Pf=require('../functions/sensor/Pf_update');
// const update_A=require('../functions/sensor/A_update');
// const update_B=require('../functions/sensor/B_update');
const update_PA=require('../functions/sensor/PA_update');
const update_PR=require('../functions/sensor/PR_update');
const update_U=require('../functions/sensor/U_update');
const getWeekData = require('../functions/charts/weekData');
const getMonthData = require('../functions/charts/monthData');
const getYearData = require('../functions/charts/yearData');
const getWeeklyUnits = require('../functions/charts/weeklyUnits');
const updateSensor = require('../functions/sensor/updateSensor');

//const updateSensor=require('../Router/updatelogs');
//const moment = require('moment');



//schema add Sensor
const sensorAddSchema = joi.object({
   sensorName:joi.string().required(),
   });
// schema update sensor
const sensorUpdateSchema = joi.object({
  voltage:{
      Va:joi.number(),
      Vb:joi.number(),
      Vc:joi.number(),
   },
   current:{
   Ia:joi.number(),
   Ib:joi.number(),
   Ic:joi.number(),

   },
   power:{
      Pf:joi.number(),
      // A:joi.number(),
      // B:joi.number(),
      PA:joi.number(),
      PR:joi.number(),
      U:joi.number()
   }
});


//add sensors

router.route('/add').post(async (req,res)=>{
 
 try{    
   //check the schema
 const {error}=await sensorAddSchema.validateAsync(req.body);
         if(error)
   return res.status(400).send(error.detail[0].message);
       const userid = req.body.sensorName;
       const user = await User.findOne({userid})
       const sensorExt= await EnergySensor.findOne({userid});
       if(sensorExt){
      return res.status(400).json("This sensor is already assigned");
   }  
   const username = user.username;
   user.sensor = true;
   user.save();
   const sensor = new EnergySensor({
   userid,
   username
   }) 
    
   const sensorSaved = await sensor.save();
   if(sensorSaved)
   res.send(`Energy Sensor is added for ${user.username}`);
}
catch(err){
   res.status(400).json(`sensor is not saved due to ${err}`);

}
  
})

//get sensor data
router.route('/get/:userid').get(async(req,res)=>{
   const userid = req.params.userid;
  
  try{
   const data = await EnergySensor.findOne({userid});
   res.json(data);
  }
  catch(err){
     res.status(400).send(err);

  }
});

//get all sensors
router.route('/getAllSensors').get(async (req, res) => {
   try{
      const data = await EnergySensor.find();
      const columns = [{
            name: '_id',
            label: 'Sensor_ID'
         },
         {
            name: 'userid',
            label: 'Sensor Name'
         },
         {
            name: 'username',
            label: 'Assigned To'
         },
         {
            name: 'createdAt',
            label: 'Created_At'
         }

      ]
      res.json({
         data,
         columns
      }); 

   } catch(err){
      res.status(400).send(err);
   }
});

//delete sensor
router.route('/delete').delete(async(req,res)=>{
   console.log(req.body);
    try {
   await EnergySensor.findOneAndDelete({userid: req.body.sensor})
   const user = await User.findOne({userid: req.body.sensor});
   user.sensor = false;
   await user.save();
   res.send('Senser deleted');
    } catch(err){
       res.status(400).send(err);
    }
});

//-----------------------------------------------updata sensor----------------------------------------------
router.route('/update/:id').post( async(req,res)=>{
   try{
   const {error} = sensorUpdateSchema.validateAsync(req.body);
   } catch(error){
      res.status(400).send(error.details[0].message);
   }
   const io = req.app.get('socketio');
      const sensorid=req.params.id;
      //const userid=req.body.userid;
      const Va=req.body.voltage.Va;
      const Vb=req.body.voltage.Vb;
      const Vc=req.body.voltage.Vc;
      const Ia=req.body.current.Ia;
      const Ib=req.body.current.Ib;
      const Ic=req.body.current.Ic;
      const Pf=req.body.power.Pf;
      // const A=req.body.power.A;
      // const B=req.body.power.B;
       const PA=req.body.power.PA;
      const PR=req.body.power.PR;
      const U=req.body.power.U;
     
      // //set local time and date
      // let date=new Date();
      // let newDate =date.toDateString();
      // let time=date.toLocaleTimeString();
      // let timeDate =newDate+ '  '+ time;
      
     
      //generate notifications 
      notifications(io,sensorid,Va,Vb,Vc,Ia,Ib,Ic,U);
      
      // thershole
      checkThreshole(io,sensorid,Va,Vb,Vc,Ia,Ib,Ic,Pf,U);
    
     try{
      const sensor = await EnergySensor.findById(sensorid);
     if(sensor){
      const userid = sensor.userid;
    
     
    
     //update Va
   //   updateSensor(sensorid, userid, 'Va', Va);
     update_Va(io, sensorid, userid, Va, res);

     //UPDATE Vb
   //   updateSensor(sensorid, userid, 'Vb', Vb);
     update_Vb(io, sensorid, userid, Vb, res);

     //update Vc
   //   updateSensor(sensorid, userid, 'Vc', Vc)
     update_Vc(io, sensorid, userid, Vc, res);

    //update Ia
   //  updateSensor(sensorid, userid, 'Ia', Ia)
    update_Ia(io, sensorid, userid, Ia, res);
    
    //update Ib
   //  updateSensor(sensorid, userid, 'Ib', Ib)
    update_Ib(io, sensorid, userid, Ib, res);

    //update Ic
   //  updateSensor(sensorid, userid, 'Ic', Ic)
    update_Ic(io, sensorid, userid, Ic, res);
    
    //update Pf
   //  updateSensor(sensorid, userid, 'Pf', Pf)
    update_Pf(io, sensorid, userid, Pf, res);

   //  //update A
   //  update_A(sensorid,userid,A,res);

   //  //update B
   //  update_B(sensorid,userid,B,res);

    //update PA
   //  updateSensor(sensorid, userid, 'PA', PA)
    update_PA(io, sensorid, userid, PA, res);

    //updata PR
   //  updateSensor(sensorid, userid, 'PR', PR)
    update_PR(io, sensorid, userid, PR, res);

    //updata U
   //  updateSensor(sensorid, userid, 'U', U, res)
    update_U(io, sensorid, userid, U, res);
    
    }
    }
    catch(err){
       console.log(`sensor is not found due to ${err}`)
    }
    
       });

//-------------------------------------------Update sensor Ends-----------------------------------------------------

//-------------------------------------------------Get Alerts-------------------------------------------------------
 router.route('/alerts').post(async(req,res)=>{
    const userid = req.body.userid;
    const logsfound = await Alerts.find({
       userid, 
      createdAt:{
         $gte: moment().subtract(7, 'days').toISOString(true), 
         $lt:moment().toISOString(true)
   }
   }).sort({createdAt: -1})
   // bind the column with database values
   const columns = [
      {
         name: 'type',
         label: 'Type'
      },
      {
         name: 'value',
         label: 'Value'
      },
      {
         name: 'msg',
         label: 'Alert'
      },
      {
         name: 'created_Date',
         label: 'At'
      }

   ]
   
  
 if(logsfound){
      res.json({
      
         data: logsfound,
         columns,
         // title: 'Recent Alerts'

      });
      
   }
   else {
      res.status(400).json(err);
   }

 });
 //////////////////////////////////////////////////////////////////////////////////////////////////////

 //------------------------------------Charts-------------------------------------------------

 router.route('/chart/:type/:range/:userid').get(async (req,res) => {

    const type = req.params.type;
    const id = req.params.userid;
    const range = req.params.range 
    console.log(type, id, range);
   
    //________week Data (Va)__________// 
   
   if(req.params.type === 'Va'){
       if(req.params.range === 'week'){
          let date = new Date();
          date.setDate(date.getDate() - 6);
          getWeekData(type, date, id, res);
          }
        }
    
    
    //_______week data (Vb)______________//

    if(req.params.type === 'Vb'){
      if(req.params.range === 'week'){
         let date = new Date();
         date.setDate(date.getDate() - 6);
         getWeekData(type, date, id, res);
         }
      }


//_____________week data (Vc) _________________

if(req.params.type === 'Vc'){
   if(req.params.range === 'week'){
      let date = new Date();
      date.setDate(date.getDate() - 6);
      getWeekData(type, date, id, res);
       
     }
    }

//____________week data (Ia)____________________
if(req.params.type === 'Ia'){
   if(req.params.range === 'week'){
      let date = new Date();
      date.setDate(date.getDate() - 6);
      getWeekData(type, date, id, res);
       
     }
    }

//____________week data (Ib)____________________
if(req.params.type === 'Ib'){
   if(req.params.range === 'week'){
      let date = new Date();
      date.setDate(date.getDate() - 6);
      getWeekData(type, date, id, res);
       
     }
    }

//____________week data (Ic)____________________
if(req.params.type === 'Ic'){
   if(req.params.range === 'week'){
      let date = new Date();
      date.setDate(date.getDate() - 6);
      getWeekData(type, date, id, res);
       
     }
    }

//__________week data (Units)
if(req.params.type === 'U'){
   if(req.params.range === 'week'){
      let date = new Date();
      date.setDate(date.getDate() - 6);
      getWeeklyUnits(type,date, id, res);
       
     }
    }

//______________________________________________Month data____________________________________

//____________Month Data (Va)

if(req.params.type === 'Va'){
   if(req.params.range === 'month'){
      let date = new Date();
      date.setDate(date.getDate() - 30);
      getMonthData(type, date, id, res);
      
   }
}

//____________Month Data (Vb)

if(req.params.type === 'Vb'){
   if(req.params.range === 'month'){
      let date = new Date();
      date.setDate(date.getDate() - 30);
      getMonthData(type, date, id, res);
      
   }
}

//____________Month Data (Vc)

if(req.params.type === 'Vc'){
   if(req.params.range === 'month'){
      let date = new Date();
      date.setDate(date.getDate() - 30);
      getMonthData(type, date, id, res);
      
   }
}

//____________Month Data (Ia)

if(req.params.type === 'Ia'){
   if(req.params.range === 'month'){
      let date = new Date();
      date.setDate(date.getDate() - 30);
      getMonthData(type, date, id, res);
      
   }
}

//____________Month Data (Ib)

if(req.params.type === 'Ib'){
   if(req.params.range === 'month'){
      let date = new Date();
      date.setDate(date.getDate() - 30);
      getMonthData(type, date, id, res);
      
   }
}

//____________Month Data (Ic)

if(req.params.type === 'Ic'){
   if(req.params.range === 'month'){
      let date = new Date();
      date.setDate(date.getDate() - 30);
      getMonthData(type, date, id, res);
      
   }
}
//____________________________________year data_______________________________________

//_________year data (Va)
if(req.params.type === 'Va'){
   if(req.params.range === 'year'){
      let date = new Date();
      date.setDate(date.getDate() - 365);
      getYearData(type, date, id, res);
   }
}
//_________year data (Vb)
if(req.params.type === 'Vb'){
   if(req.params.range === 'year'){
      let date = new Date();
      date.setDate(date.getDate() - 365);
      getYearData(type, date, id, res);
   }
}
//_________year data (Vc)
if(req.params.type === 'Vc'){
   if(req.params.range === 'year'){
      let date = new Date();
      date.setDate(date.getDate() - 365);
      getYearData(type, date, id, res);
   }
}

//_________year data (Ia)
if(req.params.type === 'Ia'){
   if(req.params.range === 'year'){
      let date = new Date();
      date.setDate(date.getDate() - 365);
      getYearData(type, date, id, res);
   }
}

//_________year data (Ib)
if(req.params.type === 'Ib'){
   if(req.params.range === 'year'){
      let date = new Date();
      date.setDate(date.getDate() - 365);
      getYearData(type, date, id, res);
   }
}

//_________year data (Ic)
if(req.params.type === 'Ic'){
   if(req.params.range === 'year'){
      let date = new Date();
      date.setDate(date.getDate() - 365);
      getYearData(type, date, id, res);
   }
}




 });

    


module.exports=router;