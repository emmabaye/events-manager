import ConnectedAdminCenters, { AdminCenters } from '../components/AdminCenters.jsx';

describe('AdminCenters Component', () => {
  const initialState = {
    centerReducer: {
      status: "Error",
      message: "",
      allCenters: {
        data: [{
          id: '1',
          name: 'City Hall',
          description: {
            substr: () => {}
          },
          location: {
            substr: () => {}
          },
          capacity: "500",
          price: "50000"
        }]
      }
    }
  };

  const store = mockStore(initialState);

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

  describe('AdminCenters form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<AdminCenters {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render connected component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedAdminCenters /></Provider>);
      expect(wrapper.length).toEqual(1);
    });
  });
});
