import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Helpers
import { APP_TOKEN } from './api/config/Constants';

// Routes
const PageLoader = lazy(() => import('./Component/SubComponent/PageLoader.js'));
const Home = lazy(() => import('./Component/Home.js'));
const Login = lazy(() => import('./Component/LoginPage/Login.js'));
const EventForm = lazy(() => import('./Component/Event/EventList.js'));
const Miracle = lazy(()=> import('./Component/Miracles/miracleList.js'));
const Prayer = lazy(()=> import('./Component/Prayers/Prayer.js'));
const Direction = lazy(()=> import('./Component/Direction/Direction.js'));
const OBE = lazy(()=> import('./Component/Obe/obe.js'));
const Contact = lazy(()=> import('./Component/Contact/Contact.js'));

// const updatecontact = lazy(()=> import('./Component/Contact/updatecontact.js'));
// const UpdateEvent = lazy(()=> import('./Component/Event/UpdateEvent.js'));
// const UpdateMiracle = lazy(()=> import('./Component/Miracles/UpdateMiracle.js'));
// const UpdatePrayer = lazy(()=> import('./Component/Prayers/UpdatePrayer.js'));
// const UpdateDirection = lazy(()=> import('./Component/Direction/updateDirection.js'));
// const UpdateObe = lazy(()=> import('./Component/Obe/updateObe.js'));
// const InsertEvent = lazy(()=> import('./Component/Event/insertEvent.js'));
// const InsertMiracle = lazy(()=> import('./Component/Miracles/insertMIracle.js'));
// const InsertPrayer = lazy(()=> import('./Component/Prayers/InsertPrayer.js'));
// const InsertDirection = lazy(()=> import('./Component/Direction/InsertDirection.js'));
// const UpdateAbout = lazy(()=> import('./Component/AboutGC/AboutGC.js'));


export default function Routes() {
  return (
    <Suspense fallback = {<h3>Loading...</h3>}>
      <Switch>
        <Route exact path="/login"  render={props =>  <Login {...props} /> } />
        <Route exact path="/logout" render={props =>  <Redirect to="/login" /> }/>

        <Route 
          exact 
          path="/"
          render = { props => {
            return APP_TOKEN.notEmpty ? <Home {...props} /> : <Redirect to="/login" />  }}
        />

        <Route 
          exact 
          path="/event"
          render = { props => {
            return APP_TOKEN.notEmpty ? <EventForm {...props} /> : <Redirect to="/login" />  }}
        />
        
        <Route 
          exact 
          path="/miracle"
          render = { props => {
            return APP_TOKEN.notEmpty ? <Miracle {...props} /> : <Redirect to="/login" />  }}
        />
        
        <Route 
          exact 
          path="/prayer"
          render = { props => {
            return APP_TOKEN.notEmpty ? <Prayer {...props} /> : <Redirect to="/login" />  }}
        />

        <Route 
          exact 
          path="/direction"
          render = { props => {
            return APP_TOKEN.notEmpty ? <Direction {...props} /> : <Redirect to="/login" />  }}
        />

        <Route 
          exact 
          path="/obe"
          render = { props => {
            return APP_TOKEN.notEmpty ? <OBE {...props} /> : <Redirect to="/login" />  }}
        />

        <Route 
          exact 
          path="/contact"
          render = { props => {
            return APP_TOKEN.notEmpty ? <Contact {...props} /> : <Redirect to="/login" />  }}
        />
    
        {/* <Route exact path="/updatecontact" component={updatecontact} />
        <Route exact path="/UpdateEvent" component={UpdateEvent} />
        <Route exact path="/UpdateMiracle" component={UpdateMiracle}/>
        <Route exact path="/UpdatePrayer" component={UpdatePrayer}/>
        <Route exact path="/UpdateDirection" component={UpdateDirection}/> 
        <Route exact path="/UpdateObe" component={UpdateObe}/>
        <Route exact path="/InsertEvent" component={InsertEvent} />
        <Route exact path="/InsertMiracle" component={InsertMiracle} />
        <Route  exact path="/InsertPrayer" component={InsertPrayer}/>
        <Route exact path = "/InsertDirection" component={InsertDirection} />
        <Route exact path = "/UpdateAbout" component={UpdateAbout}/> */}
        
      </Switch>
    </Suspense>
  );
};


