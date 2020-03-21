const Events = require('../models/Events.js');


const getEvents = async function (req, res, next) {
    try {
        const newActivity = new Events();
        const result = await newActivity.getEvents();
        res.send({ eventList: result});              
    } catch (err) {
        next(err);
    }
}





module.exports = {    
    getEvents : getEvents
};