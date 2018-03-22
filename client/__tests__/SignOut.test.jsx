import SignOut from '../components/SignOut.jsx';

global.localStorage = {
  setItem: (str) => str
};


describe('Sign out Component', () => {
  describe('Sign out component should render self', () => {
    it('should render self', () => {
      const wrapper = shallow(<SignOut />);
      expect(wrapper.length).toEqual(1);
    });
  });
});
