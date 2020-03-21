const Prayers = require('../models/Prayer.js');


const getPrayers = async function (req, res, next) {
    try {
        const newActivity = new Prayers();
        const result = await newActivity.getPrayers();
        res.send({ PrayersList: result});              
    } catch (err) {
        next(err);
    }
}





module.exports = {    
    getPrayers : getPrayers
};