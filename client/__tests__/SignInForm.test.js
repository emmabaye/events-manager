import ConnectedSignInForm, { SignInForm } from '../components/SignInForm.jsx';

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
      const wrapper = mount(<SignInForm />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for connected component', () => {
      const wrapper = shallow(<Provider store={store}><ConnectedSignInForm /></Provider>);
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
