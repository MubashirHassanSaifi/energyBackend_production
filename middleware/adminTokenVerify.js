const { verify } = require("jsonwebtoken");

const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    const token = req.headers.auth;
    if(!token){
        res.status(401).send({
            message: 'Access Denied'
        });
    }
try {
    const verified = await jwt.verify(token, process.env.USER_TOKEN_KEY);
    if (verified) {
        res.admin = verified;
        next();

}
} catch(err){
    res.status(401).send({
        message: 'Token Expire'
    })
}



}