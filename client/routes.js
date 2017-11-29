import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MyEvents from './components/MyEvents.jsx'
import App from './containers/App.js';
import SignUpForm from './components/SignUpForm.jsx';
import SignInForm from './components/SignInForm.jsx';

export default () => {
 return (
   <BrowserRouter>
     <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/signup' component={SignUpForm}/>
      <Route exact path='/login' component={SignInForm}/>
      <Route exact path='/myevents' component={MyEvents}/>
     </Switch>
   </BrowserRouter>
 )
}