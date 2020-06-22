 const ifPowerOff=require('../functions/powerOff');
 const ifPowerOn=require('../functions/powerOn');
 const onlineConnectedLoad=require('../functions/connectedLoadOn');
 const offlineConnectedLoad = require('../functions/connectedLoadOff');
 const EnergySensor = require('../Model/sensor.model');
 const createLog = require(`./alertsLog`);
 const noftify = require('./EmitNotify');
 
 
 
 const notifications = async (io,sensorid,Va,Vb,Vc,Ia,Ib,Ic,U)=>{
   console.log(Va,Vb,Vc,sensorid)

//phase Down alerts
    
if(Va === 0){
    const msg= "PhaseA is down";
     createLog(sensorid,'Va', Va, msg);
     noftify(io, sensorid, msg, 'Voltage', 'warning', false);
    console.log("PhaseA is down")
}
if(Vb===0){
     const msg = "PhaseB is Down";
     createLog(sensorid,'Vb',Vb,msg);
     noftify(io,sensorid,msg,'Voltage','warning',false);
    console.log("PhaseB is down")
} 
if(Vc===0){
     const msg = "PhaseC is Down";
    createLog(sensorid,'Vc',Vc,msg);
    noftify(io,sensorid,msg,'Voltage','warning',false);
     console.log("PhaseC is down")
}

 
//---------------------------------------------------------

//Abnormal state alerts

if(Va === 0 && Vb === 0 && Vc !== 0){
    const msg = "Abnormal state";
    createLog(sensorid,'Abnormal',null,msg);
    noftify(io,sensorid,msg,'Abnormal','warning',false);

} 
if(Va !== 0 && Vb === 0 && Vc === 0){
    const msg = "Abnormal state";
    createLog(sensorid,'Abnormal',null,msg);
    noftify(io,sensorid,msg,'Abnormal','warning',false);

}
if(Va === 0 && Vb !== 0 && Vc === 0){
    const msg = "Abnormal state";
    createLog(sensorid,'Abnormal',null,msg);
    noftify(io,sensorid,msg,'Abnormal','warning',false);

    console.log("Abnormal state")
}

//------------------------------------------------------------

// Power faliure Alerts

if(Va === 0 && Vb === 0 && Vc === 0 && Ia === 0){
    console.log("Power is Failed");
    const msg = "Power is Failed";
    createLog(sensorid ,'PowerFail' ,null ,msg);
    noftify(io, sensorid ,msg, 'PowerFail', 'warning', false); 
    ifPowerOff(sensorid)
    
}//end of root if

else{
     console.log('power is on')
     ifPowerOn(io, sensorid);
    }





//--------------------------------------------------------------

//Connection Alerts

if(Ia===0 && Ib===0 && Ic===0 && Va!==0 && Vb!==0 && Vc!==0)
{
    console.log("Connected load is offline")
    const msg = "Connected load is offline";
    createLog(sensorid,'Connectd_Load_Offline',null,msg)
    noftify(io,sensorid,msg,'Connectd_Load_Offline','error',false);   
    offlineConnectedLoad(sensorid);
}
else{
    console.log('connected load is online')
    onlineConnectedLoad(io, sensorid);
}
//----------------------------------------------------------------

//Unbalanced load alerts
if((Va-Vb)>30 || (Vb-Va)>30){
    console.log("Unbalanced Load  Due to Va and Vb");
    const msg = "Unbalanced Load  Due to Va and Vb";
    createLog(sensorid,'unbalanced_load',null,msg);
    noftify(io,sensorid,msg,'unbalanced_load','error',false);   
    
}
if((Vb-Vc)>30 || (Vc-Vb)>30){
    console.log("Unbalanced Load Vb and Vc");
    const msg = "Unbalanced Load Vb and Vc";
    createLog(sensorid,'unbalanced_load',null,msg);
    noftify(io,sensorid,msg,'unbalanced_load','error',false);   
}
if((Vc-Va)>30 || (Va-Vc)>30){
    console.log("Unbalanced Load Vc and Va");
    const msg = "Unbalanced Load Vc and Va";
    createLog(sensorid,'unbalanced_load',null,msg);
    noftify(io,sensorid,msg,'unbalanced_load','error',false);   
}

//Unit alerts
    try{
     const sensor = await EnergySensor.findById(sensorid);
    if(sensor){
        //   let U_upperVal=sensor.U_upperLmt;  
        //       U_upperVal = U_upperVal-(.20*U_upperVal);    // 20% minus from U_upperValue
        //       U_upperVal = U_upperVal-(.15*U_upperVal);    // 15% minus from U_upperValue
        //       U_upperVal = U_upperVal-(.10*U_upperVal);      // 10% minus from U_upperValue
        //       console.log(`Units = ${U_upperVal}`);
        const total_units=sensor.U_upperLmt;            // database saved value
        let percentage=(U/total_units)*100;   
            //percentage=100-percentage;
        if(percentage==25){
            console.log(`25% units reached to his threshold `)
            const msg = '25% units reached to his threshold';
            createLog(sensorid,'Unit',percentage,msg);
            noftify(io,sensorid,msg,'Unit','warning',false);   
          
        }
        else if(percentage==50){
            console.log(`50% units reached to his threshold `)
            const msg = `50% units reached to his threshold `;
            createLog(sensorid,'Unit',percentage,msg);
            noftify(io,sensorid,msg,'Unit','warning',false);   
            
        }
        else if(percentage==75){
            console.log(`75% units reached to his threshold `)
            const msg = `75% units reached to his threshold `;
            createLog(sensorid,'Unit',percentage,msg);
            noftify(io,sensorid,msg,'Unit','warning',false);   
            
        }
        else if(percentage==100){
            console.log(`100% units reached to his threshold`)
            const msg = `100% units reached to his threshold`;
            noftify(io,sensorid,msg,'Unit','error',false);   
            createLog(sensorid,'Unit',percentage,msg);
            
        }
        
         
   
     }
     
    }
    catch(err){
        console.log(err);
    }
  


}

module.exports= notifications;