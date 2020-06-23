const router = require('express').Router();
const joi = require('@hapi/joi');
const User = require('../Model/user.model');
const Admin = require('../Model/admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verify = require('../middleware/adminTokenVerify');
const Ip = require('../Model/ipLog.model');

// Admin register Schema 
const registerSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required()
});

// Admin login Schema 
const loginSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().min(7).required()
});

// ____________________Admin Register________________________

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
const salt = bcrypt.genSalt(10);
const hashPassword = bcrypt.hashSync(req.body.password, salt);

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
    profilePic: adminCreated.profilePic
}, 
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

//______________Admin Login_______________

router.route('/login').post( async(req, res) => {
  try{
     const err = loginSchema.validateAsync(req.body);
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
        profilePic: admin.profilePic
        },
    token
});
});

//_____________________________Auth___________________

router.get('/auth', verify, async(req, res) => {
   try{
    const admin = await Admin.findOne({
        _id: req.admin._id
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
       res.send(401).send(err);
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

//______________________________User Details___________
router.route('/userinfo').get(async(req,res) => {
try{
    const user = await User.find();
    res.send(user);
}catch(err){
    res.status(400).send(err);
}

});

module.exports = router;