import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './reducers/userReducer';
import eventReducer from './reducers/eventReducer';
import centerReducer from './reducers/centerReducer';

const reducer = combineReducers({
  authReducer,
  eventReducer,
  centerReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
