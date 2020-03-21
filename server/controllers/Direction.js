const Directions = require('../models/Direction');


const getdirection = async function (req, res, next) {
    try {
        const newActivity = new Directions();
        const result = await newActivity.getdirection();
        res.send({ directionList: result});              
    } catch (err) {
        next(err);
    }
}





module.exports = {    
    getdirection : getdirection
};