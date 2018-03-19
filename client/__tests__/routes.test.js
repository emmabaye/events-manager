import Routes, { history } from '../routes.js';

describe('Routes Component', () => {
  describe('App form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(Routes());
      expect(wrapper.length).toEqual(1);
    });
  });
});
