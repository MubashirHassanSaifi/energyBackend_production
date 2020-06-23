const express =require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const path = require('path');
const compression = require('compression');
const sensorRouter=require('./Router/sensor');
const logsRouter=require('./Router/logs');
const thresholeRouter=require('./Router/threshole');
const userRouter = require('./Router/user');
const adminRouter = require('./Router/admin');
const http = require('http');
const socketio = require('socket.io');
const axios = require('axios');
const cron = require('node-cron');
//-------------------------------------------------------------------
const notifications = require('./functions/alerts')
const checkThreshole = require('./functions/threshole')
const update_Va = require('./functions/sensor/Va_update');
const update_Vb = require('./functions/sensor/Vb_update');
const update_Vc = require('./functions/sensor/Vc_update');
const update_Ia = require('./functions/sensor/Ia_update');
const update_Ib = require('./functions/sensor/Ib_update');
const update_Ic = require('./functions/sensor/Ic_update');
const update_Pf = require('./functions/sensor/Pf_update');
const update_PA = require('./functions/sensor/PA_update');
const update_PR = require('./functions/sensor/PR_update');
const update_U = require('./functions/sensor/U_update');
const EnergySensor = require('./Model/sensor.model');
//--------------------------------------------------------------------

//create server object
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('build'));
app.use(compression());

//database connectivity
const connectionString = process.env.CONNECTION_STRING;
mongoose.connect(connectionString,{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open',() => console.log(`MongoDB connection is established`));

//port
const port = process.env.PORT || 5000;
const server = app.listen(port , console.log(`server is running on port ${port}`));

//
//  cron.schedule('* * * * *',() => {
//     console.log("hello Mubashir");
//  });

//
const io =socketio(server);

io.on('connection',(socket)=>{
   console.log('A client is connected');
   // require('./functions/EmitNotify')(socket);
   
   socket.on('message',(status)=>{
   socket.broadcast.emit('dimming',status);
   console.log(status);
   });
   
   socket.emit('message','you are connected');

   //update------------------------------------------
   socket.on("Values",async(data)=>{
   

      console.log(data);
      
      const Va = data.voltage.Va;
      const Vb = data.voltage.Vb;
      const Vc = data.voltage.Vc;
      const Ia = data.current.Ia;
      const Ib = data.current.Ib;
      const Ic = data.current.Ic;
      const Pf = data.power.Pf;
      const PA = data.power.PA;
      const PR = data.power.PR;
      const U = data.power.U;
      const sensorid = data._id;

      
      
      if(sensorid !== null || sensorid !== undefined){
      //generate notifications 
       notifications(io, sensorid, Va, Vb, Vc, Ia, Ib, Ic, U);

        // thershole
       checkThreshole(io, sensorid, Va, Vb, Vc, Ia, Ib, Ic, Pf, U);

       try{
      const sensor =await EnergySensor.findById(sensorid);
      if(sensor){
      console.log("hello");
         const userid=sensor.userid;
      
      //update Va
      await update_Va(io,sensorid,userid,Va);
  
      //UPDATE Vb
      await update_Vb(io,sensorid,userid,Vb);
  
      //update Vc
      await update_Vc(io,sensorid,userid,Vc);
  
      //update Ia
      await update_Ia(io,sensorid,userid,Ia);
      
      //update Ib
      await update_Ib(io,sensorid,userid,Ib);
  
      //update Ic
      await update_Ic(io,sensorid,userid,Ic);
      
      //update Pf
      await update_Pf(io,sensorid,userid,Pf);
  
      //update PA
      await update_PA(io,sensorid,userid,PA);
  
      //updata PR
      await update_PR(io,sensorid,userid,PR);
  
      //updata U
      await update_U(io,sensorid,userid,U);
      
       }
      }
      catch(err){
         console.log(`sensor is not found due to ${err}`)
      }
   }

   })

   socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
    return io;

   });

app.set('socketio', io);
app.use('/energysensor',sensorRouter);
app.use('/logs',logsRouter);
app.use('/threshole',thresholeRouter);
app.use('/user', userRouter);
app.use('/admin',adminRouter);
app.get('/*', (req, res) => {
   res.sendFile( path.resolve(__dirname,'build', 'index.html') );
 });

module.exports = app;
