import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedAdminCenters, { AdminCenters } from '../components/AdminCenters.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('AdminCenters Component', () => {

  const initialState = {
    centerReducer: {
      status: "Error",
      message: "",
      allCenters: {
      data:[{
        id: '1',
        name: 'City Hall',
        description: {
          substr: () => {}
        },
        location: {
          substr: () => {}
        },
        capacity:"500",
        price:"50000"
      }]
    }
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

  describe('AdminCenters form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<AdminCenters {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render connected component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedAdminCenters /></Provider>);
    });

  });

});
