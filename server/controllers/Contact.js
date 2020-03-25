const contacts = require('../models/contact.js');


const getcontact = async function (req, res, next) {
    try {
        const newActivity = new contacts({});
        const result = await newActivity.getcontact();
        res.send({ contactList: result});              
    } catch (err) {
        nexAt(err);
    }
}


const updateContact = async function (req, res, next) {
    let params = {
        phone_no : req.body.phone_no,
        email_add : req.body.email_add,
        address: req.body.address,
        id: req.body.id,
    }
    try {
        const newActivity = new contacts(params);
        const result = await newActivity.updateContact();
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
    getcontact : getcontact,
    updateContact: updateContact,
};