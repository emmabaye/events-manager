import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import AdminPanelBody from '../components/AdminPanelBody.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('AdminPanelBody Component', () => {

  const initialState = {
    modifyCenter: {
      visible: 'true'
    },
    centerDetails: {
      visible: 'true'
    }
  };

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  global.localStorage = {
    getItem: (str) => {
      return str;
    }
  }

  const props = {
    dispatch: () => {},
    show: () => {},
    allCenters: {
      data:[]
    }
  };

  describe('AdminPanelBody should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<AdminPanelBody {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

  });

  describe('AdminPanelBody handle events', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<AdminPanelBody {...props} />);
      let centerButton = wrapper.find('.centers-button');
      let addCenterButton = wrapper.find('.add-center-button');
      centerButton.simulate('click');
      addCenterButton.simulate('click');
    });



  });

});
