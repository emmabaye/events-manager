import AdminPanel from '../components/AdminPanel.jsx';

describe('AdminPanel Component', () => {
  global.localStorage = {
    getItem: (str) => str
  };

  describe('AdminPanel form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<AdminPanel />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render component', () => {
      const wrapper = shallow(<AdminPanel />);
    });
  });
});
