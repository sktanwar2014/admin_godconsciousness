const about = require('../models/about.js');



const updateAbout = async function (req, res, next) {
    //console.log('req.bodf', req.body)
    let params = {
        content : req.body.content,   
        id : req.body.id
    }
    try {
        const newActivity = new about(params);
        const result = await newActivity.updateAbout();
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
    
    updateAbout : updateAbout,

  

};
   