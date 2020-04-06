import React from 'react';
import  {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Component/Home.js';
import EventForm from './Component/Event/EventList.js';
import Miracle from './Component/Miracles/miracleList.js';
import Prayer from './Component/Prayers/Prayer.js'
import Direction from './Component/Direction/Direction.js'
import obe from './Component/Obe/obe.js'
import Contact from './Component/Contact/Contact.js';
import updatecontact from './Component/Contact/updatecontact.js'
import UpdateEvent from './Component/Event/UpdateEvent.js';
import UpdateMiracle from './Component/Miracles/UpdateMiracle.js';
import UpdatePrayer from './Component/Prayers/UpdatePrayer.js';
import UpdateDirection from './Component/Direction/updateDirection.js';
import UpdateObe from './Component/Obe/updateObe.js';
import InsertEvent from './Component/Event/insertEvent.js';
import InsertMiracle from './Component/Miracles/insertMIracle.js';
import InsertPrayer from './Component/Prayers/InsertPrayer.js';
import InsertDirection from './Component/Direction/InsertDirection.js';
import UpdateAbout from './Component/AboutGC/AboutGC.js';
import LoginPage from './Component/Login page/loginpage.js';
function App() {
  return (
    <Router>
    <Suspense>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Event" component={EventForm} />            
        <Route path="/Miracle" component={Miracle} />     
        <Route path="/Prayer" component={Prayer} />     
        <Route path="/Direction" component={Direction} />   
        <Route path="/obe" component={obe} />   
        <Route path="/Contact" component={Contact} />  
        <Route exact path="/updatecontact" component={updatecontact} />
        <Route exact path="/UpdateEvent" component={UpdateEvent} />
        <Route exact path="/UpdateMiracle" component={UpdateMiracle}/>
        <Route exact path="/UpdatePrayer" component={UpdatePrayer}/>
        <Route exact path="/UpdateDirection" component={UpdateDirection}/> 
        <Route exact path="/UpdateObe" component={UpdateObe}/>
        <Route exact path="/InsertEvent" component={InsertEvent} />
        <Route exact path="/InsertMiracle" component={InsertMiracle} />
        <Route  exact path="/InsertPrayer" component={InsertPrayer}/>
        <Route exact path = "/InsertDirection" component={InsertDirection} />
        <Route exact path = "/UpdateAbout" component={UpdateAbout}/>
        <Route exact path = "/Loginpage" component={LoginPage}/>
      </Switch>
    </Suspense>
      </Router>
  );
}

export default App;
