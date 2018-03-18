import ConnectedSignUpForm, { SignUpForm } from '../components/SignUpForm.jsx';

describe('SignUpForm Component', () => {
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
