const router = require('express').Router();
const joi = require('@hapi/joi');
const User = require('../Model/user.model');
const Admin = require('../Model/admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verify = require('../middleware/adminTokenVerify');
const Ip = require('../Model/ipLog.model');
const ThresholdTracker = require('../Model/thresholdTrack.model');
const thresholdTrack = require('../functions/thresholdTrack');
const Complaint = require('../Model/complaint.model');
// const unirest = require('unirest');
// const mailgun = require('mailgun-js');
const path = require('path');
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const hbs = require("nodemailer-express-handlebars");
const axios = require('axios');


// Admin register Schema 
const registerSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required()
});

// Admin login Schema 
const loginSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().min(3).required()
});

// Complaint schema
const complaintSchema = joi.object({
    subject: joi.string(),
    description: joi.optional() 
});

// _________________________Admin Register________________________

router.route('/register').post( async(req, res) => {

    try{
    const err = await registerSchema.validateAsync(req.body);
} catch(err){
    res.status(400).send(err.details[0].message);
}
    
const username = await Admin.findOne({
    username: req.body.username
});
if(username){
    res.status(400).send('UserName must be unique');
}
const email = await Admin.findOne({
    email: req.body.email
});
if(email){
    res.status(400).send('Email is already exist');
}
const salt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hashSync(req.body.password, salt);

const admin = new Admin({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword
});

const adminCreated = await admin.save();
// asign token
const token = jwt.sign({
    id: adminCreated._id,
    username: adminCreated.username,
    email: adminCreated.email,
    profilePic: adminCreated.profilePic,}, 
process.env.USER_TOKEN_KEY,
);
res.send({
    admin: {
        id: adminCreated._id,
        username: adminCreated.username,
        email: adminCreated.email

    },
    token
});

});

//__________________________Admin Login_______________

router.route('/login').post( async(req, res) => {
  try{
     const err = await loginSchema.validateAsync(req.body);
  } catch(err){
      res.status(400).send(err.details[0].message);
  }
  const admin = await Admin.findOne({ username: req.body.username });
  if(!admin){
      res.status(401).send('Invalid UserName');
  }
  const validPassword = await bcrypt.compare(req.body.password, admin.password);
  if(!validPassword){
      res.status(401).send('Incorrect Password');
  }
  const token = jwt.sign({
      id: admin._id,
      username: admin.username,
      email: admin.email,
      profilePic: admin.profilePic
},
process.env.USER_TOKEN_KEY
);
res.header('auth', token).send({
    admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        profilePic: admin.profilePic,
        },
    token
});
});

//_____________________________Auth___________________

router.get('/auth', verify, async(req, res) => {
    try{
    const admin = await Admin.findOne({
        _id: req.admin.id
    });
    res.send({
        admin: {
            id: admin._id,
            username: admin.username,
            email: admin.email,
            profilePic: admin.profilePic
        }

    });
   } catch (err){
       res.status(401).send(err);
   }
    
    


});

//_____________________________Login History_________

router.route('/loginhistory').get(async(req, res) => {

    try{
        const history = await Ip.find();
        res.send(history);

} catch(err){
    res.status(400).send(err);
}
});

//__________________________Single User Login History________
router.route('/userloginHistory/:id').get( async(req,res)=>{
    try{
        const history = await Ip.find({userid: req.params.id});
        res.send(history);

    } catch(err){
        res.status(400).send(err);
    }
});

//______________________________User Details___________
router.route('/userinfo').get(async(req,res) => {
try{
    const user = await User.find();
    res.send(user);
} catch(err){
    res.status(400).send(err);
}
});

//_______________________________Delete User___________
router.route('/delete').post( async(req, res) => {
  try{
    const deleted = await User.findByIdAndDelete(req.body.id);
    res.send("User Deleted")
} catch(err){
    res.status(400).send(err);
}
    });
//_______________________________Threshold Track Record_____________
router.route('/thresholdHistory').post( async(req, res) => {
    try{
        const data = await ThresholdTracker.find();
        res.send(data);
    } catch(err)
    {
        res.status(400).send(err);
    }
    
});

//________________________________Single User info_________
router.route('/singleUser/:id').get(async(req, res) => {
    
    try{
        const user = await User.findById(req.params.id);
        res.send(user);
    } catch(err){
        res.status(400).send(err);
    }
    
});

// ________________________________ Register Complaints______________
router.route('/newComplaint').post( async (req, res) => {
  try{
       const err = complaintSchema.validateAsync(req.body);
  } catch(err){
      return res.status(400).send(err.details[0].message)
  }
  
    const complaint = new  Complaint({
      subject: req.body.subject,
      userid: req.body.userid,
      username: req.body.username,
      sensor: req.body.sensor,
      description: req.body.description,
    });
    try{
        const registered = await complaint.save();
        res.send('Complaint registered Successfully')
    } catch(err){
        res.status(400).send(err);
    }
});

// _______________________________Complaint History___________________
router.route('/complaintHistory').get(async(req, res) => {
    try{
  const complaint = await Complaint.find();
  res.send(complaint)
    } catch(err){
        res.status(400).send(err);
    }
});

//__________________________________ Get Complaint aginst user___________________
router.route('/userComplaint').post( async (req, res) => {
    try {
        const userComplaint = await Complaint.find({userid: req.body.userid});
        res.send(userComplaint);
    } catch(err){
        res.status(400).send(err);
    }
});

//________________________________Get Single Complaint_________________________
router.route('/getComplaint/:id').get( async (req, res) => {
    try{
        const complaint = await Complaint.findById(req.params.id);
        res.json(complaint);
    } catch(err){
        res.status(400).send(err);
    }
});

//_________________________________Change Complaint Status______________________
router.route('/complaintStatus').post( async (req ,res) => { 
    const arr = req.body.selectedItems;
        await arr.forEach( async (id) => {
            try{
            const complaint = await Complaint.findById(id);
            complaint.status = req.body.status;
            await complaint.save();
            } catch(err){
                res.status(400).send(err);
            }
        });
        res.send("complaint status changed");
        });

//_________________________________Email Sending_________________________________
router.route('/email').post(async (req, res) => {
    console.log(req.body);
   const from = req.body.from;
   const to = req.body.to;
   const sub = req.body.subject;

// MAIL GUN -------
const auth = {
  auth: {
    api_key: process.env.MAILGUN_APIKEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};
const transport = nodemailer.createTransport(mg(auth));
const url = `http://localhost:5000/admin/emailVerify/${to}`
const mailOptions = {
   from: from,
   to: to,
   subject: sub,
   text: 'This is testing',
   html: '<Table border=0 >'+
          '<tr><td><h2>Email Varification</h2></td></td>'+
          '<tr><td></td></tr>'+
           '<tr><td>Please confirm your email address by clicking the link below.</td></tr>' +
        '<tr><td>We may need to send you critical information about our service and it is important that we have an accurate email address.</td></tr>' +
           `<tr><td colspan="2"><a style="font-family: Helvetica Neue ,Helvetica,Arial,sans-serif; cursor:pointer; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;" href=${url} >Email Verify</a></td></tr>` +
         
            '<tr><td>Regards:  Admin</td></tr>' 
        

//    template: {
//        name: 'Email-Template/main.handlebars',
//        engine: 'handlebars',
//     }
        
};
    
transport.sendMail(mailOptions, (err, info) => {
    if(err){
        console.log(err);
        res.status(400).send(err);
    }
    else{
        console.log(info);
        res.send(info.message);
    }
    
})

    });


// email verified 
router.route('/emailVerify/:email').get(async (req, res) => {

    try{
     const user = await User.findOne({email: req.params.email})
     user.email_verified = true;
     await user.save();
     return res.redirect('http://localhost:5000/login');
} catch(err){
    return res.status(400).send(err);
}
});

module.exports = router;