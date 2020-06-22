const Valog = require('../../Model/Logs/Va.model');
const Vblog = require('../../Model/Logs/Vb.model');
const Vclog = require('../../Model/Logs/Vc.model');
const Ialog = require('../../Model/Logs/Ia.model');
const Iblog = require('../../Model/Logs/Ib.model');
const Iclog = require('../../Model/Logs/Ic.model');
const moment = require('moment');

const getYearData = async (type, date, id, res) => {
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
    
    const queryData = await model.aggregate([
        {
            $match:{
                createdAt: {$gt : date},
                userid: id
            }

        },
        {
            $project: {
                month: {
                    $month: '$createdAt'
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
                _id: '$month',
                value:{
                    $avg:valueType
                }
            }
        }
    ]);
   
    console.log(queryData);
    let j=0;
    let months = ['null', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for(let i=1; i<=12; i++){
        let s = 0;
        let k = null;
        
        (await queryData).map((log, key)=>{
            
            if(i === log._id){
                s = 1;
                k = key;
            }});

            if(s === 1){
                data[j] = queryData[k].value;
                labels[j] = months[i];
            }
            else {
                data[j] = 0;
                labels[j] = months[i];
            }
            j++;

    }
    res.json({
        data,
        labels
    })

}
module.exports = getYearData;