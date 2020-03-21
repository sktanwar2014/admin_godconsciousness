const about = require('../models/about.js');


const getabout = async function (req, res, next) {
    try {
        const newActivity = new about();
        const result = await newActivity.getabout();
        res.send({ aboutList: result});              
    } catch (err) {
        nexAt(err);
    }
}





module.exports = {    
    getabout : getabout
};