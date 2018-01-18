import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedSignUpForm, { SignUpForm } from '../components/SignUpForm.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('SignUpForm Component', () => {
  const initialState = {
    authReducer: {
      status: "Error",
      message: "",
    }
  };

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  const props = {
    dispatch: () => {}
  };

  global.localStorage = {
    getItem: (str) => str
  };

  describe('SignUp page  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = mount(<SignUpForm />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for connected component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedSignUpForm /></Provider>);
    });

    it('it should render redirect on  success', () => {
      const wrapper = shallow(<SignUpForm {...props} status="Success" />);
    });
  });

  describe('SignUp page events', () => {
    it('it should handle onChange event', () => {
      const wrapper = shallow(<SignUpForm {...props} />);
      const emailInput = wrapper.find('[name="email"]');
      emailInput.simulate('change', { target: {} });
    });

    it('it should submit form', () => {
      const wrapper = mount(<Provider store={store}><ConnectedSignUpForm /></Provider>);
      const button = wrapper.find('.btn');
      button.simulate('click', { preventDefault: () => {} });
    });
  });
});
