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
    // console.log('req.bodf', req.body)
     let params = {
          prayer : req.body.prayer,
            
       }
       try {
         const newActivity = new Prayers(params);
         const result = await newActivity.insertPrayer();
         if(result !==undefined && result !== null && result !== ""){
             res.send(true);
         }else{
             res.send(false);
         }        
     } catch (err) {
         next(err);
     }
 }

const updatePrayer = async function (req,res,next){
  let params = {
      prayer : req.body.prayer,
      id : req.body.id
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
    nexAt(err);
}
  }





module.exports = {    
    getPrayers : getPrayers,
    updatePrayer : updatePrayer, 
    insertPrayer  : insertPrayer
    
};