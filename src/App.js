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
import AddEvent from './Component/Event/AddUpdate.js';
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
        <Route exact path="/AddEvent" component={AddEvent} />
      </Switch>
    </Suspense>
      </Router>
  );
}

export default App;
