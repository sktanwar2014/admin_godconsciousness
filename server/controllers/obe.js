const obe = require('../models/obes.js');


const getobes = async function (req, res, next) {
    try {
        const newActivity = new obe();
        const result = await newActivity.getobes();
        res.send({ obeiLst: result});              
    } catch (err) {
        next(err);
    }
}





module.exports = {    
    getobes : getobes
};