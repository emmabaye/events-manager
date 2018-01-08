import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedModifyCenter, { ModifyCenter } from '../components/ModifyCenter.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('ModifyCenter Component', () => {
  const initialState = {
    centerReducer: {
      status: "Error",
      message: "",
      center:""
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

  describe('ModifyCenter form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<ModifyCenter {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for connected component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedModifyCenter /></Provider>);
    });

    it('it should render redirect on  success', () => {
      const wrapper = shallow(<ModifyCenter {...props} status="Success" />);
    });
  });

  describe('ModifyCenter events', () => {
    it('it should handle onChange event', () => {
      const wrapper = shallow(<ModifyCenter {...props} />);
      const descriptionInput = wrapper.find('[name="description"]');
      descriptionInput.simulate('change', { target: {} });
    });

    it('it should submit form', () => {
      const wrapper = mount(<Provider store={store}><ConnectedModifyCenter /></Provider>);
      const button = wrapper.find('.btn');
      button.simulate('click', { preventDefault: () => {} });
    });
  });
});
