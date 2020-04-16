const obe = require('../models/obes.js');


const getobes = async function (req, res, next) {
    try {
        const newActivity = new obe({});
        const result = await newActivity.getobes();
        res.send({ obeList: result});              
    } catch (err) {
        next(err);
    }
}


const updateObe = async function (req, res, next) {
    let params = {
        
        description : req.body.description,
        id : req.body.id,
       updated_by : req.body.updated_by,    
    }
    try {
        const newActivity = new obe(params);
        await newActivity.updateObe();
        
        const result = await newActivity.getobes();
        res.send({ obeList: result});

    } catch (err) {
        next(err);
    }
}



module.exports = {    
    getobes : getobes,
    updateObe : updateObe
};