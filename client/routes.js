import React from 'react';
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MyEvents from './components/MyEvents.jsx'
import App from './containers/App.js';
import SignUpForm from './components/SignUpForm.jsx';
import SignInForm from './components/SignInForm.jsx';

export const history = createBrowserHistory();

export default () => {
 return (
   <Router history={history}>
     <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/signup' component={SignUpForm}/>
      <Route exact path='/login' component={SignInForm}/>
      <Route exact path='/myevents' component={MyEvents}/>
     </Switch>
   </Router>
 )
}