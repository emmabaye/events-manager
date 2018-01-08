import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedMyEvents, { MyEvents } from '../components/MyEvents.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('MyEvents Component', () => {

  const initialState = {
    myEvents:[{}]
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

  describe('MyEvents form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = mount(<MyEvents />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedMyEvents /></Provider>);
    });

  });

});
