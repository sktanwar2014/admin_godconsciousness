const Events = require('../models/Events.js');


const getEvents = async function (req, res, next) {
    try {
        const newActivity = new Events({});
        const result = await newActivity.getEvents();
        res.send({ eventList: result});
    } catch (err) {
        next(err);
    }
}


const handleEventActiveDeactive = async function (req, res, next) {
    const params = {
        id: req.body.id,
        is_active : req.body.is_active === 1 ? 0 : 1,
    }
    try {
        const newActivity = new Events(params);
        await newActivity.handleEventActiveDeactive();
        const result = await newActivity.getEvents();
        res.send({ eventList: result});              
    } catch (err) {
        next(err);
    }
}

  const insertEvent = async function (req,res,next) {
    let params = {
          title : req.body.title,
          description:req.body.description,
          event_date : req.body.event_date,
      }
      try {
        const newActivity = new Events(params);
        const addedResult = await newActivity.insertEvent();
      
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
        id : req.body.id,
        event_date : req.body.event_date,        
    }
    try {
        const newActivity = new Events(params);
        await newActivity.updateEvent();
        
        const result = await newActivity.getEvents();
        res.send({ eventList: result});

    } catch (err) {
        nexAt(err);
    }
}



module.exports = {    
    getEvents : getEvents,
    updateEvent : updateEvent,
    insertEvent : insertEvent, 
    handleEventActiveDeactive : handleEventActiveDeactive

};