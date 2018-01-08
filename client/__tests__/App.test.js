import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedApp, { App } from '../containers/App.js';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {

  const initialState = {
  };

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  describe('App form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render connected component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedApp /></Provider>);
    });

  });

});
