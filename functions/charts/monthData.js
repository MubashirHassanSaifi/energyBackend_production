const Valog = require('../../Model/Logs/Va.model');
const Vblog = require('../../Model/Logs/Vb.model');
const Vclog = require('../../Model/Logs/Vc.model');
const Ialog = require('../../Model/Logs/Ia.model');
const Iblog = require('../../Model/Logs/Ib.model');
const Iclog = require('../../Model/Logs/Ic.model');
const moment = require('moment');

const getMonthData = async(type, date, id, res) => {
    let model;
    let valueType;
    let data = [];
    let labels = [];
    
    if( type === 'Va'){
        model = Valog;
        valueType = '$Va';
    }
    else if ( type === 'Vb'){
        model = Vblog;
        valueType = '$Vb'
    }
    else if ( type === 'Vc'){
        model = Vclog;
        valueType = '$Vc';
    }
    else if (type === 'Ia'){
        model = Ialog;
        valueType = '$Ia';
    }
    else if (type === 'Ib'){
        model = Iblog;
        valueType = '$Ib';
    }
    else if (type === 'Ic'){
        model = Iclog;
        valueType = '$Ic';
    }
 const queryData  = await model.aggregate([
     {
        $match: {
             createdAt:{ $gt: date},
             userid: id
            }
     },
     {
         $project: {
            days : {
                $dateToString: { format:'%d/%m/%Y', date: '$createdAt'}
            },
            Va: valueType,
            Vb: valueType,
            Vc: valueType,
            Ia: valueType,
            Ib: valueType,
            Ic: valueType

         }
     },
     {
         $group:{
             _id: '$days',
             value: {
                 $avg: valueType
             }
         }
     }

]);

let j=0;
console.log(queryData);
for(let i=30; i>=0; i--){
    let dateFormat = moment().locale('en-gb').subtract(i, 'days').format('L');
    let s=0;
    let k=null;
    queryData.map((log,key)=>{
        if(log._id === dateFormat){
            s=1;
            k=key;
        }
    });
    if(s===1){
        data[j] = queryData[k].value;
        labels[j]= dateFormat
    }
    else{
        data[j] = 0;
        labels[j] = dateFormat
    }
    j++;
}
res.json({
    data,
    labels
})


};
module.exports = getMonthData;