const Prayers = require('../models/Prayer.js');


const getPrayers = async function (req, res, next) {
    try {
        const newActivity =  new Prayers({});
        const result = await newActivity.getPrayers();
        res.send({ PrayersList: result});              
    } catch (err) {
        next(err);
    }
}



const insertPrayer = async function (req,res,next) {
  
    let params = {
          prayer : req.body.prayer,
          event_date : req.body.event_date,
      }
      try {
       const newActivity = new Prayers(params);
       const addedResult = await newActivity.insertPrayer();
     
       const result = await newActivity.getPrayers();
       res.send({ PrayersList: result});
   } catch (err) {
        next(err);
    }
}


const updatePrayer = async function (req,res,next){
  let params = {
      prayer : req.body.prayer,
      id : req.body.id,
      event_date : req.body.event_date,
  }
  try{
      const newActivity = new Prayers(params);
      const result = await newActivity.updatePrayer();
        
      if(result !==undefined && result !== null && result !== ""){
        res.send(true);
    }else{
        res.send(false);
    }        
} catch (err) {
    next(err);
}
  }





module.exports = {    
    getPrayers : getPrayers,
    updatePrayer : updatePrayer, 
    insertPrayer  : insertPrayer
    
};