import NavBar from '../components/NavBar.jsx';

global.localStorage = {
    getItem: (str) => {
      return str;
    }
  }

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
    });
  });

  describe('NavBar should render self', () => {
    it('it should render for sign in page', () => {
      const { wrapper } = setup("SignInForm");
    });
  });

  describe('NavBar should render self', () => {
    it('it should render for sign up page', () => {
      const { wrapper } = setup("SignUpForm");
    });
  });

  describe('NavBar should render self', () => {
    it('it should render for my events page', () => {
      const { wrapper } = setup("MyEvents");
    });
  });

  describe('NavBar should render self', () => {
    it('it should render for add event page', () => {
      const { wrapper } = setup("AddEvent");
    });
  });

  describe('NavBar should render self', () => {
    it('it should render for modify event page', () => {
      const { wrapper } = setup("ModifyEvent");
    });
  });

  describe('NavBar should render self', () => {
    it('it should render for all centers page', () => {
      const { wrapper } = setup("AllCenters");
    });
  });
});
