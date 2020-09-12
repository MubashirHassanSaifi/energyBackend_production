const EnergySensor=require('../Model/sensor.model');
//const router=require('express').Router();
const Alerts=require('../Model/threshol.model');
const moment =require('moment');
const notify = require('../functions/EmitNotify');
const createAlert = require('./alertsLog');

const checkThreshole= async(io, sensorid, Va, Vb, Vc, Ia, Ib, Ic, Pf, U)=>{
      
     try{
        const sensor  =await EnergySensor.findById(sensorid)
         if(sensor){
           const userid = sensor.userid;
            const upperLmt = sensor.V_upperLmt;
           const lowerLmt = sensor.V_lowerLmt;
           const I_upperLmt = sensor.I_upperLmt;
           const Pf_lowerLmt = sensor.Pf_lowerLmt;
           const U_upperLmt = sensor.U_upperLmt;
           const U = sensor.U;
           
           
           //--------upper Voltagers---------------------------------------------
           if(Va > upperLmt){
               const msg=` phase Voltages Va:{${Va}}  exceeding above his upperlimit {${upperLmt}}`;
               notify(io, sensorid,  msg, 'Voltage', 'error', false);
               createAlert(sensorid,'Va', Va, msg);
            console.log(msg )
              }

            if(Vb > upperLmt ){
                const msg=` phase Voltages Vb:{${Vb}}  exceeding above his upperlimit {${upperLmt}}`;
                notify(io,sensorid, msg,'Voltage', 'error', false);
                createAlert(sensorid,'Vb',Va,msg);
                console.log(msg )
                  
               
        }

           if(Vc > upperLmt ){
                    const msg=` phase Voltages Vc:{${Vc}}  exceeding above his upperlimit {${upperLmt}}`;
                    notify(io,sensorid, msg,'Voltage', 'error', false);
                    createAlert(sensorid,'Vc',Va,msg);
            console.log(msg )
                  
                  }
//-----------------------------------------------------------------------------------

//----------------------lower voltages-----------------------------------------------
            if(Va < lowerLmt){
                const msg=` phase Voltages Va:{${Va}} decreasing below his lowerlimit {${lowerLmt}}`;
                notify(io,sensorid, msg,'Voltage', 'error', false);
                createAlert(sensorid,'Va',Va,msg);
                         
                }

            if(Vb < lowerLmt){
                const msg=` phase Voltages Vb:{${Vb}} decreasing below his lowerlimit {${lowerLmt}}`;
                notify(io,sensorid, msg,'Voltage', 'error', false);
                createAlert(sensorid,'Vb',Vb,msg);
                console.log(msg )
                }
            if(Vc < lowerLmt ){
                const msg=` phase Voltages Vc:{${Vc}} decreasing below his lower limit {${lowerLmt}}`;
                notify(io,sensorid, msg,'Voltage', 'error', false);
                createAlert(sensorid,'Vc',Vc,msg);
                console.log(msg )
                           
           }
//------------------------------------------------------------------------------------------

//-------------------upper current-------------------------------------------------------------
            if(Ia > I_upperLmt){
                
                const msg=` phase current Ia:{${Ia}} exceeding above his upperlimit {${I_upperLmt}}`;
                notify(io,sensorid, msg,'Current', 'error', false);
                createAlert(sensorid,'Ia',Ia,msg);
                console.log(msg )
                         

            }

            if(Ib > I_upperLmt){
                const msg=` phase current Ib:{${Ib}} exceeding above his upperlimit {${I_upperLmt}}`;
                notify(io,sensorid, msg,'Current', 'error', false);
                createAlert(sensorid,'Ib',Ib,msg);
                console.log(msg)
                         
            }

            if(Ic > I_upperLmt){
                const msg=` phase current  Ic:{${Ic}} exceeding above upperlimit {${I_upperLmt}}`;
                notify(io,sensorid, msg,'Current', 'error', false);
                createAlert(sensorid,'Ic',Ic,msg);
                console.log(msg )
                         
            }
//----------------------------------------------------------------------------------------------

//------------------------lower Pf---------------------------------------------------------

            if(Pf < Pf_lowerLmt){
                const msg=` Power Factor Pf:{${Pf}} decreasing below his lowerlimit {${Pf_lowerLmt}}`;
                createAlert(sensorid,'Pf',Pf,msg);
                notify(io,sensorid, msg,'PowerFactor', 'error', false); 
                console.log(msg )
                         
            }
//---------------------------------------------------------------------------------------------
//---------------------------Units-----------------------------------------------------
       
      
 
        const total_units = U_upperLmt;            // database saved value
        const percentage=( U/total_units )*100;
        
       
        if( percentage == 25 ){
        const msg  =(`${percentage}% units are reached to his upperlimit {${U_upperLmt}} `);
        console.log(msg);
        createAlert(sensorid,'U',U,msg);
        notify(io,sensorid, msg,'Unit', 'error', false);
        }
      else if(percentage == 50)
      {
        const msg  =(`${percentage}% units are reached to his upperlimit {${U_upperLmt}} `);
        notify(io, sensorid, msg,'Unit', 'error', false);
        createAlert(sensorid,'U',U,msg);
        console.log(msg);
      }
      else if(percentage == 75)
      {
        const msg  =(`${percentage}% units are reached to his upperlimit {${U_upperLmt}} `);
        console.log(msg);
        createAlert(sensorid,'U',U,msg);
        notify(io,sensorid, msg,'Unit', 'error', false);
      }
      else if(percentage==100)
      {
        const msg  =(`${percentage}% units are reached to his upperlimit {${U_upperLmt}} `);
        notify(io,sensorid, msg,'Unit', 'error', false);
        createAlert(sensorid,'U',U,msg);
       }

       
    else if(U > U_upperLmt){
      const msg=` Units  U:{${U}} exceeding above upperlimit {${U_upperLmt}}`;
      createAlert(sensorid,'U',U,msg);
      notify(io,sensorid, msg,'Unit', 'error', false);
    }

//------------------------------------------------------------------------------------------------
            
         
        }
     }
     catch(err){
            console.log(`sensor is not found due to ${err}`);
     }
     
    }




module.exports=checkThreshole;
