const express = require('express')
const Routing = express.Router();

const Events = require('../controllers/Events.js');
Routing.route("/getEvents").get(Events.getEvents);



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


const about = require('../controllers/about.js');
Routing.route("/getabout").get(contact.getabout);


module.exports = Routing;