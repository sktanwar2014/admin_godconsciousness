const contacts = require('../models/contact.js');


const getcontact = async function (req, res, next) {
    try {
        const newActivity = new contacts();
        const result = await newActivity.getcontact();
        res.send({ contactList: result});              
    } catch (err) {
        nexAt(err);
    }
}





module.exports = {    
    getcontact : getcontact
};