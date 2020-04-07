const Auth = require('../models/Auth.js');

const login = async function (req, res, next) {
    let params = {
        username : req.body.username,   
        password : req.body.password
    }
    try {
        const newActivity = new Auth(params);
        const result = await newActivity.login();
            res.send(result);
    } catch (err) {
        nexAt(err);
    }
}
   


module.exports = {    
    login : login,
};
   