import AdminPanelBody from '../../components/AdminPanelBody.jsx';

describe('AdminPanelBody Component', () => {
  global.localStorage = {
    getItem: (str) => str
  };

  const props = {
    dispatch: () => {},
    show: () => {},
    allCenters: {
      data: []
    }
  };

  describe('AdminPanelBody should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<AdminPanelBody {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('AdminPanelBody handle events', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<AdminPanelBody {...props} />);
      let centerButton = wrapper.find('.centers-button');
      expect(centerButton.length).toEqual(1);
      let addCenterButton = wrapper.find('.add-center-button');
      expect(addCenterButton.length).toEqual(1);
      centerButton.simulate('click');
      addCenterButton.simulate('click');
    });
  });
});
