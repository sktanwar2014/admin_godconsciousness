const Miracles = require('../models/Miracles.js');


const getmiracles = async function (req, res, next) {
    try {
        const newActivity = new Miracles();
        const result = await newActivity.getMiracles();
        res.send({ miracleList: result});              
    } catch (err) {
        next(err);
    }
}





module.exports = {    
    getmiracles : getmiracles
};