const Ulog = require('../../Model/Logs/U.model');
const moment = require ('moment');
const getWeeklyUnits = async (type,date, id, res) => {
    const log = await Ulog.find({userid:id});   
    const data    = await Ulog.aggregate([
                {
                    $match:{
                        createdAt:{$gt:date},
                        userid: id,
                        
                    }
                    
                },
                {
                    $project:{
                        days : {
                            $dateToString: { format:'%d/%m/%Y', date: '$createdAt'}
                        },
                        U:'$U' 
                    }
                        
                    
                }
                // {
                //     $group:{
                //         _id:'$U',
                //         value:{
                //             $avg: '$U'
                //         }
                //     }
                // }
                
            ]);
            console.log(data);
            res.json(data);
};
module.exports = getWeeklyUnits;