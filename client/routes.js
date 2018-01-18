import React from 'react';
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory, createMemoryHistory } from 'history';
import MyEvents from './components/MyEvents.jsx'
import App from './containers/App.js';
import SignUpForm from './components/SignUpForm.jsx';
import SignInForm from './components/SignInForm.jsx';
import AllCenters from './components/AllCenters.jsx';
import AddEvent from './components/AddEvent.jsx';
import ModifyEvent from './components/ModifyEvent.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import EventDetails from './components/EventDetails.jsx';
import CenterDetails from './components/CenterDetails.jsx';
import SignOut from './components/SignOut.jsx';


export const history = (process.env.NODE_ENV === 'test') ? createMemoryHistory() : createBrowserHistory();

export default () => {
 return (
   <Router history={history}>
     <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/signup' component={SignUpForm}/>
      <Route exact path='/login' component={SignInForm}/>
      <Route exact path='/myevents' component={MyEvents}/>
      <Route exact path='/centers' component={AllCenters}/>
      <Route exact path='/centers/:id' component={CenterDetails}/>
      <Route exact path='/addevent' component={AddEvent}/>
      <Route exact path='/events/:id' component={EventDetails}/>
      <Route path='/modifyevent/:id' component={ModifyEvent}/>
      <Route exact path='/admin' component={AdminPanel}/>
      <Route exaxt path='/logout' component={SignOut} />
     </Switch>
   </Router>
 )
}