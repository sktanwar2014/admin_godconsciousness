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
    console.log('req.bodf', req.body)
    let params = {
          title : req.body.title,
          description:req.body.description 
      }
      try {
        const newActivity = new Events(params);
        const result = await newActivity.insertEvent();
        if(result !==undefined && result !== null && result !== ""){
            res.send(true);
        }else{
            res.send(false);
        }        
    } catch (err) {
        next(err);
    }
}

  

const updateEvent = async function (req, res, next) {
    console.log('req.bodf', req.body)
    let params = {
        title : req.body.title,
        description : req.body.description,
       posted_by : req.body.posted_by,
       posted_on : req.body.posted_on,
       id : req.body.id
    }
    try {
        const newActivity = new Events(params);
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
    updateEvent : updateEvent,
    insertEvent : insertEvent, 
    handleEventActiveDeactive : handleEventActiveDeactive

};