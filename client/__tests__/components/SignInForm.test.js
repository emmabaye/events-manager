import { BrowserRouter } from 'react-router-dom';
import sinon from 'sinon';
import ConnectedSignInForm, { SignInForm } from '../../components/SignInForm.jsx';

describe('SignInForm Component', () => {
  const initialState = {
    authReducer: {
      status: "Error",
      message: "",
    }
  };

  const store = mockStore(initialState);

  const props = {
    dispatch: () => {}
  };

  describe('SignIn page  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = mount(<BrowserRouter><SignInForm /></BrowserRouter>);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for connected component', () => {
      const wrapper = shallow(<BrowserRouter><Provider store={store}><ConnectedSignInForm /></Provider></BrowserRouter>);
      expect(wrapper.length).toEqual(1);
    });

    it('it should render redirect on  success', () => {
      const wrapper = shallow(<BrowserRouter><SignInForm {...props} status="Success" /></BrowserRouter>);
      expect(wrapper.length).toEqual(1);
    });
  });

  describe('SignIn page events', () => {
    it('it should handle onChange event', () => {
      const event = { target: { name: "email", value: "user@email.com" } };
      const wrapper = shallow(<SignInForm {...props} />);
      const spy = sinon.spy(wrapper.instance(), 'handleChange');
      wrapper.instance().handleChange(event);
      expect(wrapper.state().email).toBe('user@email.com');
      expect(spy.calledOnce).toBeTruthy();
    });

    it('it should submit form', () => {
      const wrapper = mount(<BrowserRouter><Provider store={store}><ConnectedSignInForm /></Provider></BrowserRouter>);
      const button = wrapper.find('.btn');
      button.simulate('click', { preventDefault: () => {} });
    });

  });
});
