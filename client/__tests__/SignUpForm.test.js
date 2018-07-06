import { BrowserRouter } from 'react-router-dom';
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
      const wrapper = mount(<BrowserRouter><SignUpForm /></BrowserRouter>);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for connected component', () => {
      const wrapper = mount(<BrowserRouter><Provider store={store}><ConnectedSignUpForm /></Provider></BrowserRouter>);
      expect(wrapper.length).toEqual(1);
    });

    it('it should render redirect on  success', () => {
      const wrapper = shallow(<BrowserRouter><SignUpForm {...props} status="Success" /></BrowserRouter>);
      expect(wrapper.length).toEqual(1);
    });
  });

  describe('SignUp page events', () => {
  
    it('it should handle onChange event', () => {
      const wrapper = shallow(<SignUpForm {...props} />);
      const emailInput = wrapper.find('[name="email"]');
      emailInput.simulate('change', { target: {} });
    });

    it('it should submit form', () => {
      const wrapper = mount(<BrowserRouter><Provider store={store}><ConnectedSignUpForm /></Provider></BrowserRouter>);
      const button = wrapper.find('.btn');
      button.simulate('click', { preventDefault: () => {} });
    });
  });
});
