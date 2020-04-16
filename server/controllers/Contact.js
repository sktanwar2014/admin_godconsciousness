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
        address : req.body.address,
        id : req.body.id,
       email_add : req.body.email_add,    
    }
    try {
        const newActivity = new contacts(params);
        await newActivity.updateContact();
        
        const result = await newActivity.getcontact();
        res.send({ contactList: result});

    } catch (err) {
        next(err);
    }
}






module.exports = {    
    getcontact : getcontact,
    updateContact: updateContact,
};