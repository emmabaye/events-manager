import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedAddEvent, { AddEvent } from '../components/AddEvent.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('AddEvent Component', () => {
  const initialState = {
    eventReducer: {
      status: "Error",
      message: "",
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
    show: () => {}
  };

  describe('AddEvent form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<AddEvent {...props}/>);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for connected component', () => {
      const wrapper = shallow(<Provider store={store}><ConnectedAddEvent /></Provider>);
    });

    it('it should render redirect on  success', () => {
      const wrapper = shallow(<AddEvent {...props} status="Success" />);
    });
  });

  describe('AddEvent events', () => {
    it('it should submit form', () => {
      const wrapper = mount(<Provider store={store}><ConnectedAddEvent /></Provider>);
      const button = wrapper.find('.btn');
      button.simulate('click', { preventDefault: () => {} });
    });
  });
});
