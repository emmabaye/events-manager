import ConnectedAddCenter, { AddCenter } from '../components/AddCenter.jsx';


describe('AddCenter Component', () => {
  const initialState = {
    centerReducer: {
      status: "Error",
      message: "",
    }
  };


  const store = mockStore(initialState);

  global.localStorage = {
    getItem: (str) => str
  };

  const props = {
    dispatch: () => {},
    show: () => {}
  };

  describe('AddCenter form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = mount(<AddCenter />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render for connected component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedAddCenter /></Provider>);
      expect(wrapper.length).toEqual(1);
    });

    it('it should render redirect on  success', () => {
      const wrapper = shallow(<AddCenter {...props} status="Success" />);
      console.log("WRAPPER ", wrapper.prop);
      expect(wrapper.length).toEqual(1);
    });
  });

  describe('AddCenter events', () => {
    it('it should handle onChange event', () => {
      const wrapper = shallow(<AddCenter {...props} />);
      const descriptionInput = wrapper.find('[name="description"]');
      descriptionInput.simulate('change', { target: {} });
    });

    it('it should submit form', () => {
      const wrapper = mount(<Provider store={store}><ConnectedAddCenter /></Provider>);
      const button = wrapper.find('.btn');
      button.simulate('click', { preventDefault: () => {} });
    });
  });
});
