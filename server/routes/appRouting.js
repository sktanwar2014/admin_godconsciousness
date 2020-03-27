const express = require('express')
const Routing = express.Router();

const Events = require('../controllers/Events.js');
Routing.route("/getEvents").get(Events.getEvents);
//Routing.route("/updateEvents").post(Events.updateEvents);
Routing.route("/updateEvent").post(Events.updateEvent);


const Miracles = require('../controllers/Miracles.js');
Routing.route("/getmiracles").get(Miracles.getmiracles);


const Prayers = require('../controllers/Prayers.js');
Routing.route("/getPrayers").get(Prayers.getPrayers);


const Dir = require('../controllers/Direction.js');
Routing.route("/getdirection").get(Dir.getdirection);

const obe = require('../controllers/obe.js');
Routing.route("/getobes").get(obe.getobes);

const contact = require('../controllers/Contact.js');
Routing.route("/getcontact").get(contact.getcontact);
Routing.route("/updateContact").post(contact.updateContact);


const about = require('../controllers/about.js');
Routing.route("/getabout").get(about.getabout);

// const updatecontact = require('../controllers/updatecontact.js')
// Routing.route("/changeState").post(updatecontact.changeState);

// const addevent = require('../controllers/addevent.js')
// Routing.route("/addevent").post(addevent.addevent );

module.exports = Routing;