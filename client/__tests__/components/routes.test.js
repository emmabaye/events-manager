import Routes from '../../routes';

describe('Routes Component', () => {
  describe('App form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(Routes());
      expect(wrapper.length).toEqual(1);
    });
  });
});
