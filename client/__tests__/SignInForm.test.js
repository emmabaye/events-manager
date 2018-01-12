import React, { Components } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedSignInForm, { SignInForm } from '../components/SignInForm.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('SignInForm Component', () => {
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

  describe('SignIn page  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = mount(<SignInForm />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for connected component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedSignInForm /></Provider>);
    });

    it('it should render redirect on  success', () => {
      const wrapper = shallow(<SignInForm {...props} status="Success" />);
    });
  });

  describe('SignIn page events', () => {
    it('it should handle onChange event', () => {
      const wrapper = shallow(<SignInForm {...props} />);
      const emailInput = wrapper.find('[name="email"]');
      emailInput.simulate('change', { target: {} });
    });

    it('it should submit form', () => {
      const wrapper = mount(<Provider store={store}><ConnectedSignInForm /></Provider>);
      const button = wrapper.find('.btn');
      button.simulate('click', { preventDefault: () => {} });
    });
  });
});
