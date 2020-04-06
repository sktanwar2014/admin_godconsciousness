const Directions = require('../models/Direction');


const getdirection = async function (req, res, next) {
    try {
        const newActivity = new Directions({});
        const result = await newActivity.getdirection();
        res.send({ directionList: result});              
    } catch (err) {
        next(err);
    }
}
    

const insertDirection = async function (req,res,next) {
    // console.log('req.bodf', req.body)
     let params = {
           title : req.body.title,
           description:req.body.description 
       }
       try {
         const newActivity = new Directions(params);
         const result = await newActivity.insertDirection();
         if(result !==undefined && result !== null && result !== ""){
             res.send(true);
         }else{
             res.send(false);
         }        
     } catch (err) {
         next(err);
     }
 }
 

const updateDirection = async function(req,res,next){
    console.log('req.bodf', req.body)
    
         let params = {
             title: req.body.title,
             description: req.body.description,
             id : req.body.id
         }

         try {
            const newActivity = new Directions(params);
            const result = await newActivity.updateDirection();
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
    getdirection : getdirection,
    updateDirection : updateDirection,
    insertDirection : insertDirection
};