const Miracles = require('../models/Miracles.js');


const getmiracles = async function (req, res, next) {
    try {
        const newActivity = new Miracles({});
        const result = await newActivity.getMiracles();
        res.send({ miracleList: result});              
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
        const newActivity = new Miracles(params);
        await newActivity.handleEventActiveDeactive();
        const result = await newActivity.getMiracles();
        res.send({ miracleList: result});              
    } catch (err) {
        next(err);
    }
}

const insertMiracle = async function (req,res,next) {
  
     let params = {
           title : req.body.title,
           descrpition:req.body.descrpition,
           event_date : req.body.event_date,
       }
       try {
        const newActivity = new Miracles(params);
        const addedResult = await newActivity.insertMiracle();
      
        const result = await newActivity.getMiracles();
        res.send({ miracleList: result});
    } catch (err) {
         next(err);
     }
 }



 const updateMiracle = async function (req, res, next) {
    let params = {
        title : req.body.title,
        descrpition : req.body.descrpition,
        id : req.body.id,
        event_date : req.body.event_date,        
    }
    try {
        const newActivity = new Miracles(params);
        await newActivity.updateMiracle();
        
        const result = await newActivity.getMiracles();
        res.send({ miracleList: result});

    } catch (err) {
        nexAt(err);
    }
}






module.exports = {    
    getmiracles : getmiracles,
    updateMiracle : updateMiracle,
    insertMiracle : insertMiracle,
    handleEventActiveDeactive : handleEventActiveDeactive
};