const obe = require('../models/obes.js');


const getobes = async function (req, res, next) {
    try {
        const newActivity = new obe({});
        const result = await newActivity.getobes();
        res.send({ obeiLst: result});              
    } catch (err) {
        next(err);
    }
}

const updateObe = async function (req,res,next) {
    let params = {
        description: req.body.description
        
    }

    try{
        const newActivity = new obe(params);
        const result = await newActivity.updateObe();
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
    getobes : getobes,
    updateObe : updateObe
};