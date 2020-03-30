const express = require('express')
const Routing = express.Router();

const Events = require('../controllers/Events.js');
Routing.route("/getEvents").get(Events.getEvents);
Routing.route("/updateEvent").post(Events.updateEvent);
Routing.route("/insertEvent").post(Events.insertEvent);

const Miracles = require('../controllers/Miracles.js');
Routing.route("/getmiracles").get(Miracles.getmiracles);
Routing.route("/UpdateMiracle").post(Miracles.updateMiracle);

const Prayers = require('../controllers/Prayers.js');
Routing.route("/getPrayers").get(Prayers.getPrayers);
Routing.route("/updatePrayer").post(Prayers.updatePrayer);

const Dir = require('../controllers/Direction.js');
Routing.route("/getdirection").get(Dir.getdirection);
Routing.route("/updateDirection").post(Dir.updateDirection);


const obe = require('../controllers/obe.js');
Routing.route("/getobes").get(obe.getobes);
Routing.route("/updateObe").post(obe.updateObe);


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