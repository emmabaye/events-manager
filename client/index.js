import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.js'
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App'


ReactDOM.render(
<Provider store={store} >
 <Routes />
 </Provider>,
document.getElementById('app')
)