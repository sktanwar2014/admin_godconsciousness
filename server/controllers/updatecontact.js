const updatecontacts = require('../models/updatecontact.js');





const changeState = async function (req, res, next) {
    let params = {
        type: req.body.type,
        id : req.body.id,
        is_active : req.body.is_active == 1 ? 0 :  req.body.is_active == 0 ? 1 :'',
    }

    try {
        const activity = new updatecontacts(params);        
        await activity.changeState();

        let result =[];
        if(params.type === 'contact'){
            result = await activity.getContactList();
        }else{
            result = await activity.getTabRelatedList();
        }
        
        res.send({ resultList: result });
    } catch (err) {
        next(err);
    }
}


module.exports = {    
   changeState: changeState,
 updatecontacts : updatecontacts
  
};