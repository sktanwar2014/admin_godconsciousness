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

const updateEvent = async function (req, res, next) {
    let params = {
        title : req.body.title,
        description : req.body.description,
        posted_by: req.body.posted_by,
        posted_on : req.body.posted_on,
        id: req.body.id,
    }
    try {
        const newActivity = new contacts(params);
        const result = await newActivity.updateEvent();
        if(result !==undefined && result !== null && result !== ""){
            res.send(true);
        }else{
            res.send(false);
        }        
    } catch (err) {
        nexAt(err);
    }
}



module.exports = {    
    getEvents : getEvents,
    updateEvent : updateEvent

};