const router = require('express').Router();
const User = require('../Model/user.model');
const jwt = require('jsonwebtoken');
const joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const verify = require('../middleware/userTokenVerify');
const ipLog = require('../functions/ipLogs');


// Validation
 const registerSchema = joi.object({
     username: joi.string().required(),
     userid: joi.string().lowercase().required(),
     email: joi.string().required(),
     password: joi.string().required().min(7),
     phone: joi.allow(null),
     state: joi.allow(null),
     region: joi.allow(null),
     country: joi.allow(null)    
     //  location:{
    //      state: joi.string(),
    //      region: joi.string(),
    //      country: joi.string()
    //  }


 });

 const loginSchema = joi.object({
     email: joi.string().required(),
     password: joi.string().required()
 });

 //___________________user Registration______________________________

 router.route('/register').post( async (req,res)=>{
  
    try{
    const err = await registerSchema.validateAsync(req.body);
    }
     catch (err){
        return res.status(400).send(err.details[0].message);
     }
     const username = req.body.username;
     const userid = req.body.userid;
     const email= req.body.email;
     const password = req.body.password;
     const phone = req.body.phone;
     const state = req.body.state;
     const region = req.body.region;
     const country = req.body.country;
     const salt = await bcrypt.genSalt(10);
     const hashPassword = bcrypt.hashSync(password,salt);

     // check username is already exist or not
     const userIdExist = await User.findOne({userid});
     if(userIdExist){
      return res.status(400).json('This Sensor name is already assigned');
     }

     // check email is already exist or not
     const emailExist = await User.findOne({email});
     if(emailExist){
      return  res.status(400).json('Email is already exist');
     }

     //Save the user data

     const userData = new User({
        username,
        userid,
        email,
        password:hashPassword,
        phone,
        location:{
            state,
            region,
            country
        }

     });      

     const userSaved = await userData.save();
     if (userSaved){
         //assign token
         const token = jwt.sign({
             id: userSaved._id,
             name: userSaved.username,
             userid:userSaved.userid,
             email: userSaved.email,
             pic: userSaved.profilePic
         }, 
         process.env.USER_TOKEN_KEY,
         {
             expiresIn: '2 days'
         }
          );
          res.json({
              user:{
                  id: userSaved._id,
                  username: userSaved.username,
                  userid: userSaved.userid,
                  email: userSaved.email,
                  profilePic: userSaved.profilePic
                },
                token
          })
        }
});

//__________________________User Login_________________________

router.route('/login').post( async (req,res)=> {
  try{
    const err = loginSchema.validateAsync(req.body);
  }
  catch(err)
  {
      return res.status(400).send(err.details[0].message);
  }
  
  const email = req.body.email;
  const password = req.body.password;
  
  const user = await User.findOne({email});
   if(!user){
    res.status(400).send("Invalid Email");
  }
 
//   const salt  = await bcrypt.genSalt(10);
//   const hashPassword = await bcrypt.hashSync(password,salt);
//   user.password = hashPassword;
//  const usersave =await user.save();
//  if(usersave){
//      res.send("updated");
//  }


  const verifyPass = await bcrypt.compare(password, user.password);
  if(!verifyPass){
    res.status(400).send("inValid password");
  }
  ipLog(user._id, user.username);
  const token = jwt.sign({
      id: user._id,
      name: user.username,
      email: user.email,
      profilePic: user.profilePic
  },
  process.env.USER_TOKEN_KEY,
  { expiresIn: '2 days' }
  );
  res.header('auth', token).send({
      user:{
        id: user._id,
        username: user.username,
        userid: user.userid,
        email: user.email,
        profilePic: user.profilePic
      },
      token
  });
  

});


//_________________________Change Password_______

router.route('/changePassword').post( async(req,res)=>{
    
    const oldPassword = req.body.oldpassword;
    const newPassword = req.body.newpassword;
    const userid = req.body.userid;
    console.log(oldPassword, newPassword);
    const user = await User.findOne({userid});
    
    if(user){
        const chkPassword = await bcrypt.compare(oldPassword, user.password);
        console.log(chkPassword);
        if(!chkPassword){
            res.status(400).send('Invalid Old password');
        }
        else{
            const salt   = await bcrypt.genSalt(10);
         const hashPassword = await bcrypt.hashSync(newPassword,salt);
         user.password = hashPassword;
         const passwordChanged = await user.save();

         if(passwordChanged)
         res.json('password updated');
        }
    }
        
         
        
        
      
    
});

//_____________________token verfication_________
router.get('/auth',verify,async(req, res)=>{
try{
    const user = await User.findOne({_id: req.user.id});
    console.log(user);
if(user){
    res.send({
        user:{
            _id: user._id,
            username: user.username,
            userid: user.userid,
            email: user.email,
            profilePic: user.profilePic
        }
    });
}
} catch(err){
    res.status(400).json(err);
}
    
});

//______________________________update user________________________
router.route('/update/:id').post(async(req,res)=>{
    
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const country = req.body.country;
    const region = req.body.region;
    const state = req.body.state;
    try{
        const user = await User.findById(req.params.id);
        user.username = username;
        user.email = email;
        user.phone = phone;
        user.location.country = country;
        user.location.region = region;
        user.location.state = state;
        const userSaved = await user.save();
        res.json({
            message: 'user updated successfully'
        })
}
catch(err){
    res.status(400).json('Sorry! user is not updated');

}
});
//______________________________check user sensor Assigned____________
router.route('/sensorAssignedUsers').get(async(req, res) => {
    try{
     const user = await User.find({sensor: false});
     const columns = [
        {
            name: 'userid',
            label: 'Sensor Name'
        },
        {
            name: '_id',
            label: 'User Id'
        },
        {
            name: 'username',
            label: 'User Name'
        }
     ];
     let arr = [];
     user.map((f) => {
         let obj = {
             name: f.userid,
             id: f._id,
             
         };

         arr.push(obj);
     });

    
    
    
     res.send({
         data: user,
         columns,
         sensor: arr
     });

    } catch(err){
        res.status(400).send(err);
    }

});
//_______________________________getuserData according to sensor________
router.route('/sensorAgainstUser').post( async(req ,res) => {
   
    try{
        const user = await User.findOne({userid: req.body.sensor});
        res.send({
            id: user._id,
            name: user.username
        })


    } catch(err){
        res.status(400).send(err);
    }
});
module.exports = router;