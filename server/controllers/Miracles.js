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
    // console.log('req.bodf', req.body)
     let params = {
           title : req.body.title,
           descrpition:req.body.descrpition
       }
       try {
         const newActivity = new Miracles(params);
         const result = await newActivity.insertMiracle();
         if(result !==undefined && result !== null && result !== ""){
             res.send(true);
         }else{
             res.send(false);
         }        
     } catch (err) {
         next(err);
     }
 }




const updateMiracle = async function (req, res, next) {
    console.log('req.body', req.body)
    let params = {
        title : req.body.title,
        descrpition : req.body.descrpition,
        created_by : req.body.created_by,
        created_on : req.body.created_on,
        id : req.body.id
    }
    try {
        const newActivity = new Miracles(params);
        const result = await newActivity.updateMiracle();
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
    getmiracles : getmiracles,
    updateMiracle : updateMiracle,
    insertMiracle : insertMiracle,
    handleEventActiveDeactive : handleEventActiveDeactive
};