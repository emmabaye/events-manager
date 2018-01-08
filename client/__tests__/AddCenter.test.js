import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedAddCenter, { AddCenter } from '../components/AddCenter.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('AddCenter Component', () => {
  const initialState = {
    centerReducer: {
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

  describe('AddCenter form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = mount(<AddCenter />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for connected component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedAddCenter /></Provider>);
    });

    it('it should render redirect on  success', () => {
      const wrapper = shallow(<AddCenter {...props} status="Success" />);
    });
  });

  describe('AddCenter events', () => {
    it('it should handle onChange event', () => {
      const wrapper = shallow(<AddCenter {...props} />);
      const descriptionInput = wrapper.find('[name="description"]');
      descriptionInput.simulate('change', { target: {} });
    });

    it('it should submit form', () => {
      const wrapper = mount(<Provider store={store}><ConnectedAddCenter /></Provider>);
      const button = wrapper.find('.btn');
      button.simulate('click', { preventDefault: () => {} });
    });
  });
});
