import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import AdminPanel from '../components/AdminPanel.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('AdminPanel Component', () => {

  global.localStorage = {
    getItem: (str) => {
      return str;
    }
  }

  describe('AdminPanel form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<AdminPanel />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render component', () => {
      const wrapper = shallow(<AdminPanel />);
    });

    });

});
