import ConnectedAllCenters, { AllCenters } from '../components/AllCenters.jsx';

describe('Allcenters Component', () => {
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

  describe('Allcenters form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<AllCenters {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render connected component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedAllCenters /></Provider>);
      expect(wrapper.length).toEqual(1);
    });
  });
});
