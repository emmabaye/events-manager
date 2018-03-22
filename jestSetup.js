import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const axiosMock = new MockAdapter(axios);

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.React = React;
global.Provider = Provider;
global.configureStore = configureStore;
global.thunk = thunk;
global.middlewares = middlewares;
global.mockStore = mockStore;
global.axiosMock = axiosMock;
