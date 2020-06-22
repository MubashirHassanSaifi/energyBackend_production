const router=require('express').Router();
const Valog=require('../Model/Logs/Va.model');
const Vblog=require('../Model/Logs/Vb.model');
const Vclog=require('../Model/Logs/Vc.model');
const Ialog=require('../Model/Logs/Ia.model');
const Iblog=require('../Model/Logs/Ib.model');
const Iclog=require('../Model/Logs/Ic.model');
const moment =require('moment');
const Pflog=require('../Model/Logs/Pf.model');
const Alog=require('../Model/Logs/A.model');
const Blog=require('../Model/Logs/B.model');
const PAlog=require('../Model/Logs/PA.model');
const PRlog=require('../Model/Logs/PR.model');
const Ulog=require('../Model/Logs/U.model');


router.route('/').post(async(req,res)=>{
    const sensor=req.body.sensor;
    const userid=req.body.userid;
    let startDate=req.body.startDate;
    let endDate=req.body.endDate;
    startDate=moment(startDate).toISOString(true);
    endDate=moment(endDate).toISOString(true);
       if(req.body.sensor==null){
         sensor='Va'
       }
   
    console.log("sensor",sensor);
    try{ 

   //Va-----------------------------
     if(sensor==='Va'){
      console.log(`startDate = ${startDate}`);
      console.log(`endDate = ${endDate}`);
      
       const log =await Valog.find({userid, createdAt: {$gte :startDate ,$lte:endDate}}).sort({createdAt:-1});
      //  let start =log.Created_At;
      //  let end = log.updadet_At;
       const start = moment(log.created_At).toISOString();
       const end = moment(log.updated_At).toISOString();
       
       const columns = [
         {
          name: 'userid',
          label: 'Sensor Name'
         },
         {
           name: 'Va',
           label: 'Value'
         },
         {
           name: 'created_At',
           label: 'Created_At'
         },
         {
           name: 'updated_At',
           label: 'updated_At'
         }
       ]  
           
       try{
          if(log!==null ||log !==undefined){
        
          res.json({
         data: log,
         columns
       });
            
          }
       }
       catch(err){
           res.status(400).send(`sorry Valog not found due to ${err}`)
       }
    
    }
//Vb-----------------------------
    if(sensor==='Vb'){
    const log = await Vblog.find({userid, createdAt: {$gte :startDate ,$lte:endDate}}).sort({createdAt:-1});
    const columns = [
      {
       name: 'userid',
       label: 'Sensor Name'
      },
      {
        name: 'Vb',
        label: 'Value'
      },
      {
        name: 'created_At',
        label: 'Created_At'
      },
      {
        name: 'updated_At',
        label: 'updated_At'
      }
    ]  
    try{
      res.json({
        data: log,
        columns
      });
    }
    catch(err){
           res.status(400).json(err);
    } 

    }
//Vc------------------------------
    if(sensor==='Vc'){
      const log = await Vclog.find({userid, createdAt: {$gte :startDate ,$lte:endDate}}).sort({createdAt:-1});
      const columns = [
        {
         name: 'userid',
         label: 'Sensor Name'
        },
        {
          name: 'Vc',
          label: 'Value'
        },
        {
          name: 'created_At',
          label: 'Created_At'
        },
        {
          name: 'updated_At',
          label: 'updated_At'
        }
      ]  
      try{
        res.json({
          data: log,
          columns
        });
      }
      catch(err){
             res.status(400).json(err);
      } 
    }
//Ia--------------------------------
    if(sensor==='Ia'){
      const log = await Ialog.find({userid, createdAt: {$gte :startDate ,$lte:endDate}}).sort({createdAt:-1});
      const columns = [
        {
         name: 'userid',
         label: 'Sensor Name'
        },
        {
          name: 'Ia',
          label: 'Value'
        },
        {
          name: 'created_At',
          label: 'Created_At'
        },
        {
          name: 'updated_At',
          label: 'updated_At'
        }
      ]  
      try{
        res.json({
          data: log,
          columns
        });
      }
      catch(err){
             res.status(400).json(err);
      } 
    }
//Ib--------------------------------
    if(sensor==='Ib'){
      const log = await Iblog.find({userid, createdAt: {$gte :startDate ,$lte:endDate}}).sort({createdAt:-1});
      const columns = [
        {
         name: 'userid',
         label: 'Sensor Name'
        },
        {
          name: 'Ib',
          label: 'Value'
        },
        {
          name: 'created_At',
          label: 'Created_At'
        },
        {
          name: 'updated_At',
          label: 'updated_At'
        }
      ]  
      try{
        res.json({
          data: log,
          columns
        });
      }
      catch(err){
             res.status(400).json(err);
      } 
    }
//Ic--------------------------------
    if(sensor==='Ic'){
      const log = await Iclog.find({userid, createdAt: {$gte :startDate ,$lte:endDate}}).sort({createdAt:-1});
      const columns = [
        {
         name: 'userid',
         label: 'Sensor Name'
        },
        {
          name: 'Ic',
          label: 'Value'
        },
        {
          name: 'created_At',
          label: 'Created_At'
        },
        {
          name: 'updated_At',
          label: 'updated_At'
        }
      ]  
      try{
        if(log)
        {
          
          res.send({
            data: log,
            columns
          });
      }
        
      }
      catch(err){
             res.status(400).json(err);
      } 
    }
//Pf-------------------------------
    if(sensor==='Pf'){
      const log = await Pflog.find({userid, createdAt: {$gte :startDate ,$lte:endDate}}).sort({createdAt:-1})
      const columns = [
        {
         name: 'userid',
         label: 'Sensor Name'
        },
        {
          name: 'Pf',
          label: 'Value'
        },
        {
          name: 'created_At',
          label: 'Created_At'
        },
        {
          name: 'updated_At',
          label: 'updated_At'
        }
      ]  
      try{
        if(log)
        {
          
          res.send({
            data: log,
            columns
          });
      }
        
      }
      catch(err){
             res.status(400).json(err);
      } 
    }
  //A------------------------------
    if(sensor==='A'){
      const log = await Alog.find({userid, createdAt: {$gte :startDate ,$lte:endDate}}).sort({createdAt:-1});
      try{
        if(log)
        {
          console.log(log);
          res.status(200).send(log);
      }
        
      }
      catch(err){
             res.status(400).json(err);
      } 
    }
    //B------------------------------
    if(sensor==='B'){
      const log = await Blog.find({userid, createdAt: {$gte :startDate ,$lte:endDate}}).sort({createdAt:-1});
      try{
        if(log)
        {
          console.log(log);
          res.status(200).send(log);
      }
        
      }
      catch(err){
             res.status(400).json(err);
      } 
    }
    //PA--------------------------------
    if(sensor==='PA'){
      const log = await PAlog.find({userid, createdAt: {$gte :startDate ,$lte:endDate}}).sort({createdAt:-1})
      const columns = [
        {
         name: 'userid',
         label: 'Sensor Name'
        },
        {
          name: 'PA',
          label: 'Value'
        },
        {
          name: 'created_At',
          label: 'Created_At'
        },
        {
          name: 'updated_At',
          label: 'updated_At'
        }
      ]       
      try{
        if(log)
        {
          
          res.json({
            data: log,
            columns
          });
      }
        
      }
      catch(err){
             res.status(400).json(err);
      } 
    }
    //PR---------------------------------
    if(sensor==='PR'){
      const log = await PRlog.find({userid, createdAt: {$gte :startDate ,$lte:endDate}}).sort({createdAt:-1})
      const columns = [
        {
         name: 'userid',
         label: 'Sensor Name'
        },
        {
          name: 'PR',
          label: 'Value'
        },
        {
          name: 'created_At',
          label: 'Created_At'
        },
        {
          name: 'updated_At',
          label: 'updated_At'
        }
      ]  
      try{
        if(log)
        {
          
          res.json({
            data: log,
            columns
          });
      }
        
      }
      catch(err){
             res.status(400).json(err);
      } 
    }
    //u-----------------------------------
    if(sensor==='U'){
      const log = await Ulog.find({userid, createdAt: {$gte :startDate ,$lte:endDate}}).sort({createdAt:-1})
      const columns = [
        {
         name: 'userid',
         label: 'Sensor Name'
        },
        {
          name: 'U',
          label: 'Value'
        },
        {
          name: 'created_At',
          label: 'Created_At'
        },
        {
          name: 'updated_At',
          label: 'updated_At'
        }
      ]  
      try{
        if(log)
        {
          // console.log(log);
          res.json({
            data: log,
            columns
          });
      }
        
      }
      catch(err){
             res.status(400).json(err);
      } 
    }
  }
  catch(err){
    res.staus(400).json(err);
  }


});
module.exports=router;