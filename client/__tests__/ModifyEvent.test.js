import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedModifyEvent, { ModifyEvent } from '../components/ModifyEvent.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('ModifyEvent Component', () => {
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
    show: () => {},
    match: {
      params: {
        id:"1"
      }
    }
  };

  describe('ModifyEvent form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<ModifyEvent {...props}/>);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for connected component', () => {
      const wrapper = shallow(<Provider store={store}><ConnectedModifyEvent /></Provider>);
    });

    it('it should render redirect on  success', () => {
      const wrapper = shallow(<ModifyEvent {...props} status="Success" />);
    });
  });

  describe('ModifyEvent events', () => {
    it('it should submit form', () => {
      const wrapper = mount(<Provider store={store}><ConnectedModifyEvent {...props} /></Provider>);
      const button = wrapper.find('.btn');
      button.simulate('click', { preventDefault: () => {} });
    });
  });
});
