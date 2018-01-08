import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Routes, { history } from  '../routes.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Routes Component', () => {
  describe('App form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(Routes());
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for dumb component', () => {
      const wrapper = shallow(Routes());
      expect(wrapper).toMatchSnapshot();
    });

     });

});
