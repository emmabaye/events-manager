import ConnectedAdminCenters, { AdminCenters } from '../../components/AdminCenters.jsx';

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

  const page = {
    firstPage: 1,
    currentPage: 2,
    nextPage: 3,
    lastPage: 6
  }

  const center = {
    id: 1,
    name: "Moments Event Center",
    description: "Best events centee for indoor and outdoor events",
    location: "Port Harcourt",
    capacity: 500,
    price: 200000,
    facilities: "Toilet, car park",
    userId: 1,
    image: "http://res.cloudinary.com/emmabaye/raw/upload/v1527629332/mfgudrbriui17hnqnh4y",
    available: true,
    createdAt: "2018-05-29 22:28:52.389+01",
    updatedAt: "2018-05-29 22:28:52.389+01"
  }

  const props = {
    dispatch: () => {},
    show: () => {},
    allCenters: {
      data: {
        rows: [
          center
        ],
        page
      }
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
