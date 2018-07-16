import NavBar from '../components/NavBar.jsx';

global.localStorage = {
  getItem: (str) => str
};

/**
 * Creates a navbar wrapper for test case
 * @param  {string} page String displaying appropriate navbar for a page
 * @return {object}      Returns props and wrapper
 */
let setup = (page) => {
  const props = {
    page: page
  };

  const wrapper = shallow(<NavBar {...props} />);

  return {
    props,
    wrapper
  };
};

describe('NavBar component', () => {
  describe('NavBar should render self', () => {
    it('it should render for landing page', () => {
      const { wrapper } = setup("landingpage");
      expect(wrapper.length).toEqual(1);
    });
  });

  describe('NavBar should render self', () => {
    it('it should render for sign in page', () => {
      const { wrapper } = setup("SignInForm");
      expect(wrapper.length).toEqual(1);
    });
  });

  describe('NavBar should render self', () => {
    it('it should render for sign up page', () => {
      const { wrapper } = setup("SignUpForm");
      expect(wrapper.length).toEqual(1);
    });
  });

  describe('NavBar should render self', () => {
    it('it should render for my events page', () => {
      const { wrapper } = setup("MyEvents");
      expect(wrapper.length).toEqual(1);
    });
  });

  describe('NavBar should render self', () => {
    it('it should render for add event page', () => {
      const { wrapper } = setup("AddEvent");
      expect(wrapper.length).toEqual(1);
    });

    it('it should render for add event page for logged in user', () => {
      const { wrapper } = setup("AddEvent");
      wrapper.instance().isLoggedIn = true;
      expect(wrapper.length).toEqual(1);
    });
  });

  describe('NavBar should render self', () => {
    it('it should render for modify event page', () => {
      const { wrapper } = setup("ModifyEvent");
      expect(wrapper.length).toEqual(1);
    });
  });

  describe('NavBar should render self', () => {
    it('it should render for all centers page', () => {
      const { wrapper } = setup("AllCenters");
      expect(wrapper.length).toEqual(1);
    });
  });
});
